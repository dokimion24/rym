import prisma from "@/libs/prisma";
import { signJwtAccessToken } from "@/libs/providers/jwt";
import * as bcrypt from "bcryptjs";

interface RequestBody {
  email: string;
}

export async function POST(request: Request) {
  // const body: RequestBody = await request.json();
  // const user = await prisma.user.findFirst({
  //   where: {
  //     email: body.email,
  //   },
  // });
  // if (user) {
  //   const accessToken = signJwtAccessToken(user);
  //   return new Response(JSON.stringify({ ...user, accessToken }));
  // } else return new Response(JSON.stringify(null));
}
