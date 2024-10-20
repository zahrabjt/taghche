import React from "react";
import Button from "../Button/Button";
import SVGLogo from "../Svgs/SVGlinkedin";
import Image from "next/image";

const Header = () => {
  return (
    <>
    <div className="!w-full  !bg-secondary ">
      <div className="pl-4 py-4 container !mx-auto flex flex-row !justify-between !items-center top-0  ">
        <div className="sm:!mx-0 !mx-auto ">
          <Image
            src="/assets/images/taghche4.webp"
            alt="taghche-logo"
            width="200"
            height="50"
          ></Image>
        </div>
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
