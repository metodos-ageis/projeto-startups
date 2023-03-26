import { Transition } from "@headlessui/react";
import { PropsWithChildren } from "react";

type Props = {
  in: boolean;
};

function Collapse({ in: show, children }: PropsWithChildren<Props>) {
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-auto"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-auto"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
}

export default Collapse;
