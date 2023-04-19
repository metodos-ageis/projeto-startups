import { useParams } from "react-router-dom";

import { useCompany } from "./retrieve-company";

export function useCurrentCompany() {
  const { company_id } = useParams<{ company_id: string }>();

  return useCompany(company_id ?? "");
}
