import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Market, Solution, StartingPoint, Structure } from "./forms";

import { Button, Icon } from "@/components/atoms";
import { withCredentials } from "@/components/hoc";
import { StartupHeader } from "@/components/organisms";
import { useEventCallback } from "@/hooks";
import {
  CreateProgressPayload,
  useCreateProgress,
  useLastProgress,
} from "@/services/company";
import { useProgressForm } from "@/store";

function UpdateProgress() {
  const { company_id } = useParams<{ company_id: string }>();
  const data = useProgressForm();
  const last = useLastProgress(company_id ?? "");

  const payload = useMemo(
    () =>
      ({
        company_id,
        canvas: data.canvas?.[1] ?? "",
        canvas_score: data.canvas?.[0] ?? 0,
        clients: data.clients?.[1] ?? "",
        clients_score: data.clients?.[0] ?? 0,
        concurrency_analysis: data.concurrency_analysis?.[1] ?? "",
        concurrency_analysis_score: data.concurrency_analysis?.[0] ?? 0,
        definition_validation: data.definition_validation?.[1] ?? "",
        definition_validation_score: data.definition_validation?.[0] ?? 0,
        development_state: data.development_state?.[1] ?? "",
        development_state_score: data.development_state?.[0] ?? 0,
        ecosystem: data.ecosystem?.[1] ?? "",
        ecosystem_score: data.ecosystem?.[0] ?? 0,
        feedback_cycle: data.feedback_cycle?.[1] ?? "",
        feedback_cycle_score: data.feedback_cycle?.[0] ?? 0,
        incoming_method: data.incoming_method?.[1] ?? "",
        incoming_method_score: data.incoming_method?.[0] ?? 0,
        market_size: data.market_size?.[1] ?? "",
        market_size_score: data.market_size?.[0] ?? 0,
        mvp: data.mvp?.[1] ?? "",
        mvp_score: data.mvp?.[0] ?? 0,
        pitch: data.pitch?.[1] ?? "",
        pitch_score: data.pitch?.[0] ?? 0,
        solution_definition: data.solution_definition?.[1] ?? "",
        solution_definition_score: data.solution_definition?.[0] ?? 0,
        ip: data.intelectual_property?.[1] ?? "",
        ip_score: data.intelectual_property?.[0] ?? 0,
        needed_resources: data.needed_resources?.[1] ?? "",
        needed_resources_score: data.needed_resources?.[0] ?? 0,
      } as CreateProgressPayload),
    [data]
  );

  useEffect(() => {
    const lastData = last.data;
    if (!lastData) return;

    data.setCanvas([lastData.canvas_score ?? 0, lastData.canvas ?? ""]);
    data.setPitch([lastData.pitch_score ?? 0, lastData.pitch ?? ""]);

    data.setClients([lastData.clients_score ?? 0, lastData.clients ?? ""]);
    data.setConcurrencyAnalysis([
      lastData.concurrency_analysis_score ?? 0,
      lastData.concurrency_analysis ?? "",
    ]);
    data.setDefinitionValidation([
      lastData.definition_validation_score ?? 0,
      lastData.definition_validation ?? "",
    ]);
    data.setDevelopmentState([
      lastData.development_state_score ?? 0,
      lastData.development_state ?? "",
    ]);
    data.setEcosystem([
      lastData.ecosystem_score ?? 0,
      lastData.ecosystem ?? "",
    ]);
    data.setFeedbackCycle([
      lastData.feedback_cycle_score ?? 0,
      lastData.feedback_cycle ?? "",
    ]);
    data.setIncomingMethod([
      lastData.incoming_method_score ?? 0,
      lastData.incoming_method ?? "",
    ]);
    data.setMarketSize([
      lastData.market_size_score ?? 0,
      lastData.market_size ?? "",
    ]);
    data.setMvp([lastData.mvp_score ?? 0, lastData.mvp ?? ""]);
    data.setSolutionDefinition([
      lastData.solution_definition_score ?? 0,
      lastData.solution_definition ?? "",
    ]);
    data.setIP([lastData.ip_score ?? 0, lastData.ip ?? ""]);
    data.setNeededResources([
      lastData.needed_resources_score ?? 0,
      lastData.needed_resources ?? "",
    ]);
  }, [last.data?.id]);

  const navigate = useNavigate();

  const createProgress = useCreateProgress(() => {
    navigate(-1);
  });

  const onClickSave = useEventCallback(() => {
    createProgress.mutate(payload);
  });

  return (
    <>
      <StartupHeader />
      <div className="flex flex-col mx-8 mt-12 relative z-10">
        <StartingPoint />
        <Structure />
        <Solution />
        <Market />
        <Button
          className="flex self-end items-center justify-center gap-2 my-8 px-4"
          onClick={onClickSave}
        >
          <Icon>check</Icon>
          Salvar
        </Button>
      </div>
    </>
  );
}

export default withCredentials(UpdateProgress);
