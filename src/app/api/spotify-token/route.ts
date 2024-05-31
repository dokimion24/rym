"use server";

import axios from "axios";
import { NextResponse } from "next/server";

const params = {
  grant_type: "client_credentials",
  client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
  client_secret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!,
};

export async function POST() {
  const res = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams(params).toString()
  );

  const response = NextResponse.json({ message: "success" }, { status: 200 });
  response.cookies.set("spotify-access-token", res.data.access_token, {
    path: "/",
    sameSite: "lax",
  });

  return response;
}
