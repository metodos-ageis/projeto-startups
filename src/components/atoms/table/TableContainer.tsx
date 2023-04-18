import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

import { TableContextType, TableProvider } from "@/components/context";

interface Props extends HTMLAttributes<HTMLDivElement>, TableContextType {
  elevation?: 1 | 2 | 3 | 4 | 5;
}

function TableContainer({
  hover,
  bordered,
  striped,
  elevation,
  className,
  children,
}: PropsWithChildren<Props>) {
  return (
    <TableProvider hover={hover} bordered={bordered} striped={striped}>
      <div
        className={twMerge(
          "rounded-md",
          elevation === 1 && "shadow-sm",
          elevation === 2 && "shadow-md",
          elevation === 3 && "shadow-lg",
          elevation === 4 && "shadow-xl",
          elevation === 5 && "shadow-2xl",
          className
        )}
      >
        {children}
      </div>
    </TableProvider>
  );
}

export default TableContainer;
