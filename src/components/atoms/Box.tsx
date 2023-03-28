import React from "react";

type BoxProps<Element extends keyof JSX.IntrinsicElements = "div"> = {
  as?: Element;
} & JSX.IntrinsicElements[Element];

function Box<T extends keyof JSX.IntrinsicElements>({
  as: element = "div" as T,
  ...props
}: BoxProps<T>) {
  return React.createElement(element, props);
}

export default Box;
