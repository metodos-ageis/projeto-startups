import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

import { Input, RadioGroup } from "@/components/atoms";
import { useEventCallback, useEventListener } from "@/hooks";
import { useCompanyFormField } from "@/store";

const mvpItems = [
  { value: true, label: "Sim" },
  { value: false, label: "Não" },
];

function Project() {
  const { t } = useTranslation("registerStartup");
  const [goal, setGoal] = useCompanyFormField("goal");
  const onChangeGoal = useEventListener(setGoal);

  const [mvp, setMvp] = useCompanyFormField("mvp");

  const [time, setTime] = useCompanyFormField("project_time");
  const onChangeTime = useEventCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setTime(event.target.valueAsNumber)
  );

  const [start, setStart] = useCompanyFormField("project_started");
  const onChangeStart = useEventListener(setStart);

  const [team, setTeam] = useCompanyFormField("team_size");
  const onChangeTeam = useEventCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setTeam(event.target.valueAsNumber)
  );

  const [website, setWebsite] = useCompanyFormField("website");
  const onChangeWebsite = useEventListener(setWebsite);

  const [challenges, setChallenges] = useCompanyFormField("challenges");
  const onChangeChallenges = useEventListener(setChallenges);

  return (
    <div className="h-80 w-[20rem] flex flex-col gap-1">
      <Input
        name="goal"
        type="text"
        label={t("Form.Goal")}
        onChange={onChangeGoal}
        value={goal}
      />
      <RadioGroup
        label={t("Form.IP")}
        items={mvpItems}
        value={mvp}
        onChange={setMvp}
        layout="horizontal"
      />
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <Input
          name="project-time"
          type="number"
          label={t("Form.ProjectTime")}
          onChange={onChangeTime}
          value={time}
          min={0}
        />
        <Input
          name="project-start"
          type="date"
          label={t("Form.ProjectStarted")}
          onChange={onChangeStart}
          value={start}
        />
        <Input
          name="team-size"
          type="number"
          label={t("Form.TeamSize")}
          onChange={onChangeTeam}
          value={team}
          min={0}
        />
        <Input
          name="website"
          type="text"
          label={t("Form.Website")}
          onChange={onChangeWebsite}
          value={website}
        />
      </div>
      <Input
        name="challenges"
        type="text"
        label={t("Form.Challenges")}
        onChange={onChangeChallenges}
        value={challenges}
      />
    </div>
  );
}

export default Project;
