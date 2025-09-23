import { and, asc, count, desc, eq, ilike, or, type SQL } from "drizzle-orm";
import { Hono } from "hono";
import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import type { ApiRoutesAuthContext } from "../[[...route]]/route";

// Create searchParamsCache for users API
export const searchParamsCache = createSearchParamsCache({
  // Pagination
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(10),

  // Basic filters
  search: parseAsString.withDefault(""), // Search across name and email
  role: parseAsString.withDefault("customer"), // Filter by role (default to customers)
});

export type GetUsersSchema = Awaited<
  ReturnType<typeof searchParamsCache.parse>
>;

const usersApp = new Hono<ApiRoutesAuthContext>()
  .get("/", async (c) => {
    try {
      // Parse search params using the cache
      const params = await searchParamsCache.parse(c.req.query());

      const offset = (params.page - 1) * params.perPage;

      // Build where conditions
      const whereConditions: SQL[] = [];

      // Role filter (only customers by default)
      whereConditions.push(eq(users.role, params.role as "customer" | "admin"));

      // Search filter (case-insensitive search across name and email)
      if (params.search) {
        whereConditions.push(
          or(
            ilike(users.name, `%${params.search}%`),
            ilike(users.email, `%${params.search}%`),
          ),
        );
      }

      const whereClause =
        whereConditions.length > 0 ? and(...whereConditions) : undefined;

      // Default sorting by name ascending
      const orderByColumns = [asc(users.name)];

      // Execute queries in transaction for consistency
      const result = await db.transaction(async (tx) => {
        // Get filtered users
        const usersQuery = tx
          .select({
            id: users.id,
            name: users.name,
            email: users.email,
            image: users.image,
            role: users.role,
            createdAt: users.createdAt,
          })
          .from(users)
          .where(whereClause)
          .orderBy(...orderByColumns)
          .limit(params.perPage)
          .offset(offset);

        // Get total count for pagination
        const countQuery = tx
          .select({ count: count() })
          .from(users)
          .where(whereClause);

        const [usersData, countResult] = await Promise.all([
          usersQuery,
          countQuery,
        ]);

        const totalCount = countResult[0]?.count || 0;

        return {
          data: usersData,
          totalCount: totalCount,
        };
      });

      const totalPages = Math.ceil(result.totalCount / params.perPage);

      // Return response
      return c.json({
        success: true,
        data: result.data,
        pagination: {
          page: params.page,
          limit: params.perPage,
          totalCount: result.totalCount,
          totalPages,
          hasNextPage: params.page < totalPages,
          hasPreviousPage: params.page > 1,
        },
      });
    } catch (error) {
      console.error("Error fetching users:", error);

      return c.json(
        {
          success: false,
          error: "Internal server error",
          message: "Failed to fetch users",
        },
        500,
      );
    }
  })
  .get("/:id", async (c) => {
    try {
      const id = c.req.param("id");

      const userData = await db
        .select({
          id: users.id,
          name: users.name,
          email: users.email,
          image: users.image,
          role: users.role,
          createdAt: users.createdAt,
        })
        .from(users)
        .where(eq(users.id, id))
        .limit(1);

      if (!userData || userData.length === 0) {
        return c.json(
          {
            success: false,
            error: "User not found",
          },
          404,
        );
      }

      return c.json({
        success: true,
        data: userData[0],
      });
    } catch (error) {
      console.error("Error fetching user:", error);

      return c.json(
        {
          success: false,
          error: "Internal server error",
          message: "Failed to fetch user",
        },
        500,
      );
    }
  })
  .patch("/:id", async (c) => {
    try {
      const id = c.req.param("id");
      const body = await c.req.json();
      const currentUser = c.get("user");

      // Only admins can update users, or users can update themselves
      if (currentUser.role !== "admin" && currentUser.id !== id) {
        return c.json(
          {
            success: false,
            error: "Unauthorized",
            message: "You can only update your own profile",
          },
          403,
        );
      }

      const allowedFields = ["name", "image"];
      if (currentUser.role === "admin") {
        allowedFields.push("role");
      }

      const updates: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(body)) {
        if (allowedFields.includes(key)) {
          updates[key] = value;
        }
      }

      if (Object.keys(updates).length === 0) {
        return c.json(
          {
            success: false,
            error: "No valid fields to update",
          },
          400,
        );
      }

      const [updatedUser] = await db
        .update(users)
        .set(updates)
        .where(eq(users.id, id))
        .returning({
          id: users.id,
          name: users.name,
          email: users.email,
          image: users.image,
          role: users.role,
          updatedAt: users.updatedAt,
        });

      if (!updatedUser) {
        return c.json(
          {
            success: false,
            error: "User not found",
          },
          404,
        );
      }

      return c.json({
        success: true,
        data: updatedUser,
        message: "User updated successfully",
      });
    } catch (error) {
      console.error("Error updating user:", error);

      return c.json(
        {
          success: false,
          error: "Internal server error",
          message: "Failed to update user",
        },
        500,
      );
    }
  })
  .delete("/:id", async (c) => {
    try {
      const id = c.req.param("id");
      const currentUser = c.get("user");

      // Only admins can delete users
      if (currentUser.role !== "admin") {
        return c.json(
          {
            success: false,
            error: "Unauthorized",
            message: "Only admins can delete users",
          },
          403,
        );
      }

      // Prevent admins from deleting themselves
      if (currentUser.id === id) {
        return c.json(
          {
            success: false,
            error: "Cannot delete yourself",
          },
          400,
        );
      }

      const [deletedUser] = await db
        .delete(users)
        .where(eq(users.id, id))
        .returning({
          id: users.id,
          name: users.name,
          email: users.email,
        });

      if (!deletedUser) {
        return c.json(
          {
            success: false,
            error: "User not found",
          },
          404,
        );
      }

      return c.json({
        success: true,
        data: deletedUser,
        message: "User deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting user:", error);

      return c.json(
        {
          success: false,
          error: "Internal server error",
          message: "Failed to delete user",
        },
        500,
      );
    }
  });

export default usersApp;