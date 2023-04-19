import { useQuery } from "@tanstack/react-query";

import { Api, ApiError } from "../api";

import { CompanyProgress } from "@/models";

export async function retrieveProgress(companyId: string, id: string) {
  return Api.get<CompanyProgress>(`company/${companyId}/progress/${id}`);
}

export function useProgress(companyId: string, id: string) {
  return useQuery<CompanyProgress, ApiError>({
    queryKey: ["companies", companyId, "progress", id],
    queryFn: () => retrieveProgress(companyId, id),
    enabled: !!id && !!companyId,
  });
}
