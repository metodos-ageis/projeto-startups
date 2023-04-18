import { useQuery } from "@tanstack/react-query";

import { Api, ApiError } from "../api";

import { CompanyMetrics } from "@/models";

export async function retrieveCompanyMetrics(id: string) {
  return Api.get<CompanyMetrics>(`company/${id}/metrics`);
}

export function useCompanyMetrics(id: string) {
  return useQuery<CompanyMetrics, ApiError>({
    queryKey: ["companies", id, "metrics"],
    queryFn: () => retrieveCompanyMetrics(id),
    enabled: !!id,
  });
}
