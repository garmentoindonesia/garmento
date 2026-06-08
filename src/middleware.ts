import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const auth =
    req.cookies.get("admin_auth")?.value;

  const isLoginPage =
    req.nextUrl.pathname === "/login";

  const isAdminPage =
    req.nextUrl.pathname.startsWith(
      "/admin-blog"
    );

  if (isAdminPage && auth !== "true") {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  if (isLoginPage && auth === "true") {
    return NextResponse.redirect(
      new URL("/admin-blog", req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin-blog/:path*",
    "/login",
  ],
};