import "i18next";
import { ptBR } from "./translations";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNs: "common";
    ns: keyof typeof ptBR;
    resources: typeof ptBR;
  }
}
