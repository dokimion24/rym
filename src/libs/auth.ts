import { type NextAuthOptions, type User } from "next-auth";
import { type Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/libs/prisma";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
  callbacks: {
    async jwt({ token, account }: any) {
      console.log("account", account);
      if (account) {
        cookies().set("rym-access-token", account.access_token, {
          maxAge: 7 * 24 * 60 * 60, // 7days
        });
        cookies().set("rym-refresh-token", account.refresh_token, {
          maxAge: 60 * 60, // 1hour
        });

        const userProfile: User = {
          id: token.sub as string,
          name: token.name,
          email: token.email,
          image: token?.picture,
        };

        return {
          access_token: account.access_token,
          expires_at: account.expires_at,
          refresh_token: account.refresh_token,
          user: userProfile,
        };
      } else if (Date.now() < token.expires_at * 1000) {
        return token;
      } else {
        if (!token.refresh_token) throw new Error("Missing refresh token");

        try {
          const response = await fetch("https://oauth2.googleapis.com/token", {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              client_id: process.env.GOOGLE_CLIENT_ID!,
              client_secret: process.env.GOOGLE_CLIENT_SECRET!,
              grant_type: "refresh_token",
              refresh_token: token.refresh_token as string,
            }),
            method: "POST",
          });

          const responseTokens = await response.json();
          if (!response.ok) throw responseTokens;

          return {
            ...token,
            access_token: responseTokens.access_token,
            expires_at: Math.floor(
              Date.now() / 1000 + (responseTokens.expires_in as number)
            ),
            refresh_token: responseTokens.refresh_token ?? token.refresh_token,
          };
        } catch (error) {
          console.error("Error refreshing access token", error);
          return { ...token, error: "RefreshAccessTokenError" as const };
        }
      }
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as User;
        session.accessToken = token.access_token;
        session.refreshToken = token.refresh_token;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: { params: { access_type: "offline", prompt: "consent" } },
    }),
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
};
