import { twMerge } from "tailwind-merge";

import { StartupBadge } from "../molecules";

import { Surface } from "@/components/atoms";

interface Props {
  className?: string;
}

function Header({ className }: Props) {
  return (
    <Surface
      className={twMerge(
        "flex flex-col items-center justify-center",
        className
      )}
    >
      <img src="assets/logo.jpeg" className="w-44 my-8" />
      <StartupBadge />
    </Surface>
  );
}

export default Header;
