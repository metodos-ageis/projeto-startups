import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import LoadingDots from "./LoadingDots";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "action-text";
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
      className={twMerge(
        "px-4 py-1.5 rounded-xl h-9",
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
