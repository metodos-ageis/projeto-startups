import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Market, Solution, StartingPoint, Structure } from "./forms";

import { Button, Icon } from "@/components/atoms";
import { withCredentials } from "@/components/hoc";
import { StartupHeader } from "@/components/organisms";
import { useEventCallback } from "@/hooks";
import { useCreateProgress, useLastProgress } from "@/services/company";
import { useProgressForm } from "@/store";

function UpdateProgress() {
  const { company_id } = useParams<{ company_id: string }>();
  const last = useLastProgress(company_id ?? "");

  const setCanvas = useProgressForm((state) => state.setCanvas);
  const setPitch = useProgressForm((state) => state.setPitch);
  const setClients = useProgressForm((state) => state.setClients);
  const setConcurrencyAnalysis = useProgressForm(
    (state) => state.setConcurrencyAnalysis
  );
  const setDefinitionValidation = useProgressForm(
    (state) => state.setDefinitionValidation
  );
  const setDevelopmentState = useProgressForm(
    (state) => state.setDevelopmentState
  );
  const setEcosystem = useProgressForm((state) => state.setEcosystem);
  const setFeedbackCycle = useProgressForm((state) => state.setFeedbackCycle);
  const setIncomingMethod = useProgressForm((state) => state.setIncomingMethod);
  const setMarketSize = useProgressForm((state) => state.setMarketSize);
  const setMvp = useProgressForm((state) => state.setMvp);
  const setSolutionDefinition = useProgressForm(
    (state) => state.setSolutionDefinition
  );
  const setIP = useProgressForm((state) => state.setIP);
  const setNeededResources = useProgressForm(
    (state) => state.setNeededResources
  );

  useEffect(() => {
    const lastData = last.data;
    if (!lastData) return;

    setCanvas([lastData.canvas_score ?? 0, lastData.canvas ?? ""]);
    setPitch([lastData.pitch_score ?? 0, lastData.pitch ?? ""]);

    setClients([lastData.clients_score ?? 0, lastData.clients ?? ""]);
    setConcurrencyAnalysis([
      lastData.concurrency_analysis_score ?? 0,
      lastData.concurrency_analysis ?? "",
    ]);
    setDefinitionValidation([
      lastData.definition_validation_score ?? 0,
      lastData.definition_validation ?? "",
    ]);
    setDevelopmentState([
      lastData.development_state_score ?? 0,
      lastData.development_state ?? "",
    ]);
    setEcosystem([lastData.ecosystem_score ?? 0, lastData.ecosystem ?? ""]);
    setFeedbackCycle([
      lastData.feedback_cycle_score ?? 0,
      lastData.feedback_cycle ?? "",
    ]);
    setIncomingMethod([
      lastData.incoming_method_score ?? 0,
      lastData.incoming_method ?? "",
    ]);
    setMarketSize([
      lastData.market_size_score ?? 0,
      lastData.market_size ?? "",
    ]);
    setMvp([lastData.mvp_score ?? 0, lastData.mvp ?? ""]);
    setSolutionDefinition([
      lastData.solution_definition_score ?? 0,
      lastData.solution_definition ?? "",
    ]);
    setIP([lastData.ip_score ?? 0, lastData.ip ?? ""]);
    setNeededResources([
      lastData.needed_resources_score ?? 0,
      lastData.needed_resources ?? "",
    ]);
  }, [last.data?.id]);

  const navigate = useNavigate();

  const createProgress = useCreateProgress((data) => {
    navigate(`../feedback/${data.id}`, { replace: true });
  });

  const onClickSave = useEventCallback(() => {
    createProgress.mutate(company_id ?? "");
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
