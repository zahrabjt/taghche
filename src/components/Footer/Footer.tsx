import React from "react";
import { CallCalling, EmojiHappy, Home2, Sms, UserSquare } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import SVGlinkedin from "../Svgs/SVGlinkedin";
import SVGInstagram from "../Svgs/SVGInstagram";
import SVGTelegram from "../Svgs/SVGTelegram";
import SVGPlaystore from "../Svgs/SVGPlaystore";
import SVGBazar from "../Svgs/SVGBazar";
import SVGGlobal from "../Svgs/SVGGlobal";
import Home from "@/app/page";

const Footer = () => {
  return (
    <>
      <footer
        className="!w-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(242,229,215,1) 3%, rgba(0,162,164,1) 50%, rgba(242,240,238,1) 90%)",
        }}
      >
        <div className=" !w-full !pb-16 !pt-10 !px-10 flex flex-col gap-y-6 gap-x-6 lg:grid lg:grid-cols-12  ">
          <div className="col-span-4 flex flex-col !items-start justify-start md:gap-y-6 md:px-4">
            <Image
              className="!hidden md:!block md:justify-center md:items-center"
              src="/assets/images/taghche3.png"
              alt="taghche-logo"
              width="100"
              height="100"
            ></Image>
            <text className=" !text-md !text-justify !font-normal text-gray-700 ">
              طاقچه یکی از بزرگترین سایت های دانلود کتاب رایگان است. مزیت خواندن
              کتاب رایگان در طاقچه این است که می‌توانید از تمام امکانات کتابخوان
              طاقچه مانند اشتراک‌گذاری قسمت‌های دلخواه در شبکه‌های اجتماعی،
              تغییرنوع و اندازه فونت وهایلایت کردن متن استفاده کنید.
            </text>
          </div>

          <div className="col-span-2 flex  flex-col justify-start !items-start md:gap-y-6 gap-y-2 md:px-4 ">
            <header className="!text-md !font-bold mb-4">دسترسی سریع</header>

            <Link
              href="/"
              className="!text-md !font-normal text-gray-700 flex items-center gap-x-1"
            >
              <Home2 size="16" />
              خانه
            </Link>

            <Link
              href="/about-us"
              className="!text-md !font-normal text-gray-700 flex items-center gap-x-1"
            >
              <UserSquare size="16" />
              درباره ما
            </Link>
            <Link
              href="/"
              className="!text-md !font-normal text-gray-700 flex items-center gap-x-1"
            >
              <EmojiHappy size="16" />
              تماس با ما
            </Link>
          </div>

          <div className="col-span-2 flex flex-col justify-start !items-start  md:gap-y-6 gap-y-2 md:px-4">
            <header className="!text-md !font-bold  mb-4 ">
              تماس با طاقچه
            </header>
            <Link
              href="/"
              className="flex items-center gap-x-1 !font-normal text-gray-700  "
            >
              <Sms size="18" />
              taghche@gamil.com
            </Link>
            <Link
              href="tel:+982191095284"
              className="flex items-center gap-x-1  !font-normal text-gray-700"
            >
              <CallCalling size="18" />
              021−91234567
            </Link>
            <div className="flex gap-2 !items-center !justify-center">
              <a
                target="_blank"
                href="https://www.linkedin.com"
                className="flex h-10 w-10 cursor-pointer rounded-full bg-secondary bg-opacity-50 !items-center !justify-center hover:!scale-125 transition delay-150 duration-300 ease-out "
              >
                <SVGlinkedin />
              </a>
              <a
                target="_blank"
                href="https://t.me/"
                className="flex h-10 w-10 cursor-pointer rounded-full bg-secondary bg-opacity-50 !items-center !justify-center hover:!scale-125 transition delay-150 duration-300 ease-out"
              >
                <SVGTelegram />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com"
                className="flex h-10 w-10 cursor-pointer rounded-full bg-secondary bg-opacity-50 !items-center !justify-center hover:!scale-125 transition delay-150 duration-300 ease-out"
              >
                <SVGInstagram />
              </a>
            </div>
          </div>

          <div className="col-span-2 flex flex-col  justify-start !items-start md:gap-y-6 gap-y-2 md:px-4 ">
            <header className="!text-md !font-bold  mb-4 ">دانلود سریع</header>
            <div className="flex flex-col  gap-y-2 ">
              <div className="flex cursor-pointer gap-x-2 !items-center">
                <div className="h-8 w-8 flex">
                  <SVGPlaystore />
                </div>
                <div className="!font-medium !text-md">گوگل پلی</div>
              </div>

              <div className="flex cursor-pointer gap-x-2 !items-center">
                <div className="h-8 w-8 flex ">
                  <SVGBazar />
                </div>
                <div className="!font-medium !text-md">کافه بازار</div>
              </div>

              <div className="flex cursor-pointer gap-x-2 !items-center">
                <div className="h-8 w-8 flex">
                  <SVGGlobal />
                </div>
                <div className="!font-medium !text-md">(PWA) وب اپ</div>
              </div>
            </div>
          </div>

          <div className="col-span-2 flex !items-center !justify-center hover:!scale-125 transition delay-150 duration-300 ease-linear ">
            <Image
              src="/assets/images/2.png"
              alt="books"
              width="200"
              height="100"
            ></Image>
          </div>
        </div>
      </footer>

      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(242,229,215,1) 3%, rgba(0,162,164,1) 50%, rgba(242,240,238,1) 90%)",
        }}
        lang="en-us"
        dir="ltr"
        className="flex items-center justify-center bg-secondary py-1"
      >
        <text className=" !font-bold !text-secondary ">
          &copy; 2024 All rights reserved
        </text>
      </div>
    </>
  );
};

export default Footer;
