"use client";

import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  Button,
} from "../ui";
import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginModal = () => {
  const handleLogin = () => {
    signIn("google", { redirect: true, callbackUrl: "/" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>로그인</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
        </DialogHeader>
        <div className="cursor-pointer" onClick={handleLogin}>
          <Image
            width={220}
            height={50}
            src="/google.png"
            alt="google-login"
            style={{ objectFit: "contain" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
