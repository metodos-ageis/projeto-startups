import { ButtonHTMLAttributes } from "react";

import { classnames } from "@/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

function IconButton({ className, ...props }: Props) {
  return (
    <button
      className={classnames(
        "w-7 h-7",
        "hover:bg-slate-100 active:bg-slate-200 transition-[background-color] duration-3",
        "flex items-center justify-center p-0.5 rounded-full",
        className
      )}
      {...props}
    />
  );
}

export default IconButton;
