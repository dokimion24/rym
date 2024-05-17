import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-40 w-full backdrop-blur transition-colors duration-500 border-b dark:bg-transparent h-14">
      <div className="mx-auto max-w-7xl">
        <header className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/vercel.svg" width={23} height={23} alt="DevFlow" />
            <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
              Rate your <span className="text-primary-500">music</span>
            </p>
          </Link>
          <nav className="flex gap-2 text-sm">
            <Link href="/sign-in">로그인</Link>
            <Link href="/sign-up">회원가입</Link>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
