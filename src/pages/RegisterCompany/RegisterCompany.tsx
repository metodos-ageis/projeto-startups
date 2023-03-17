import { useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { Text, Input, TextArea, Button, Icon } from "@/components/atoms";
import { Selector, IconButton, Stepper } from "@/components/molecules";
import type { SelectorItem, StepperRef } from "@/components/molecules";
import { useEventCallback, useFormState } from "@/hooks";

const sectors: SelectorItem<string>[] = [
  { id: "tech", name: "Tecnologia" },
  { id: "data", name: "Dados" },
];

function RegisterCompany() {
  const { t } = useTranslation("registerStartup");

  const stepperRef = useRef<StepperRef>(null);

  const [title, setTitle] = useFormState("");
  const [description, setDescription] = useFormState("");
  const [sector, setSector] = useFormState("");
  const [goal, setGoal] = useFormState("");
  const [cnpj, setCnpj] = useFormState("");
  const [project_time, setProjectTime] = useFormState("");
  const [challenges, setChallenges] = useFormState("");
  const [team_size, setTeamSize] = useFormState("");
  const [project_started, setProjectStarted] = useFormState("");
  const [website, setWebsite] = useFormState("");
  const [ip, setIp] = useFormState("");
  const [resourcers, setResources] = useFormState("");
  const [resourcers_needed, setResourcesNeeded] = useFormState("");
  const [mvp, setMvp] = useFormState("");
  const [incoming_model, setIncomingModel] = useFormState("");
  const [initial_capital, setInitialCapital] = useFormState("");

  const stepCompanyInfo = (
    <div className="h-80 w-[20rem] flex flex-col gap-1">
      <Input
        name="startup-name"
        type="text"
        label={t("Form.Name")}
        onChange={setTitle}
        value={title}
      />
      <Input
        name="cnpj"
        type="text"
        label={t("Form.Cnpj")}
        onChange={setCnpj}
        value={cnpj}
      />
      <Selector items={sectors} label={t("Form.Sector")} />
      <TextArea label={t("Form.Description")} className="h-40" />
    </div>
  );

  const stepResources = (
    <div className="h-80 w-[20rem] flex flex-col gap-1">
      <Input
        name="initial-capital"
        type="text"
        label={t("Form.Monetary")}
        onChange={setInitialCapital}
        value={initial_capital}
      />
      <Input
        name="incoming-model"
        type="text"
        label={t("Form.IncomingModel")}
        onChange={setIncomingModel}
        value={incoming_model}
      />
      <Input
        name="resources"
        type="text"
        label={t("Form.Resources")}
        onChange={setResources}
        value={resourcers}
      />
      <Input
        name="resources-needed"
        type="text"
        label={t("Form.ResourcesNeeded")}
        onChange={setResourcesNeeded}
        value={resourcers_needed}
      />
      <Input
        name="intelectual-property"
        type="text"
        label={t("Form.IP")}
        onChange={setIp}
        value={ip}
      />
    </div>
  );

  const stepProject = (
    <div className="h-80 w-[20rem] flex flex-col gap-1">
      <Input
        name="goal"
        type="text"
        label={t("Form.Goal")}
        onChange={setGoal}
        value={goal}
      />
      <Input
        name="mvp"
        type="text"
        label={t("Form.MVP")}
        onChange={setMvp}
        value={mvp}
      />
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <Input
          name="project-time"
          type="text"
          label={t("Form.ProjectTime")}
          onChange={setProjectTime}
          value={project_time}
        />
        <Input
          name="project-start"
          type="text"
          label={t("Form.ProjectStarted")}
          onChange={setProjectStarted}
          value={project_started}
        />
        <Input
          name="team-size"
          type="text"
          label={t("Form.TeamSize")}
          onChange={setTeamSize}
          value={team_size}
        />
        <Input
          name="website"
          type="text"
          label={t("Form.Website")}
          onChange={setWebsite}
          value={website}
        />
      </div>
      <Input
        name="challenges"
        type="text"
        label={t("Form.Challenges")}
        onChange={setChallenges}
        value={challenges}
      />
    </div>
  );

  const next = useEventCallback(() => stepperRef.current?.next());
  const previous = useEventCallback(() => stepperRef.current?.previous());

  const steps = useMemo(
    () => [
      { component: stepCompanyInfo, title: "Informações da empresa" },
      { component: stepResources, title: "Recursos da empresa" },
      { component: stepProject, title: "Informações do projeto I" },
    ],
    []
  );
  const [hasPrevious, setHasPrevious] = useState(false);
  const [hasNext, setHasNext] = useState(true);

  const onChangeStep = useEventCallback((step: number) => {
    setHasPrevious(step > 1);
    setHasNext(step < steps.length);
  });

  return (
    <div className="flex items-center h-screen p-8 mx-16">
      <div className="w-full grid grid-rows-1 grid-cols-[auto_1fr] gap-4 h-[70vh] relative z-10">
        <div className="max-w-sm">
          <Text variant="h3" className="font-semibold text-center mb-8">
            {t("Title")}
          </Text>
          <Stepper ref={stepperRef} steps={steps} onChange={onChangeStep} />
          <div className="flex justify-between align-center mt-8">
            <Button
              onClick={previous}
              variant="outlined"
              disabled={!hasPrevious}
            >
              {t("Controls.Back")}
            </Button>
            <Button onClick={next} disabled={!hasNext}>
              {t("Controls.Next")}
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <img src="assets/logo.jpeg" className="w-96" />
        </div>
      </div>
      <img
        src="assets/waves.svg"
        className="absolute left-0 bottom-[-6rem] z-0"
      />
    </div>
  );

  return (
    <div className="flex items-center justify-center h-screen p-8">
      <div className="max-w-5xl max-h-[96vh] h-full w-full bg-slate-100 shadow-lg p-8">
        <IconButton className="pl-8 pb-4">
          <Icon className="pr-2" fontSize="large">
            arrow_back
          </Icon>
          <Text>Voltar</Text>
        </IconButton>
        <Text variant="h2" className="pb-8 text-center">
          {t("Title")}
        </Text>
        <div className="grid grid-rows-1 grid-cols-2 gap-4">
          <div className="w-80 flex flex-col gap-4">
            {/* <Text variant="h3">{t("TitleCol1")}</Text> */}
            <Input
              name="startup-name"
              type="text"
              label={t("Form.Name")}
              onChange={setTitle}
              value={title}
            />
            <Selector items={sectors} label={t("Form.Sector")} />
            <TextArea label={t("Form.Description")} />
            <Input
              name="initial-capital"
              type="text"
              label={t("Form.Monetary")}
              onChange={setInitialCapital}
              value={initial_capital}
            />
            <Input
              name="incoming-model"
              type="text"
              label={t("Form.IncomingModel")}
              onChange={setIncomingModel}
              value={incoming_model}
            />
            <Input
              name="resources"
              type="text"
              label={t("Form.Resources")}
              onChange={setResources}
              value={resourcers}
            />
            <Input
              name="resources-needed"
              type="text"
              label={t("Form.ResourcesNeeded")}
              onChange={setResourcesNeeded}
              value={resourcers_needed}
            />
            <Input
              name="intelectual-property"
              type="text"
              label={t("Form.IP")}
              onChange={setIp}
              value={ip}
            />
          </div>
          <div className="w-80 flex flex-col gap-4">
            {/* <Text variant="h3">{t("TitleCol2")}</Text> */}
            <Input
              name="cnpj"
              type="text"
              label={t("Form.Cnpj")}
              onChange={setCnpj}
              value={cnpj}
            />
            <Input
              name="goal"
              type="text"
              label={t("Form.Goal")}
              onChange={setGoal}
              value={goal}
            />
            <Input
              name="mvp"
              type="text"
              label={t("Form.MVP")}
              onChange={setMvp}
              value={mvp}
            />
            <Input
              name="project-time"
              type="text"
              label={t("Form.ProjectTime")}
              onChange={setProjectTime}
              value={project_time}
            />
            <Input
              name="challenges"
              type="text"
              label={t("Form.Challenges")}
              onChange={setChallenges}
              value={challenges}
            />
            <Input
              name="team-size"
              type="text"
              label={t("Form.TeamSize")}
              onChange={setTeamSize}
              value={team_size}
            />
            <Input
              name="project-start"
              type="text"
              label={t("Form.ProjectStarted")}
              onChange={setProjectStarted}
              value={project_started}
            />
            <Input
              name="website"
              type="text"
              label={t("Form.Website")}
              onChange={setWebsite}
              value={website}
            />
            <div className="place-self-end">
              <Button variant="contained">Salvar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterCompany;
