import { twMerge } from "tailwind-merge";

import Box from "./Box";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

function Waves({ className, size = "lg" }: Props) {
  return (
    <Box
      as="img"
      src="/assets/waves.svg"
      className={twMerge(
        "absolute left-0 z-0",
        size === "sm" && "bottom-[-7.5rem]",
        size === "md" && "bottom-[-3.5rem]",
        size === "lg" && "bottom-0",
        className
      )}
    />
  );
}

export default Waves;
