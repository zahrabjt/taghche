import React from "react";
import Button from "../Button/Button";
import SVGLogo from "../Svgs/SVGlinkedin";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="!w-full  !bg-secondary ">
        <div className="pl-4 py-4 container !mx-auto flex flex-row !justify-between !items-center top-0  ">
          <Link className="sm:!mx-0 !mx-auto " href="/">
            <Image
              src="/assets/images/taghche4.webp"
              alt="taghche-logo"
              width="200"
              height="50"
            ></Image>
          </Link>
          <div className="!hidden sm:!block">
            <h2>search</h2>
          </div>
          <div className="!hidden sm:!block">
            <Button type="primary" size="full">
              ورود
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
