"use client";

import { Avatar } from "@radix-ui/react-avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import { AvatarFallback, AvatarImage } from "../ui";

const AuthButton = () => {
  const { data: session } = useSession();

  console.log("se", session);

  if (session && session.user) {
    return (
      <div className="flex justify-between">
        <Avatar className="w-8 h-8 inline-flex mr-2">
          {/* <AvatarImage src={session.user?.image} alt="proflie-image" /> */}
        </Avatar>
        <button onClick={() => signOut()}>{session.user.name}</button>;
      </div>
    );
  }

  return <button onClick={() => signIn()}>로그인</button>;
};

export default AuthButton;
