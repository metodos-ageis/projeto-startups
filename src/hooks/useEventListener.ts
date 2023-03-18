import { ChangeEvent } from "react";

import useEventCallback from "./useEventCallback";

function useEventListener(handler: (_: string) => void) {
  return useEventCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      handler(event.target.value)
  );
}

export default useEventListener;
