import { BookSquare, CallCalling, Home, UserSquare } from "iconsax-react";
import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary p-3  !hidden sm:!block shadow-md">
      <div className="container !mx-auto flex !w-full gap-x-12 sm:!justify-center lg:!justify-start items-center  ">
        <div>
          <Link
            href="/"
            className="flex gap-x-2 items-center text-white text-lg font-bold cursor-pointer"
          >
            <Home size="16" color="white" />
            خانه
          </Link>
        </div>
        <div>
          <Link
            href="/not-found"
            className="flex gap-x-2 items-center text-white text-lg font-bold cursor-pointer"
          >
            <BookSquare size="16" color="white" />
            دسته بندی کتاب
          </Link>
        </div>
        <div>
          <Link
            href="/about-us"
            className="flex gap-x-2 items-center text-white text-lg font-bold cursor-pointer"
          >
            <UserSquare size="16" color="white" />
            درباره ما
          </Link>
        </div>
        <div>
          <Link
            href="/contact-us"
            className="flex gap-x-2 items-center text-white text-lg font-bold cursor-pointer"
          >
            <CallCalling size="16" color="white" />
            تماس با ما
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
