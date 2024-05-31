import { NextResponse, NextRequest } from "next/server";
import { getSpotifyAccessToken } from "./apis/domain/auth.api.server";

const getAccessToken = (req: NextRequest) =>
  req.cookies.get("spotify-access-token")?.value;

export function middleware(req: NextRequest) {
  // req.cookies.get("myCookieName")?.value;
  // request.cookies.getAll();
  // let cookie = request.cookies.get("spotify-access-token");
  // response.cookies.set("myCookieName", "some-value");
  // console.log(response.cookies.getAll());

  if (req.nextUrl.pathname == "/api/spotify-token") {
    const accessToken = getAccessToken(req);
  }
  // if (!accessToken) {
  //   const res = NextResponse.redirect(request.url);
  //   res.cookies.set("code", "code value");
  //   return res;
  // }
  return NextResponse.next();
}

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
