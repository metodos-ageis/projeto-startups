import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { TableRowContext } from "@/components/context";

interface Props extends HTMLAttributes<HTMLElement> {}

function TableHead({
  children,
  className,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <TableRowContext.Provider value="header">
      <thead className={twMerge(className)} {...props}>
        {children}
      </thead>
    </TableRowContext.Provider>
  );
}

export default TableHead;
