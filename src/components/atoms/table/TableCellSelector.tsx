import React from "react";

import TableCell, { TableCellProps } from "./TableCell";

import { Selector, SelectorProps } from "@/components/molecules";

type PickedFields = "items" | "onChange" | "value";
type Spread<T extends React.Key> = Pick<SelectorProps<T>, PickedFields>;
type Nest<T extends React.Key> = Omit<SelectorProps<T>, PickedFields>;

interface Props<T extends React.Key>
  extends Omit<TableCellProps, "children" | "onChange">,
    Spread<T> {
  selectorProps?: Nest<T>;
}

function TableCellSelector<T extends React.Key>({
  items,
  onChange,
  value,
  ...props
}: Props<T>) {
  return (
    <TableCell {...props} className="p-0 m-0 h-1">
      <Selector
        className="h-full [&_button]:flex [&_button]:items-center [&_button]:justify-center"
        borderless
        items={items}
        onChange={onChange}
        value={value}
      />
    </TableCell>
  );
}

export default TableCellSelector;
