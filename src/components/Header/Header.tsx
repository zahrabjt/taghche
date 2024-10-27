"use client";

import Button from "../Button/Button";
import SVGLogo from "../Svgs/SVGlinkedin";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Filter from "../Filter/Filter";

const Header = () => {
  const [publishers] = useState(["ناشر ۱", "ناشر ۲", "ناشر ۳"]);
  const [filteredPublishers, setFilteredPublishers] = useState(publishers);
  const handleFilter = (filter: any) => {
    const filtered = publishers.filter((publisher) =>
      publisher.includes(filter)
    );
    setFilteredPublishers(filtered);
  };
  return (
    <>
      <div className="!w-full  !bg-secondary flex flex-row">
        <div className="px-4  py-4 container !mx-auto grid grid-cols-8 !justify-between !items-center top-0">
          <div className=" col-span-1">
            <Link className="sm:!mx-0 !mx-auto " href="/">
              <Image
                src="/assets/images/taghche4.webp"
                alt="taghche-logo"
                width="200"
                height="50"
              ></Image>
            </Link>
          </div>
          <div className="!hidden sm:!block !w-full px-40 col-span-6">
            <Filter />
          </div>
          <div className="!hidden sm:!block col-span-1 ">
            <Button type="primary" size="large">
              ورود
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
