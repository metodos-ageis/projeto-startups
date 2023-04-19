import { HTMLAttributes } from "react";

import { classnames } from "@/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: "outlined" | "filled";
  fontSize?:
    | "inherit"
    | "default"
    | "extra-small"
    | "small"
    | "large"
    | "extra-large"
    | "2extra-large"
    | "3extra-large"
    | "4extra-large"
    | "5extra-large"
    | "6extra-large"
    | "7extra-large"
    | "8extra-large"
    | "9extra-large";
}

function Icon({ className, fontSize = "default", variant, ...props }: Props) {
  return (
    <div
      className={classnames(
        "material-symbols-outlined text-inherit",
        fontSize == "inherit" && "textsize-inherit",
        fontSize == "default" && "text-base",
        fontSize == "extra-small" && "text-xs",
        fontSize == "small" && "text-sm",
        fontSize == "large" && "text-lg",
        fontSize == "extra-large" && "text-xl",
        fontSize == "2extra-large" && "text-2xl",
        fontSize == "3extra-large" && "text-3xl",
        fontSize == "4extra-large" && "text-4xl",
        fontSize == "5extra-large" && "text-5xl",
        fontSize == "6extra-large" && "text-6xl",
        fontSize == "7extra-large" && "text-7xl",
        fontSize == "8extra-large" && "text-8xl",
        fontSize == "9extra-large" && "text-9xl",
        variant == "filled" && "material-symbols-filled",
        className
      )}
      {...props}
    />
  );
}

export default Icon;
