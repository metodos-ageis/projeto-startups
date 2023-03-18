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
    | "extra-large";
}

function Icon({ className, fontSize = "default", ...props }: Props) {
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
        className
      )}
      {...props}
    />
  );
}

export default Icon;
