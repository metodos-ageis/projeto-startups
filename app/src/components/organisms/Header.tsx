import React from "react";

import { Surface } from "@/components/atoms";
import { classnames } from "@/utils";

interface Props {
  className?: string;
}

function Header({ className }: Props) {
  return (
    <Surface
      elevation={3}
      className={classnames("h-12 flex items-center px-4", className)}
    >
      Header
    </Surface>
  );
}

export default Header;
