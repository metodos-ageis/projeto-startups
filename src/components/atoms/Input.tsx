import { InputHTMLAttributes, ReactNode, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import { getId } from "@/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  inputRootProps?: InputHTMLAttributes<HTMLDivElement>;
}

function Input({
  className,
  label,
  startIcon,
  endIcon,
  inputRootProps,
  ...props
}: InputProps) {
  const id = useMemo(() => props.id ?? getId(), [props.id]);

  const { className: inputRootClassName, ...inputRootRest } =
    inputRootProps ?? {};

  return (
    <div className={twMerge("group flex flex-col gap-1", className)}>
      {label && (
        <label
          className="text-sm group-focus-within:text-primary transition-[color] duration-300"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div
        className={twMerge(
          "border-2 border-gray-700 rounded-xl",
          "group-focus-within:border-primary transition-[border-color] duration-300",
          "w-full flex gap-2 items-center px-1",
          inputRootClassName
        )}
        {...inputRootRest}
      >
        <div className="mx-1 flex items-center justify-center group-focus-within:text-primary transition-[color] duration-300">
          {startIcon}
        </div>
        <input
          id={id}
          className="py-1 my-0.5 text-sm outline-none w-full bg-transparent"
          {...props}
        />
        <div className="mx-1 flex items-center justify-center group-focus-within:text-primary transition-[color] duration-300">
          {endIcon}
        </div>
      </div>
    </div>
  );
}

export default Input;
