import { useTranslation } from "react-i18next";

import { Text, Input, TextArea, Button, Icon } from "@/components/atoms";
import { Selector, IconButton } from "@/components/molecules";
import type { SelectorItem } from "@/components/molecules";
import { useFormState } from "@/hooks";


const sectors: SelectorItem<string>[] = [
  { id: "tech", name: "Tecnologia" },
  { id: "data", name: "Dados" },
]

function RegisterCompany() {
  const { t } = useTranslation("registerStartup");

  const [name, setName] = useFormState("");

  return (
    <div className="flex items-center justify-center h-screen p-8">
      <div className="max-w-5xl max-h-[80vh] h-full w-full bg-slate-100 shadow-lg p-8">
        <IconButton className="pl-8 pb-4">
          <Icon className="pr-2" fontSize="large">arrow_back</Icon>
          <Text>Voltar</Text>
        </IconButton>
        <Text variant="h2" className="pb-16 text-center">
          {t("Title")}
        </Text>
        <div className="grid grid-rows-1 grid-cols-2 gap-4">
          <div className="w-80 flex flex-col gap-4">
            <Text variant="h3">{t("TitleCol1")}</Text>
            <Input name="startup-name" type="text" label={t("Form.Name")} onChange={setName} value={name} />
            <Selector items={sectors} label="Setor" />
            <Input name="initial-capital" type="text" label={t("Form.Monetary")} onChange={setName} value={name} />
            <TextArea label="Descrição" />
          </div>
          <div className="w-80 flex flex-col gap-4">
            <Text variant="h3">{t("TitleCol2")}</Text>
            <Input name="representative-name" type="text" label={t("Form.RepName")} onChange={setName} value={name} />
            <Input name="representative-email" type="text" label={t("Form.RepEmail")} onChange={setName} value={name} />
            <div className="place-self-end">
              <Button variant="contained">
                Salvar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterCompany;
