import React from "react";
import Button from "../Button/Button";
import SVGLogo from "../../../public/assets/Svgs/SVGLogo";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="!w-full flex flex-row bg-[#f2e5d7] !justify-between !items-center px-5">
        <div className=" flex flex-row">
          <Image
            src="/assets/images/Taaghche-Logo.png"
            alt="taghche-logo"
            width="100"
            height="200"
          ></Image>
        </div>
        <div className=" flex flex-row">search</div>
        <div className=" flex flex-row">
          <Button size="full">ورود</Button>
        </div>
      </div>
    </>
    // <div className="bg-alpha-50 ">
    //   <section className="  mx-auto !hidden  !w-full  max-w-desktop flex-row   !justify-between bg-alpha-50 md:!block  ">
    //     <header className=" grid  !h-50 !w-full grid-cols-12 px-base">
    //       <div className="col-span-1 !my-auto !w-full !items-center !justify-center">
    //         <span className=" hidden w-full lg:block">
    //           <image className=" h-full w-full" />
    //         </span>
    //       </div>
    //       <div className="flex flex-row !items-center justify-center gap-x-base">
    //         <Button size="full">ورود</Button>
    //       </div>
    //     </header>
    //   </section>
    // </div>
  );
};

export default Header;
