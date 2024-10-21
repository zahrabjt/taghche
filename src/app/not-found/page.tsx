import React from "react";
import Image from "next/image";
import { EmojiSad } from "iconsax-react";

const page = () => {
  return (
    <>
      <div className="container gap-y-4 !mx-auto !w-full !h-full flex  flex-col !items-center !justify-center mb-10 mt-28 sm:!mt-44 ">
        <Image
          src="/assets/images/404.png"
          alt="books"
          width="600"
          height="600"
        ></Image>
        <a
          href="/"
          rel="noopener noreferrer"
          className="transition py-2 rounded-md flex gap-x-2 items-center bg-primary hover:bg-opacity-70 hover:!scale-105 delay-150 duration-300 ease-in-out text-white px-2 "
        >
          <EmojiSad size="16" color="white" />
          برگردیم خانه!
        </a>
      </div>
    </>
  );
};

export default page;
