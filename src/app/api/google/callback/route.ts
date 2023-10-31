import axios from "axios";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import {
  COOKIE_DURATION_IN_SECONDS,
  GOOGLE_REDIRECT_URL,
  USER_ID_COOKIE_NAME,
} from "~/utils/constants";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code");
    if (!code) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const accessTokenResponse = await axios.postForm<{ access_token: string }>(
      "https://www.googleapis.com/oauth2/v4/token",
      {
        code,
        grant_type: "authorization_code",
        redirect_uri: GOOGLE_REDIRECT_URL,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      },
      {
        headers: {
          Accept: "application/json",
        },
      },
    );
    const userResponse = await axios.get<{ sub: string }>(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessTokenResponse.data.access_token}`,
        },
      },
    );
    const googleId = userResponse.data.sub;
    cookies().set(USER_ID_COOKIE_NAME, `google-${googleId}`, {
      path: "/",
      httpOnly: true,
      maxAge: COOKIE_DURATION_IN_SECONDS,
    });
    return NextResponse.redirect(new URL("/", request.url));
  } catch (error) {
    if (error instanceof axios.AxiosError) {
      console.log(error.response?.data);
    } else {
      console.error(error);
    }
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
