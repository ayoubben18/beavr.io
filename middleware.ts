import { type NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { auth } from "@/auth";
import { routing } from "./i18n/routing";
import { ROUTES } from "@/routes";
// Session type definition for better-auth
type AuthSession = {
  user: {
    id: string;
    email: string;
    role: string | null | undefined;
    [key: string]: any;
  };
  session: {
    id: string;
    [key: string]: any;
  };
} | null;

// User state classification for route protection
enum UserState {
  UNAUTHENTICATED = "unauthenticated",
  CUSTOMER = "customer",
  ADMIN = "admin",
}

// Role-based redirect mapping
const ROLE_REDIRECT_MAP = {
  [UserState.CUSTOMER]: "/profile",
  [UserState.ADMIN]: "/admin/dashboard",
} as const;

// Create the next-intl middleware
const handleI18nRouting = createMiddleware(routing);

/**
 * Determines the user state based on session data
 */
function getUserState(session: AuthSession): UserState {
  if (!session) return UserState.UNAUTHENTICATED;
  return session.user.role === "admin" ? UserState.ADMIN : UserState.CUSTOMER;
}

/**
 * Handles authentication route protection (login/register pages)
 * Redirects authenticated users to appropriate dashboards
 */
function handleAuthRoute(
  request: NextRequest,
  response: NextResponse,
  userState: UserState,
  locale: string
): NextResponse {
  if (userState !== UserState.UNAUTHENTICATED) {
    const redirectPath = ROLE_REDIRECT_MAP[userState];
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${redirectPath}`;
    return NextResponse.redirect(url, { headers: response.headers });
  }
  return response;
}

/**
 * Handles protected route access control
 * Redirects unauthenticated users to login and unauthorized users to appropriate pages
 */
function handleProtectedRoute(
  request: NextRequest,
  response: NextResponse,
  session: AuthSession,
  isAdminRoute: boolean,
  locale: string
): NextResponse {
  // No session - redirect to login
  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/login`;
    return NextResponse.redirect(url, { headers: response.headers });
  }

  // Admin route - check role
  if (isAdminRoute && session.user.role !== "admin") {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/profile`;
    return NextResponse.redirect(url, { headers: response.headers });
  }

  // User is authenticated and authorized for this route
  return response;
}

export async function middleware(request: NextRequest) {
  // First, handle internationalization and get the response
  const response = handleI18nRouting(request);

  const { pathname } = request.nextUrl;

  // Skip middleware for API routes, static files
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon.ico")
  ) {
    return response;
  }

  // Extract locale from pathname
  const pathSegments = pathname.split("/").filter(Boolean);
  const potentialLocale = pathSegments[0] || routing.defaultLocale;
  const locale = routing.locales.includes(potentialLocale as any)
    ? potentialLocale
    : routing.defaultLocale;
  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

  // Define public paths that don't require authentication
  const publicPaths = Object.values(ROUTES.public);
  const isPublicPath = publicPaths.some((path) =>
    pathWithoutLocale.startsWith(path)
  );
  const authPaths = Object.values(ROUTES.auth);

  // Check if current pathname (without locale) is an auth route
  const isAuthRoute = authPaths.some((path) =>
    pathWithoutLocale.startsWith(path)
  );

  // Check if current pathname (without locale) is an admin route
  const isAdminRoute = pathWithoutLocale.startsWith(ROUTES.admin.home);

  const customerPaths = [
    ROUTES.customer.pages.home,
    ROUTES.customer.orders.home,
  ];
  // Check if current pathname (without locale) is a customer route
  const isCustomerRoute = customerPaths.some((path) =>
    pathWithoutLocale.startsWith(path)
  );

  // Skip auth check for public paths
  if (isPublicPath) {
    return response;
  }

  // Try to get session
  let session: AuthSession = null;
  try {
    session = await auth.api.getSession({ headers: request.headers });
  } catch (error) {
    console.error("Middleware: Error getting session:", error);
  }

  // Get user state for route decisions
  const userState = getUserState(session);

  // Handle auth routes (login/register) - redirect authenticated users
  if (isAuthRoute) {
    return handleAuthRoute(request, response, userState, locale);
  }

  // Handle protected routes (admin/customer)
  if (isAdminRoute || isCustomerRoute) {
    return handleProtectedRoute(
      request,
      response,
      session,
      isAdminRoute,
      locale
    );
  }

  // For all other routes, allow access
  return response;
}

export const config = {
  runtime: "nodejs",
  matcher: [
    {
      source:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
