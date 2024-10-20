import React from "react";

type IProps = {
  children: string;
};

const Span: React.FC<IProps> = ({ children }) => {
  return (
    <span className={"text-lg font-medium text-gray-400 mx-4"}>
      {children}
    </span>
  );
};

export default Span;
