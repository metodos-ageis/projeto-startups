import { Link as RouterLink } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

import { classnames } from "@/utils";

function Link({ className, ...props }: LinkProps) {
  return (
    <RouterLink
      className={classnames("text-primary hover:underline", className)}
      {...props}
    />
  );
}

export default Link;
