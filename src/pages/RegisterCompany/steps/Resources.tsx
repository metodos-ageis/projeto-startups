import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

import { Input, RadioGroup, Text } from "@/components/atoms";
import { useEventCallback, useEventListener } from "@/hooks";
import { useCompanyFormField } from "@/store";

const ipItems = [
  { value: true, label: "Sim" },
  { value: false, label: "Não" },
];

function Resources() {
  const { t } = useTranslation("registerStartup");
  const [capital, setCapital] = useCompanyFormField("initial_capital");
  const onChangeCapital = useEventCallback(
    (event: ChangeEvent<HTMLInputElement>) =>
      setCapital(event.target.valueAsNumber)
  );

  const [incoming, setIncoming] = useCompanyFormField("incoming_model");
  const onChangeIncoming = useEventListener(setIncoming);

  const [resources, setResources] = useCompanyFormField("resources");
  const onChangeResources = useEventListener(setResources);

  const [resourcesNeeded, setResourcesNeeded] =
    useCompanyFormField("resources_needed");
  const onChangeResourcesNeeded = useEventListener(setResourcesNeeded);

  const [ip, setIp] = useCompanyFormField("ip");

  return (
    <div className="h-80 w-[20rem] flex flex-col gap-1">
      <Input
        placeholder = "R$ 0,00"
        name="initial-capital"
        type="number"
        step = "0.01"
        label={t("Form.Monetary")}
        onChange={onChangeCapital}
        value={capital}
        min={0}
      />
      <Input
        name="incoming-model"
        type="text"
        label={t("Form.IncomingModel")}
        onChange={onChangeIncoming}
        value={incoming}
      />
      <Input
        name="resources"
        type="text"
        label={t("Form.Resources")}
        onChange={onChangeResources}
        value={resources}
      />
      <Input
        name="resources-needed"
        type="text"
        label={t("Form.ResourcesNeeded")}
        onChange={onChangeResourcesNeeded}
        value={resourcesNeeded}
      />
      <RadioGroup
        label={t("Form.IP")}
        items={ipItems}
        value={ip}
        onChange={setIp}
        layout="horizontal"
      />
    </div>
  );
}

export default Resources;
