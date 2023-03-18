import { Api } from "../api";

import { Company } from "@/models";

export type CreateCompanyPayload = Omit<
  Company,
  "id" | "created_at" | "updated_at" | "deleted_at"
>;

export function createCompany(payload: CreateCompanyPayload) {
  return Api.post<Company, CreateCompanyPayload>("companies", payload);
}
