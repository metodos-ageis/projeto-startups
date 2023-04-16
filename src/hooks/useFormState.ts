import { ChangeEvent, useState } from "react";

import useEventCallback from "./useEventCallback";

function useFormState(
  initialState: string
): [
  string,
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
] {
  const [state, setState] = useState(initialState);

  const updateState = useEventCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setState(event.target.value);
    }
  );

  return [state, updateState];
}

export default useFormState;
