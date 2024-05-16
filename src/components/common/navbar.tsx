import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/vercel.svg" width={23} height={23} alt="DevFlow" />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Rate your <span className="text-primary-500">music</span>
        </p>
      </Link>
      <div className="flex-between gap-5"></div>
    </nav>
  );
};

export default Navbar;
