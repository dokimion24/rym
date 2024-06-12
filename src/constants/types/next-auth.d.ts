// next-auth.d.ts
import { Session as NextAuthSession, User } from "next-auth";

declare module "next-auth" {
  interface Session extends NextAuthSession {
    user: User;
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module "next-auth" {
  interface Session {
    error?: "RefreshAccessTokenError";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token: string;
    expires_at: number;
    refresh_token: string;
    error?: "RefreshAccessTokenError";
  }
}
