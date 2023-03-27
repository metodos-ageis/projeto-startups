import { HTMLAttributes } from "react";

import { classnames } from "@/utils";

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "caption";
  color?: "primary" | "secondary" | "error" | "success";
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
}

function Text({
  variant = "body1",
  color,
  className,
  uppercase,
  lowercase,
  capitalize,
  ...props
}: Props) {
  return (
    <div
      className={classnames(
        variant === "h1" && "text-4xl font-bold",
        variant === "h2" && "text-3xl font-bold",
        variant === "h3" && "text-2xl font-bold",
        variant === "h4" && "text-xl font-bold",
        variant === "h5" && "text-lg font-bold",
        variant === "h6" && "text-base font-bold",
        variant === "body1" && "text-base",
        variant === "body2" && "text-sm",
        variant === "caption" && "text-xs",
        color === "primary" && "text-primary",
        color === "secondary" && "text-secondary",
        color === "error" && "text-red-600",
        color === "success" && "text-green-500",
        uppercase && "uppercase",
        lowercase && "lowercase",
        capitalize && "capitalize",
        className
      )}
      {...props}
    />
  );
}

export default Text;
