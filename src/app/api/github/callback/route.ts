import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import {
  COOKIE_DURATION_IN_SECONDS,
  USER_ID_COOKIE_NAME,
} from "~/utils/constants";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    if (!code) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const accessTokenResponse = await axios.post<{ access_token: string }>(
      "https://github.com/login/oauth/access_token",
      undefined,
      {
        params: {
          code,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        },
        headers: {
          Accept: "application/json",
        },
      },
    );
    const userResponse = await axios.get<{ id: number }>(
      "https://api.github.com/user",
      {
        headers: {
          Authorization: `Bearer ${accessTokenResponse.data.access_token}`,
        },
      },
    );
    const githubId = userResponse.data.id;
    cookies().set(USER_ID_COOKIE_NAME, `github-${githubId}`, {
      path: "/",
      httpOnly: true,
      maxAge: COOKIE_DURATION_IN_SECONDS,
    });
    return NextResponse.redirect(new URL("/", request.url));
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
