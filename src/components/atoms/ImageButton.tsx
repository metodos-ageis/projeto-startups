import { Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { Text } from "@/components/atoms";

interface ImageButtonProps extends LinkProps {
  src?: string;
  detailed?: boolean;
}

function ImageButton({
  src,
  detailed,
  to,
  children,
  className,
  ...props
}: ImageButtonProps) {
  return (
    <Link
      className={twMerge(
        "rounded-xl bg-secondary bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-20 transition-all",
        "flex flex-col items-center gap-2 px-4 py-2",
        className
      )}
      to={detailed ? `../${to}` : to}
      {...props}
    >
      <img src={src} />
      <Text className="text-typography uppercase font-semibold text-sm">
        {children}
      </Text>
    </Link>
  );
}

export default ImageButton;
