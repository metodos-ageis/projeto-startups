import { Listbox } from "@headlessui/react";
import { useState, useMemo } from "react";

import { classnames, getId } from "@/utils";

export interface SelectorItem<T extends React.Key> {
  id: T;
  name: string;
  disabled?: boolean;
}

interface Props<T extends React.Key> {
  label?: string;
  items: SelectorItem<T>[];
}

function Selector<T extends React.Key>({ label, items }: Props<T>) {
  const id = useMemo(() => getId(), []);
  const [selected, setSelected] = useState(items[0]);

  return (
    <div className={classnames("group flex flex-col gap-1 relative")}>
      {label && (
        <label
          className="text-sm group-focus-within:text-primary transition-[color] duration-300"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button
          className={classnames(
            "border-2 border-gray-400 rounded-xl",
            "w-full flex gap-2 items-center px-2",
            "focus-within:border-primary transition-[border-color] duration-300 py-1"
          )}
        >
          {selected?.name ?? "-"}
        </Listbox.Button>
        <Listbox.Options className="absolute top-[100%] left-0 right-0 bg-white shadow-lg rounded-xl overflow-hidden">
          {items.map((item) => (
            <Listbox.Option
              key={item.id}
              value={item}
              disabled={item.disabled}
              className={({ active, selected }) =>
                classnames(
                  active && "bg-slate-200",
                  "text-sm p-4 cursor-pointer",
                  selected && "text-primary"
                )
              }
            >
              {item.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default Selector;
