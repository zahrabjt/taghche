import clsx from "clsx"
import React from "react"

type IProps = {
  children: string
  onClick?: () => void
  htmlType?: "button" | "submit"
  type?: "primary" | "secondary" | "disabled" | "outline"
  disabled?: boolean
  size?: "full" | "large" | "medium"
}

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
        type === "outline" && !disabled && " text-btnOutline  border border-btnOutline ",
        type === "primary" && !disabled && "bg-btnPrimary text-btnPrimary",
        type === "secondary" && !disabled && "bg-btnSecondary",
        (type === "disabled" || disabled) && "bg-btnFaded text-btnFaded",
        size === "full" && "w-full ",
        size === "medium" && "w-btnPrimary",
        "rounded-md px-3 py-2 mx-auto !text-xs  font-medium ",
      )}
    >
      {children}
    </button>
  )
}

export default Button
