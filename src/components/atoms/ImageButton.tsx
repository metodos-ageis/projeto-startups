import type { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { Text } from "@/components/atoms";
import { useEventCallback } from "@/hooks";

interface ImageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
  href?: string;
}

function ImageButton({
  src,
  href,
  children,
  className,
  onClick,
  ...props
}: ImageButtonProps) {
  const navigate = useNavigate();
  const _onClick: typeof onClick = useEventCallback((e) => {
    if (href) {
      e.preventDefault();
      navigate(href);
    } else {
      onClick?.(e);
    }
  });
  return (
    <button
      className={twMerge(
        "rounded-xl bg-secondary bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-20 transition-all",
        "flex flex-col items-center gap-2 px-4 py-2",
        className
      )}
      onClick={_onClick}
      {...props}
    >
      <img src={src} />
      <Text className="text-typography uppercase font-semibold text-sm">
        {children}
      </Text>
    </button>
  );
}

export default ImageButton;
