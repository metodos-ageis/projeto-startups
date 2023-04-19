import { useMutation } from "@tanstack/react-query";

import { Api, ApiError } from "../api";

import { CompanyProgress } from "@/models";
import { useProgressForm } from "@/store";

export type CreateProgressPayload = Omit<CompanyProgress, "id">;

export async function createProgress(payload: CreateProgressPayload) {
  return Api.post<CompanyProgress, CreateProgressPayload>(
    "company/progress",
    payload
  );
}

function mutationFn(company_id: string) {
  const canvas = useProgressForm.getState().canvas;
  const clients = useProgressForm.getState().clients;
  const concurrency_analysis = useProgressForm.getState().concurrency_analysis;
  const definition_validation =
    useProgressForm.getState().definition_validation;
  const development_state = useProgressForm.getState().development_state;
  const ecosystem = useProgressForm.getState().ecosystem;
  const feedback_cycle = useProgressForm.getState().feedback_cycle;
  const incoming_method = useProgressForm.getState().incoming_method;
  const market_size = useProgressForm.getState().market_size;
  const mvp = useProgressForm.getState().mvp;
  const pitch = useProgressForm.getState().pitch;
  const solution_definition = useProgressForm.getState().solution_definition;
  const intelectual_property = useProgressForm.getState().intelectual_property;
  const needed_resources = useProgressForm.getState().needed_resources;

  return createProgress({
    company_id,
    canvas: canvas?.[1] ?? "",
    canvas_score: canvas?.[0] ?? 0,
    clients: clients?.[1] ?? "",
    clients_score: clients?.[0] ?? 0,
    concurrency_analysis: concurrency_analysis?.[1] ?? "",
    concurrency_analysis_score: concurrency_analysis?.[0] ?? 0,
    definition_validation: definition_validation?.[1] ?? "",
    definition_validation_score: definition_validation?.[0] ?? 0,
    development_state: development_state?.[1] ?? "",
    development_state_score: development_state?.[0] ?? 0,
    ecosystem: ecosystem?.[1] ?? "",
    ecosystem_score: ecosystem?.[0] ?? 0,
    feedback_cycle: feedback_cycle?.[1] ?? "",
    feedback_cycle_score: feedback_cycle?.[0] ?? 0,
    incoming_method: incoming_method?.[1] ?? "",
    incoming_method_score: incoming_method?.[0] ?? 0,
    market_size: market_size?.[1] ?? "",
    market_size_score: market_size?.[0] ?? 0,
    mvp: mvp?.[1] ?? "",
    mvp_score: mvp?.[0] ?? 0,
    pitch: pitch?.[1] ?? "",
    pitch_score: pitch?.[0] ?? 0,
    solution_definition: solution_definition?.[1] ?? "",
    solution_definition_score: solution_definition?.[0] ?? 0,
    ip: intelectual_property?.[1] ?? "",
    ip_score: intelectual_property?.[0] ?? 0,
    needed_resources: needed_resources?.[1] ?? "",
    needed_resources_score: needed_resources?.[0] ?? 0,
  });
}

export function useCreateProgress(onSuccess?: (data: CompanyProgress) => void) {
  return useMutation<CompanyProgress, ApiError, string>({
    mutationFn,
    onSuccess,
  });
}
