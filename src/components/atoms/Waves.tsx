import { twMerge } from "tailwind-merge";

import Box from "./Box";

type Props = {
  className?: string;
};

function Waves({ className }: Props) {
  return (
    <Box
      as="img"
      src="assets/waves.svg"
      className={twMerge("absolute bottom-0 left-0 z-0", className)}
    />
  );
}

export default Waves;
