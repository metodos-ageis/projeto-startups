import { TextareaHTMLAttributes } from "react";

import TableCell, { TableCellProps } from "./TableCell";

type PickedFields =
  | "value"
  | "onChange"
  | "placeholder"
  | "disabled"
  | "readOnly"
  | "required"
  | "name";
type Spread = Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, PickedFields>;
type Nest = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, PickedFields>;

interface Props extends Omit<TableCellProps, "children" | "onChange">, Spread {
  inputProps?: Nest;
}

function TableCellInput({
  value,
  onChange,
  placeholder,
  disabled,
  readOnly,
  required,
  name,
  inputProps,
  ...props
}: Props) {
  return (
    <TableCell {...props} className="p-0 m-0 h-1">
      <textarea
        className="block p-4 h-full resize-none"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        name={name}
        {...inputProps}
      />
    </TableCell>
  );
}

export default TableCellInput;
