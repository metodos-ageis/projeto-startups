import { ChangeEvent, useState } from "react";

import useEventCallback from "./useEventCallback";

function useFormState(
  initialState: string
): [
  string,
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  (state: string) => void
] {
  const [state, setState] = useState(initialState);

  const updateState = useEventCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setState(event.target.value);
    }
  );

  return [state, updateState, setState];
}

export default useFormState;
