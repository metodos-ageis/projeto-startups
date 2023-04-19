import { useTranslation } from "react-i18next";

import { Input, TextArea } from "@/components/atoms";
import { Selector } from "@/components/molecules";
import type { SelectorItem } from "@/components/molecules";
import { useEventListener } from "@/hooks";
import { useCompanyFormField } from "@/store";
import { masked } from "@/utils/validation";

const sectors: SelectorItem<string>[] = [
  { id: "tech", name: "Tecnologia" },
  { id: "data", name: "Dados" },
];

function CompanyInfo() {
  const { t } = useTranslation("registerStartup");

  const [title, setTitle] = useCompanyFormField("title");
  const onChangeTitle = useEventListener(setTitle);

  const [cnpj, setCnpj] = useCompanyFormField("cnpj");
  const onChangeCnpj = useEventListener((value) =>
    setCnpj(value.replace(/\D/g, ""))
  );

  const [sector, setSector] = useCompanyFormField("sector");

  const [description, setDescription] = useCompanyFormField("description");
  const onChangeDescription = useEventListener(setDescription);

  return (
    <div className="h-80 w-[20rem] flex flex-col gap-1 px-2">
      <Input
        name="startup-name"
        type="text"
        label={t("Form.Name")}
        onChange={onChangeTitle}
        value={title}
      />
      <Input
        name="cnpj"
        type="text"
        label={t("Form.Cnpj")}
        onChange={onChangeCnpj}
        value={masked(cnpj, "##.###.###/####-##")}
      />
      <Selector
        items={sectors}
        label={t("Form.Sector")}
        onChange={setSector}
        value={sector}
      />
      <TextArea
        label={t("Form.Description")}
        className="h-36"
        value={description}
        onChange={onChangeDescription}
      />
    </div>
  );
}

export default CompanyInfo;
