import prisma from "@/libs/prisma";
import * as bcrypt from "bcryptjs";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  // const body: RequestBody = await request.json();
  // const user = await prisma.user.create({
  //   data: {
  //     email: body.email,
  //     password: await bcrypt.hash(body.password, 10),
  //     name: body.name,
  //   },
  // });
  // const { password, ...result } = user;
  // return new Response(JSON.stringify(result));
}
