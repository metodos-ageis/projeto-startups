import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import Box from "../Box";

import { useTableRowContext } from "@/components/context";

interface Props extends HTMLAttributes<HTMLTableCellElement> {
  noWrap?: boolean;
}

function TableCell({ className, noWrap, ...props }: Props) {
  const group = useTableRowContext();
  const element = group === "header" ? "th" : "td";
  return (
    <Box
      as={element}
      className={twMerge(
        "text-start font-normal p-4 text-sm",
        noWrap && "whitespace-nowrap",
        group === "header" && "font-medium whitespace-nowrap bg-slate-100 py-3",
        className
      )}
      {...props}
    />
  );
}

export default TableCell;
