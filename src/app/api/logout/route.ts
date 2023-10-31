import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { USER_ID_COOKIE_NAME } from "~/utils/constants";

export async function GET(request: NextRequest) {
  cookies().delete({
    name: USER_ID_COOKIE_NAME,
    httpOnly: true,
    path: "/",
  });
  return NextResponse.redirect(new URL("/login", request.url));
}
