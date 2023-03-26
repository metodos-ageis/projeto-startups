import { useMutation } from "@tanstack/react-query";

import { Api, ApiError } from "../api";

import { Company } from "@/models";
import { sleep } from "@/utils";

export type CreateCompanyPayload = Omit<
  Company,
  "id" | "created_at" | "updated_at" | "deleted_at"
>;

export async function createCompany(payload: CreateCompanyPayload) {
  await sleep(500);
  return Api.post<Company, CreateCompanyPayload>("company", payload);
}

export function useCreateCompany(onSuccess?: (data: Company) => void) {
  return useMutation<Company, ApiError, CreateCompanyPayload>({
    mutationFn: createCompany,
    onSuccess,
  });
}
