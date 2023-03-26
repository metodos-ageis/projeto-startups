import { useTranslation } from "react-i18next";

import useDebounce from "./useDebounce";

import { ApiError } from "@/services";
import { error as parseError } from "@/utils";

function useError(error?: ApiError | null, delay = 300) {
  const { t } = useTranslation("common");
  const errorMessage = error?.data?.message ?? parseError(t, error?.status);
  const debounced = useDebounce(
    error?.data?.message ?? parseError(t, error?.status),
    delay
  );

  if (!error) return null;
  return delay ? debounced : errorMessage;
}

export default useError;
