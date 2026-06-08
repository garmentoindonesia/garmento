import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (
    body.username === username &&
    body.password === password
  ) {
    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set(
      "admin_auth",
      "true",
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      }
    );

    return response;
  }

  return NextResponse.json(
    {
      success: false,
      message: "Username atau password salah",
    },
    { status: 401 }
  );
}