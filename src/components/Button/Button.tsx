import clsx from "clsx";
import { Login } from "iconsax-react";
import React from "react";

type IProps = {
  children: string;
  onClick?: () => void;
  htmlType?: "button" | "submit";
  type?: "primary" | "secondary" | "disabled" | "outline";
  disabled?: boolean;
  size?: "full" | "large" | "medium";
};

const Button: React.FC<IProps> = ({
  children,
  type = "primary",
  htmlType = "button",
  disabled = false,
  size = "full",
  onClick,
}) => {
  return (
    <button
      type={htmlType}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        type === "outline" &&
          !disabled &&
          " text-btnOutline  border border-btnOutline ",
        type === "primary" && !disabled && "bg-primary !text-white",
        type === "secondary" && !disabled && "bg-btnSecondary",
        (type === "disabled" || disabled) && "bg-btnFaded text-btnFaded",
        size === "full" && "w-full ",
        size === "medium" && "w-btnPrimary",
        "rounded-md px-6 py-2 mx-auto !text-[16px]  font-medium flex items-center !justify-center gap-x-1 "
      )}
    >
      <Login size="20" color="white" />
      {children}
    </button>
  );
};

export default Button;
