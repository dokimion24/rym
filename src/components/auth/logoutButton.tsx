"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui";
import { router } from "@/constants/router";

const LogoutButton = () => {
  return (
    <Button onClick={() => signOut({ callbackUrl: router.home })}>
      로그아웃
    </Button>
  );
};

export default LogoutButton;
