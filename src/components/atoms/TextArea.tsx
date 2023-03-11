import { InputHTMLAttributes, ReactNode, useMemo } from "react";

import { classnames, getId } from "@/utils";

export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

function TextArea({ className, label, startIcon, endIcon, ...props }: TextAreaProps) {
  const id = useMemo(() => props.id ?? getId(), [props.id]);
  return (
    <div className={classnames("group flex flex-col gap-1", className)}>
      {label && (
        <label
          className="text-sm group-focus-within:text-primary transition-[color] duration-300"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <div
        className={classnames(
          "border-2 border-gray-700 rounded-sm",
          "group-focus-within:border-primary transition-[border-color] duration-300",
          "w-full flex gap-2 items-center px-1"
        )}
      >
        <div className="flex items-center justify-center group-focus-within:text-primary transition-[color] duration-300">
          {startIcon}
        </div>
        <textarea
          id={id}
          className="py-1 my-0.5 text-sm outline-none w-full bg-transparent"
          {...props}
        />
        <div className="flex items-center justify-center group-focus-within:text-primary transition-[color] duration-300">
          {endIcon}
        </div>
      </div>
    </div>
  );
}

export default TextArea;
