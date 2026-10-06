import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const pathname = request.nextUrl.pathname;

  if (!session) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (
    request.nextUrl.pathname.startsWith("/dashboard/admin") &&
    session.user.role !== "admin"
  ) {
    return NextResponse.redirect(new URL("/access-denied", request.url));
  }

  // Pages blocked users cannot access
  const blockedPages = [
    "/dashboard/add-recipe",
    "/dashboard/recipes",
    "/dashboard/favoriterecipe",
    "/dashboard/purchased-recipes",
  ];

  const isBlockedPage = blockedPages.some((page) => pathname.startsWith(page));

  // Blocked user
  if (session.user.isBlocked === "Blocked" && isBlockedPage) {
    return NextResponse.redirect(new URL("/access-denied", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/add-recipe"],
};
