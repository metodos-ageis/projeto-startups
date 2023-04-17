import { useNavigate } from "react-router-dom";

import useEventCallback from "./useEventCallback";

function useNavigateBack() {
  const navigate = useNavigate();
  return useEventCallback(() => navigate(-1));
}

export default useNavigateBack;
