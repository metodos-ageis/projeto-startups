import { useQuery } from "@tanstack/react-query";

import { Api, ApiError } from "../api";

import { Company } from "@/models";

export async function retrieveCompany(id: string) {
  return Api.get<Company>(`company/${id}/`);
}

export function useCompany(id: string) {
  return useQuery<Company, ApiError>({
    queryKey: ["companies", id],
    queryFn: () => retrieveCompany(id),
    enabled: !!id,
  });
}
