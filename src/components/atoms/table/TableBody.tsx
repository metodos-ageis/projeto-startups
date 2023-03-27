import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { TableRowContext } from "@/components/context";

interface Props extends HTMLAttributes<HTMLElement> {}

function TableBody({
  children,
  className,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <TableRowContext.Provider value="body">
      <tbody className={twMerge(className)} {...props}>
        {children}
      </tbody>
    </TableRowContext.Provider>
  );
}

export default TableBody;
