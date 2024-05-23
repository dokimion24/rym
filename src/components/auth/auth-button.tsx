"use client";

import { Avatar } from "@radix-ui/react-avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import { AvatarFallback, AvatarImage } from "../ui";
import Link from "next/link";
import LoginModal from "./loginModal";

const AuthButton = () => {
  const { data: session, status } = useSession();
  console.log(session);

  if (status === "authenticated") {
    return (
      <Link
        className="flex justify-between items-center gap-2 cursor-pointer"
        href="/profile"
      >
        <Avatar className="w-6 h-6">
          <AvatarImage src={session.user.picture} alt="profile-image" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>{session.user.name}</p>
      </Link>
    );
  }

  return <LoginModal />;
};

export default AuthButton;
