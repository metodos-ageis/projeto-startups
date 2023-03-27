import { createContext, PropsWithChildren, useContext } from "react";

export interface TableContextType {
  striped?: boolean;
  hover?: boolean;
  bordered?: boolean;
}

export const TableContext = createContext<TableContextType | undefined>(
  undefined
);

export function useTableContext() {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error(
      "useTableContext must be used within a TableContextProvider"
    );
  }

  return context;
}

export function TableProvider({
  children,
  ...props
}: PropsWithChildren<TableContextType>) {
  return (
    <TableContext.Provider value={props}>{children}</TableContext.Provider>
  );
}

export const TableRowContext = createContext<
  "body" | "header" | "footer" | undefined
>(undefined);

export function useTableRowContext() {
  const context = useContext(TableRowContext);

  if (!context) {
    throw new Error(
      "useTableRowContext must be used within a TableBody or TableHeader"
    );
  }

  return context;
}
