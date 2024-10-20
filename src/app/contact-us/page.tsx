import Lable from "@/components/Lable/Lable";
import SVGInstagram from "@/components/Svgs/SVGInstagram";
import SVGlinkedin from "@/components/Svgs/SVGlinkedin";
import SVGTelegram from "@/components/Svgs/SVGTelegram";
import { Call, DeviceMessage, Location } from "iconsax-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container !mx-auto flex flex-col md:!flex-row mb-10 mt-28 sm:!mt-44">
        <div className="!w-full !h-full flex !items-center !justify-center hover:!scale-115 transition delay-150 duration-300 ease-out ">
          <Image
            src="/assets/images/contact-us.png"
            alt="books"
            width="400"
            height="200"
          ></Image>
        </div>
        <div className="flex !w-full flex-col gap-y-8  px-4 lg:!items-start items-center mt-10">
          <h1 className="!font-bold text-3xl !text-primary flex !justify-center !items-center gap-x-1">
            راه های برقراری ارتباط با طاقچه!
          </h1>
          <text className="font-medium text-md flex gap-x-2 !items-center text-gray-500 !text-justify ">
            <Location size="16" className="!text-primary" />
            <Lable type="detail">آدرس</Lable>
            تهران،سهروردی،خ مطهری،خ یوسفیان،خ ملک،پ ۱۳
          </text>
          <text className="font-medium text-md flex gap-x-2 !items-center text-gray-500 !text-justify ">
            <Call size="16" className="!text-primary" />
            <Lable type="detail">تلفن</Lable>
            ۰۲۱ ۹۱۰ ۷۱۰ ۰۱{" "}
          </text>
          <text className="font-medium text-md flex gap-x-2 !items-center text-gray-500 !text-justify ">
            <DeviceMessage size="16" className="!text-primary" />
            <Lable type="detail">ایمیل</Lable>
            taghche@gamil.com
          </text>
          <div className="flex gap-2 !items-center !justify-center">
            <a
              target="_blank"
              href="https://www.linkedin.com"
              className="flex h-10 w-10 cursor-pointer rounded-full bg-primary bg-opacity-50 !items-center !justify-center hover:!scale-125 transition delay-150 duration-300 ease-out "
            >
              <SVGlinkedin />
            </a>
            <a
              target="_blank"
              href="https://t.me/"
              className="flex h-10 w-10 cursor-pointer rounded-full bg-primary bg-opacity-50 !items-center !justify-center hover:!scale-125 transition delay-150 duration-300 ease-out"
            >
              <SVGTelegram />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com"
              className="flex h-10 w-10 cursor-pointer rounded-full bg-primary bg-opacity-50 !items-center !justify-center hover:!scale-125 transition delay-150 duration-300 ease-out"
            >
              <SVGInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
