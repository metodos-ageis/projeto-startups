import { useQuery } from "@tanstack/react-query";

import { Api, ApiError } from "../api";

import { CompanyProgress } from "@/models";

export async function retrieveLastProgress(id: string) {
  return Api.get<CompanyProgress>(`company/${id}/progress/last`);
}

export function useLastProgress(id: string) {
  return useQuery<CompanyProgress, ApiError>({
    queryKey: ["companies", id, "last-progress"],
    queryFn: () => retrieveLastProgress(id),
    enabled: !!id,
  });
}
