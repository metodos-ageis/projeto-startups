import { ChangeEvent, useState } from "react";

import useEventCallback from "./useEventCallback";

function useFormState(
  initialState: string
): [string, (event: ChangeEvent<HTMLInputElement>) => void] {
  const [state, setState] = useState(initialState);

  const updateState = useEventCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setState(event.target.value);
    }
  );

  return [state, updateState];
}

export default useFormState;
