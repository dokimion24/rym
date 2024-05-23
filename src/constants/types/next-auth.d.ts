import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      email: string;
      emailVerified: null | Date;
      exp: number;
      iat: number;
      id: string;
      image?: string;
      jti: string;
      name: string;
      picture?: string;
      sub: string;
      createdAt: Date;
      updatedAt: Date;
    };
  }
}
