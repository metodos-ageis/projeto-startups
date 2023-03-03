import { HTMLAttributes } from "react";

import { classnames } from "@/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
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
}

function Text({ variant = "body1", className, ...props }: Props) {
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
        className
      )}
      {...props}
    />
  );
}

export default Text;
