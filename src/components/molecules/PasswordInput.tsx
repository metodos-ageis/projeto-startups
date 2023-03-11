import { useState } from "react";

import { Icon, Input, InputProps } from "../atoms";

import IconButton from "./IconButton";

import { useEventCallback } from "@/hooks";

type PasswordProps = Omit<InputProps, "type" | "startIcon" | "endIcon">;

function PasswordInput({ ...props }: PasswordProps) {
  const [type, setType] = useState<"password" | "text">("password");

  const toggleType = useEventCallback(() => {
    setType((prev) => (prev === "password" ? "text" : "password"));
  });

  return (
    <Input
      startIcon={<Icon>lock</Icon>}
      endIcon={
        <IconButton onClick={toggleType} type="button">
          <Icon>{type === "password" ? "visibility" : "visibility_off"}</Icon>
        </IconButton>
      }
      type={type}
      {...props}
    />
  );
}

export default PasswordInput;
