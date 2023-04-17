import { ButtonHTMLAttributes, useMemo } from "react";
import { Link } from "react-router-dom";
import type { LinkProps as RRDLinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import LoadingDots from "./LoadingDots";

interface CommonProps {
  variant?: "contained" | "outlined" | "text";
  color?: "primary" | "secondary" | "action-text";
}

interface LinkProps extends Omit<RRDLinkProps, "color">, CommonProps {
  href: string;
}

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    CommonProps {
  loading?: boolean;
  disabled?: boolean;
  error?: boolean;
}

type Props = LinkProps | ButtonProps;

function Button({
  color = "primary",
  variant = "contained",
  className,
  children,
  ...props
}: Props) {
  const commmonClasses = useMemo(
    () => [
      "px-4 py-1.5 rounded-xl h-9",
      "transition-[background-color] duration-300",
      variant === "contained" &&
        `bg-${color} text-white hover:bg-${color}-dark active:bg-${color}-darker`,
      variant === "outlined" &&
        `border border-${color} text-${color} hover:bg-${color}-light active:bg-${color}-lighter`,
      variant === "text" &&
        `text-${color} hover:bg-${color} hover:bg-opacity-10 active:bg-opacity-20`,
    ],
    []
  );

  const buttonClasses = useMemo(
    () =>
      "to" in props
        ? []
        : [
            (props.disabled || props.loading) &&
              variant === "contained" &&
              "bg-gray-300 text-gray-500 cursor-not-allowed hover",
            (props.disabled || props.loading) &&
              variant === "outlined" &&
              `border border-gray-300 text-gray-500 cursor-not-allowed`,
            (props.disabled || props.loading) &&
              variant === "text" &&
              `text-gray-500 cursor-not-allowed`,

            props.loading && "cursor-progress",
          ],
    [props]
  );

  const classes = useMemo(
    () => twMerge(...commmonClasses, ...buttonClasses, className),
    [commmonClasses, buttonClasses, className]
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { loading, disabled, error, ...rest } = props as ButtonProps;

  if ("to" in props) {
    return (
      <Link className={classes} {...(rest as LinkProps)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {props.loading ? <LoadingDots /> : children}
    </button>
  );
}

export default Button;
