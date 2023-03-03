import { ButtonHTMLAttributes } from "react";

import LoadingDots from "./LoadingDots";

import { classnames } from "@/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
}

function Button({
  color = "primary",
  variant = "contained",
  disabled,
  loading,
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={classnames(
        "px-4 py-2 rounded h-10",
        "transition-[background-color] duration-300",

        !(disabled || loading) &&
          variant === "contained" &&
          `bg-${color} text-white hover:bg-${color}-dark active:bg-${color}-darker`,
        !(disabled || loading) &&
          variant === "outlined" &&
          `border border-${color} text-${color} hover:bg-${color}-light active:bg-${color}-lighter`,
        !(disabled || loading) &&
          variant === "text" &&
          `text-${color} hover:bg-${color} hover:bg-opacity-10 active:bg-opacity-20`,

        (disabled || loading) &&
          variant === "contained" &&
          "bg-gray-300 text-gray-500 cursor-not-allowed hover",
        (disabled || loading) &&
          variant === "outlined" &&
          `border border-gray-300 text-gray-500 cursor-not-allowed`,
        (disabled || loading) &&
          variant === "text" &&
          `text-gray-500 cursor-not-allowed`,

        loading && "cursor-progress",

        className
      )}
      disabled={disabled}
      {...props}
    >
      {loading ? <LoadingDots /> : children}
    </button>
  );
}

export default Button;
