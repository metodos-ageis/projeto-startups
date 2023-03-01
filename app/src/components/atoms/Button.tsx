import { ButtonHTMLAttributes } from "react";

import { classnames } from "@/utils";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary";
}

function Button({
  color = "primary",
  variant = "contained",
  className,
  ...props
}: Props) {
  return (
    <button
      className={classnames(
        "px-4 py-2 rounded",
        variant === "contained" &&
          `bg-${color} text-white transition-[background-color] duration-300 hover:bg-${color}-dark active:bg-${color}-darker`,
        variant === "outlined" &&
          `border border-${color} text-${color} transition-[background-color] duration-300 hover:bg-${color}-light active:bg-${color}-lighter`,
        variant === "text" &&
          `text-${color} transition-[background-color] duration-300 hover:bg-${color} hover:bg-opacity-10 active:bg-opacity-20`,
        className
      )}
      {...props}
    />
  );
}

export default Button;
