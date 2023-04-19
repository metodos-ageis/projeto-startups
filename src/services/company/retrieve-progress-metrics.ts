import { useQuery } from "@tanstack/react-query";

import { Api, ApiError } from "../api";

import { CompanyMetrics } from "@/models";

export async function retrieveProgressMetrics(companyId: string, id: string) {
  return Api.get<CompanyMetrics>(`company/${companyId}/progress/${id}/metrics`);
}

export function useProgressMetrics(companyId: string, id: string) {
  return useQuery<CompanyMetrics, ApiError>({
    queryKey: ["companies", companyId, "progress", id, "metrics"],
    queryFn: () => retrieveProgressMetrics(companyId, id),
    enabled: !!id && !!companyId,
  });
}
