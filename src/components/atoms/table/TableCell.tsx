import { TdHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

import Box from "../Box";

import { useTableContext, useTableRowContext } from "@/components/context";

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  noWrap?: boolean;
}

function TableCell({ className, noWrap, ...props }: TableCellProps) {
  const { bordered } = useTableContext();
  const group = useTableRowContext();
  const element = group === "header" ? "th" : "td";
  return (
    <Box
      as={element}
      className={twMerge(
        "text-start font-normal p-4 text-sm",
        noWrap && "whitespace-nowrap",
        group === "header" && "font-medium whitespace-nowrap bg-slate-100 py-3",
        group !== "header" &&
          bordered &&
          `
        border-r border-b border-slate-200
        last:border-r-0
        group-last/row:border-b-0
        `,
        className
      )}
      {...props}
    />
  );
}

export default TableCell;
