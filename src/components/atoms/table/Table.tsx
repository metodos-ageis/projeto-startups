import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLAttributes<HTMLTableElement> {}

function Table({ className, ...props }: Props) {
  return <table className={twMerge("border-collapse", className)} {...props} />;
}

export default Table;
