import { classnames } from "@/utils";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  elevation?: number;
}

const elevations = [
  "",
  "shadow",
  "shadow-sm",
  "shadow-md",
  "shadow-lg",
  "shadow-xl",
  "shadow-2xl",
] as const;

function Surface({ elevation = 0, className, ...props }: Props) {
  const classes = classnames(className, elevations[elevation]);

  return <div className={classes} {...props} />;
}

export default Surface;
