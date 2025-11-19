import { toNextJsHandler } from "better-auth/next-js";
import { type Context, Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { auth } from "@/auth";
import usersApp from "../routes/users";

// Define the context type for authenticated routes
export type ApiRoutesAuthContext = {
  Variables: {
    user: { id: string; role: string | null | undefined };
    session: { id: string };
  };
};

// Authentication middleware - only for protected routes
const authMiddleware = async (
  c: Context<ApiRoutesAuthContext>,
  next: () => Promise<void>,
) => {
  try {
    const session = await auth.api.getSession({
      headers: c.req.raw.headers,
    });

    if (!session) {
      return c.json(
        {
          error: "Authentication required",
          success: false,
        },
        401,
      );
    }

    // Set user and session in context
    c.set("user", session.user);
    c.set("session", session.session);

    await next();
  } catch (error) {
    return c.json(
      {
        error: error instanceof Error ? error.message : "Authentication failed",
        success: false,
      },
      401,
    );
  }
};

// Create a Hono app instance with base path and chain all routes
const app = new Hono<ApiRoutesAuthContext>()
  .basePath("/api")
  .use(logger())
  .use(
    "*",
    cors({
      origin: "*",
      allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    }),
  )
  .get("/health", (c) => {
    return c.json({
      message: "API is healthy",
      timestamp: new Date().toISOString(),
    });
  });

// Auth routes - handled by better-auth (no middleware needed)
const { POST: authPOST, GET: authGET } = toNextJsHandler(auth.handler);

const appWithAuth = app.all("/auth/*", async (c) => {
  const request = c.req.raw;
  const method = request.method;

  if (method === "POST") {
    return await authPOST(request);
  } else if (method === "GET") {
    return await authGET(request);
  }

  return c.json({ error: "Method not allowed" }, 405);
});

// Public routes group - no authentication required
const publicApp = new Hono()
  .get("/users/me", async (c) => {
    try {
      const session = await auth.api.getSession({
        headers: c.req.raw.headers,
      });

      if (!session) {
        return c.json({ user: null, session: null });
      }

      return c.json({
        user: session.user,
        session: session.session,
      });
    } catch (_error) {
      return c.json({ user: null, session: null });
    }
  });

// Protected routes group - apply auth middleware
const protectedApp = new Hono<ApiRoutesAuthContext>()
  .use("*", authMiddleware)
  .route("/users", usersApp)
  .get("/protected", (c) => {
    const user = c.get("user");
    return c.json({
      message: "This is a protected route",
      user,
    });
  });

// Mount both public and protected routes under the main app
const routes = appWithAuth.route("/", publicApp).route("/", protectedApp);

// Export the app type for RPC (for hono/client)
export type AppType = typeof routes;

// Custom handler for Next.js
const handler = (request: Request) => routes.fetch(request);

// Export the handlers for all HTTP methods
export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const OPTIONS = handler;