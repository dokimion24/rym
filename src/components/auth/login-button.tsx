"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <button onClick={() => signOut()}>{session.user.name}님 Log Out</button>
    );
  }

  return <button onClick={() => signIn()}>로그인</button>;
};

export default LoginButton;
