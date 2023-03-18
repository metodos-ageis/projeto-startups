import { InputHTMLAttributes, useMemo } from "react";

import { classnames, getId } from "@/utils";

export interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

function TextArea({ className, label, ...props }: TextAreaProps) {
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
          "border-2 border-gray-400 rounded-xl",
          "group-focus-within:border-primary transition-[border-color] duration-300",
          "w-full h-full flex gap-2 items-center px-1"
        )}
      >
        <textarea
          id={id}
          className="p-1 my-0.5 text-sm outline-none w-full h-full bg-transparent"
          {...props}
        />
      </div>
    </div>
  );
}

export default TextArea;
