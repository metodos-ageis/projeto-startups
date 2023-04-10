import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { StartupBadge, IconButton } from "../molecules";

import { Icon, Surface } from "@/components/atoms";
import { useEventCallback } from "@/hooks";

interface Props {
  className?: string;
}

function Header({ className }: Props) {
  const navigate = useNavigate();
  const onBack = useEventCallback(() => navigate(-1));
  return (
    <Surface
      className={twMerge(
        "flex flex-col items-center justify-center",
        className
      )}
    >
      <div className="grid grid-cols-[repeat(3,_auto)] justify-between items-center w-full">
        <IconButton className="ml-8" onClick={onBack}>
          <Icon fontSize="2extra-large">arrow_back</Icon>
        </IconButton>
        <img src="assets/logo.jpeg" className="w-44 my-8" />
      </div>
      <StartupBadge />
    </Surface>
  );
}

export default Header;
