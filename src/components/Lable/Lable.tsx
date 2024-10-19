import React from "react";

type IProps = {
  children: string;
};

const Lable: React.FC<IProps> = ({ children }) => {
  return (
    <label
      className={
        "lg:!text-sm md:text-sm !text-xl md:font-bold !font-medium text-gray-600 "
      }
    >
      {children}:
    </label>
  );
};

export default Lable;
// md:text-sm lg:!text-sm !text-lg
