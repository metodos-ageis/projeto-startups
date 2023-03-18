import { RadioGroup as HRadioGroup } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

import Icon from "./Icon";
import Text from "./Text";

interface Props<T> {
  items: {
    value: T;
    label: string;
  }[];
  value: T;
  onChange?: (value: T) => void;
  className?: string;
  label?: string;
  layout?: "vertical" | "horizontal";
}

function RadioGroup<T>({
  value,
  onChange,
  items,
  className,
  label,
  layout = "vertical",
}: Props<T>) {
  return (
    <HRadioGroup
      value={value}
      onChange={onChange}
      className={twMerge(className)}
    >
      <HRadioGroup.Label className="text-sm mb-1.5" as={Text}>
        {label}
      </HRadioGroup.Label>
      <div
        className={twMerge("flex gap-2", layout === "vertical" && "flex-col")}
      >
        {items.map((item) => (
          <HRadioGroup.Option
            value={item.value}
            key={String(item.value)}
            className="w-full"
          >
            {({ checked }) => (
              <div
                className={twMerge(
                  "flex items-center gap-2 cursor-pointer p-2 rounded-xl",
                  "bg-primary bg-opacity-0 hover:bg-opacity-10 transition-[background-color] duration-300",
                  checked && "bg-opacity-10"
                )}
              >
                <div
                  className={twMerge(
                    "flex items-center justify-center text-white",
                    "h-3.5 w-3.5 rounded-full bg-slate-200 transition-[background-color] duration-300",
                    checked && "bg-primary"
                  )}
                >
                  <Icon
                    fontSize="extra-small"
                    className={twMerge(
                      "opacity-0 transition-[opacity] duration-300",
                      checked && "opacity-100"
                    )}
                  >
                    done
                  </Icon>
                </div>
                <Text>{item.label}</Text>
              </div>
            )}
          </HRadioGroup.Option>
        ))}
      </div>
    </HRadioGroup>
  );
}

export default RadioGroup;
