import axios from "axios";

const params = {
  grant_type: "client_credentials",
  client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
  client_secret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!,
};

export async function POST() {
  const res = await axios.post(
    "https://accounts.spotify.com/api/token",
    new URLSearchParams(params).toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return new Response("test", {
    status: 200,
    headers: {
      "Set-Cookie": `spotify-access-token=${res.data.access_token}; sameSite=lax; httpOnly=true; maxAge=86400; path=/`,
    },
  });
}
