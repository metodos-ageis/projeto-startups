import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import { useTableContext } from "@/components/context";

interface Props extends HTMLAttributes<HTMLTableRowElement> {}

function TableRow({ className, ...props }: Props) {
  const { striped, hover } = useTableContext();
  return (
    <tr
      className={twMerge(
        className,
        "transition-colors duration-200",
        striped && "even:bg-slate-100",
        hover && "hover:bg-slate-200"
      )}
      {...props}
    />
  );
}

export default TableRow;
