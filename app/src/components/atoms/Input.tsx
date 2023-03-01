import { HTMLAttributes, useMemo } from "react";

import { classnames, getId } from "@/utils";

interface Props extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Input({ className, label, ...props }: Props) {
  const id = useMemo(() => props.id ?? getId(), [props.id]);
  return (
    <div className="group flex flex-col gap-1">
      {label && (
        <label
          className="text-sm group-focus-within:text-primary transition-[color] duration-300"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={classnames(
          "border-2 border-gray-700 rounded-sm py-1 px-2 text-sm outline-none group-focus-within:border-primary transition-[border-color] duration-300",
          className
        )}
        {...props}
      />
    </div>
  );
}

export default Input;
