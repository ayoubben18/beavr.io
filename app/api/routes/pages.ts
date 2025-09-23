import { and, asc, count, desc, eq, ilike, or, type SQL } from "drizzle-orm";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import {
  createSearchParamsCache,
  parseAsInteger,
  parseAsString,
} from "nuqs/server";
import { z } from "zod";
import { db } from "@/db";
import { pages } from "@/db/schema";
import type { ApiRoutesAuthContext } from "../[[...route]]/route";
import {
  createPageSchema,
  searchParamsCache,
  updatePageSchema,
} from "@/types/api/pages";

const pagesApp = new Hono<ApiRoutesAuthContext>()
  .get("/", async (c) => {
    try {
      // Parse search params using the cache
      const params = await searchParamsCache.parse(c.req.query());

      const offset = (params.page - 1) * params.perPage;

      // Build where conditions
      const whereConditions: (SQL | undefined)[] = [];

      // Search filter (case-insensitive search across title and content)
      if (params.search) {
        whereConditions.push(
          or(
            ilike(pages.title, `%${params.search}%`),
            ilike(pages.content, `%${params.search}%`)
          )
        );
      }

      const whereClause =
        whereConditions.length > 0 ? and(...whereConditions) : undefined;

      // Default sorting by created date descending
      const orderByColumns = [desc(pages.createdAt)];

      // Execute queries in transaction for consistency
      const result = await db.transaction(async (tx) => {
        // Get filtered pages
        const pagesQuery = tx
          .select({
            id: pages.id,
            title: pages.title,
            content: pages.content,
            createdAt: pages.createdAt,
            updatedAt: pages.updatedAt,
          })
          .from(pages)
          .where(whereClause)
          .orderBy(...orderByColumns)
          .limit(params.perPage)
          .offset(offset);

        // Get total count for pagination
        const countQuery = tx
          .select({ count: count() })
          .from(pages)
          .where(whereClause);

        const [pagesData, countResult] = await Promise.all([
          pagesQuery,
          countQuery,
        ]);

        const totalCount = countResult[0]?.count || 0;

        return {
          data: pagesData,
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
      console.error("Error fetching pages:", error);

      return c.json(
        {
          success: false,
          error: "Internal server error",
          message: "Failed to fetch pages",
        },
        500
      );
    }
  })
  .post("/", zValidator("json", createPageSchema), async (c) => {
    try {
      const body = c.req.valid("json");

      const [newPage] = await db
        .insert(pages)
        .values({
          title: body.title,
          content: body.content,
        })
        .returning({
          id: pages.id,
          title: pages.title,
          content: pages.content,
          createdAt: pages.createdAt,
          updatedAt: pages.updatedAt,
        });

      return c.json({
        success: true,
        data: newPage,
        message: "Page created successfully",
      });
    } catch (error) {
      console.error("Error creating page:", error);

      return c.json(
        {
          success: false,
          error: "Internal server error",
          message: "Failed to create page",
        },
        500
      );
    }
  })
  .get("/:id", async (c) => {
    try {
      const id = c.req.param("id");

      const pageData = await db
        .select({
          id: pages.id,
          title: pages.title,
          content: pages.content,
          createdAt: pages.createdAt,
          updatedAt: pages.updatedAt,
        })
        .from(pages)
        .where(eq(pages.id, id))
        .limit(1);

      if (!pageData || pageData.length === 0) {
        return c.json(
          {
            success: false,
            error: "Page not found",
          },
          404
        );
      }

      return c.json({
        success: true,
        data: pageData[0],
      });
    } catch (error) {
      console.error("Error fetching page:", error);

      return c.json(
        {
          success: false,
          error: "Internal server error",
          message: "Failed to fetch page",
        },
        500
      );
    }
  })
  .patch("/:id", zValidator("json", updatePageSchema), async (c) => {
    try {
      const id = c.req.param("id");
      const body = c.req.valid("json");

      if (Object.keys(body).length === 0) {
        return c.json(
          {
            success: false,
            error: "No valid fields to update",
          },
          400
        );
      }

      const [updatedPage] = await db
        .update(pages)
        .set(body)
        .where(eq(pages.id, id))
        .returning({
          id: pages.id,
          title: pages.title,
          content: pages.content,
          createdAt: pages.createdAt,
          updatedAt: pages.updatedAt,
        });

      if (!updatedPage) {
        return c.json(
          {
            success: false,
            error: "Page not found",
          },
          404
        );
      }

      return c.json({
        success: true,
        data: updatedPage,
        message: "Page updated successfully",
      });
    } catch (error) {
      console.error("Error updating page:", error);

      return c.json(
        {
          success: false,
          error: "Internal server error",
          message: "Failed to update page",
        },
        500
      );
    }
  })
  .delete("/:id", async (c) => {
    try {
      const id = c.req.param("id");

      const [deletedPage] = await db
        .delete(pages)
        .where(eq(pages.id, id))
        .returning({
          id: pages.id,
          title: pages.title,
        });

      if (!deletedPage) {
        return c.json(
          {
            success: false,
            error: "Page not found",
          },
          404
        );
      }

      return c.json({
        success: true,
        data: deletedPage,
        message: "Page deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting page:", error);

      return c.json(
        {
          success: false,
          error: "Internal server error",
          message: "Failed to delete page",
        },
        500
      );
    }
  });

export default pagesApp;
