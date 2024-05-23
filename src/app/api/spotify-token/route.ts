import axiosInstance from "@/apis/axiosInstance";
import { cookies } from "next/headers";

const params = {
  grant_type: "client_credentials",
  client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
  client_secret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!,
};

export async function POST() {
  try {
    const res = await axiosInstance.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams(params).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    cookies().set("spotify-access-token", res.data.access_token);

    return Response.json({ status: 200, data: res.data });
  } catch (err) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
