import { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import LoadingDots from "./LoadingDots";

import { useEventCallback } from "@/hooks";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "action-text";
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  error?: boolean;
  helperText?: string;
}

function Button({
  color = "primary",
  variant = "contained",
  disabled,
  loading,
  className,
  children,
  href,
  onClick,
  ...props
}: Props) {
  const navigate = useNavigate();
  const _onClick: typeof onClick = useEventCallback((e) => {
    if (href) {
      e.preventDefault();
      navigate(href);
    } else {
      onClick?.(e);
    }
  });
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
      onClick={_onClick}
      {...props}
    >
      {loading ? <LoadingDots /> : children}
    </button>
  );
}

export default Button;
