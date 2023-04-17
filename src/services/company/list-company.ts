import { useQuery } from "@tanstack/react-query";

import { Api, ApiError } from "../api";

import { Company } from "@/models";

export async function listCompany() {
  return Api.get<Company[]>("company");
}

export function useCompanies() {
  return useQuery<Company[], ApiError>({
    queryKey: ["companies"],
    queryFn: listCompany,
  });
}
