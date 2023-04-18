import { useMutation } from "@tanstack/react-query";

import { Api, ApiError } from "../api";

import { CompanyProgress } from "@/models";

export type CreateProgressPayload = Omit<CompanyProgress, "id">;

export async function createProgress(payload: CreateProgressPayload) {
  return Api.post<CompanyProgress, CreateProgressPayload>(
    "company/progress",
    payload
  );
}

export function useCreateProgress(onSuccess?: (data: CompanyProgress) => void) {
  return useMutation<CompanyProgress, ApiError, CreateProgressPayload>({
    mutationFn: createProgress,
    onSuccess,
  });
}
