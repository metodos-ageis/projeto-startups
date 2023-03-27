import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { TableRowContext } from "@/components/context";

interface Props extends HTMLAttributes<HTMLElement> {}

function TableFoot({
  children,
  className,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <TableRowContext.Provider value="footer">
      <tfoot className={twMerge(className)} {...props}>
        {children}
      </tfoot>
    </TableRowContext.Provider>
  );
}

export default TableFoot;
