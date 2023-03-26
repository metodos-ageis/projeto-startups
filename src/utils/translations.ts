import type { TFunction } from "i18next";

export function error(t: TFunction, code?: number) {
  switch (code) {
    case 400:
      return t("Error.400");
    case 500:
      return t("Error.500");
    default:
      return t("Error.Unknown");
  }
}
