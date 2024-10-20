import clsx from "clsx";
import React from "react";

type IProps = {
  children: string;
  size?: "mobile" | "desktop";
   type?: "detail" | "card";
};

const Lable: React.FC<IProps> = ({ children, size = "mobile" , type }) => {
  return (
    <label
      className={clsx(
        type === "card" && size === "mobile" && "lg:!text-sm md:text-sm !text-xl md:font-bold !font-medium",
        type === "detail" && size === "mobile" && "lg:!text-xl md:text-sm !text-xl md:font-bold !font-medium",
        "lg:!text-sm md:text-sm !text-xl md:font-bold !font-medium text-gray-600  "
      )}
    >
      {children}:
    </label>
  );
};

export default Lable;

{
  /* <div className=" text-xl !font-bold  text-gray-600 mx-4">
قیمت فیزیکی :
</div> */
}
