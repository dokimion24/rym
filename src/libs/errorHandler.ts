import { ApiError } from "next/dist/server/api-utils";
import { NextResponse, NextRequest } from "next/server";

export const errorHandler =
  (...handlers: Function[]) =>
  async (req: NextRequest, res: NextResponse) => {
    try {
      for (const handler of handlers) {
        await handler(req, res);
      }
    } catch (error) {
      if (error instanceof ApiError) {
        return NextResponse.json(
          { message: error.message },
          { status: error.statusCode }
        );
      } else {
        console.log(error);
        return NextResponse.json(
          { message: "Server died for some reason" },
          { status: 500 }
        );
      }
    }
  };
