import { HTMLAttributes } from "react";

import { classnames } from "@/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: "outlined" | "filled";
  fontSize?: "inherit" | "default" | "small" | "large";
}

function Icon({ className, fontSize = "default", ...props }: Props) {
  return (
    <div
      className={classnames(
        "material-symbols-outlined text-inherit",
        fontSize == "inherit" && "textsize-inherit",
        fontSize == "default" && "text-base",
        fontSize == "small" && "text-sm",
        fontSize == "large" && "text-lg",
        className
      )}
      {...props}
    />
  );
}

export default Icon;
