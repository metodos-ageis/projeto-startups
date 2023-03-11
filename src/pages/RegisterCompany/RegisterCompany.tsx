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
        <Text variant="h3" className="pb-4">
          {t("Title")}
        </Text>
        <div className="grid grid-rows-1 grid-cols-2 gap-4">
          <div className="w-80 flex flex-col gap-4">
            <Input name="startup-name" type="text" label={t("Form.Name")} onChange={setName} value={name} />
            <Selector items={sectors} label="Setor" />
            <TextArea label="Descrição" />
          </div>
          <div className="w-80">
            <IconButton>
              <Icon>
                arrow_back
              </Icon>
            </IconButton>

            <Button variant="contained">
              Salvar
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterCompany;
