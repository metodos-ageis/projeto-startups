import { useTranslation } from "react-i18next";

import StartupsTable from "./StartupsTable/StartupsTable";

import { Button, Icon, Text, Waves } from "@/components/atoms";
import { Selector } from "@/components/molecules";
import type { SelectorItem } from "@/components/molecules";
import { StartupHeader } from "@/components/organisms";
import { useCompanyFormField } from "@/store";

const levels: SelectorItem<number>[] = [
  { id: 1, name: "Nível 1" },
  { id: 2, name: "Nível 2" },
  { id: 3, name: "Nível 3" },
];
const sprints: SelectorItem<number>[] = [
  { id: 1, name: "Sprint 1" },
  { id: 2, name: "Sprint 2" },
  { id: 3, name: "Sprint 3" },
];
const sectors: SelectorItem<string>[] = [
  { id: "tech", name: "Tecnologia" },
  { id: "data", name: "Dados" },
];

function MainPage() {
  const { t } = useTranslation("mainPage");

  const [, setLevel] = useCompanyFormField("level");
  const [, setSprint] = useCompanyFormField("sprint");
  const [, setSector] = useCompanyFormField("sector");

  return (
    <>
      <div className="pt-32 px-32">
      <div className="flex items-center mb-16 justify-between">
        <div className="flex items-center gap-4">
          <img src="assets/logo-trimmed.jpeg" className="h-16" />
          <Text variant="h2" className="font-normal text-typography">
            {t("Greetings", { name: "@" })}
          </Text>
        </div>
      </div>
      <div className="mx-8 mt-12 relative z-10">
        <Button
          onClick={()=>{console.log("Apertou");
          }}
          variant="outlined"
          type="button"
          >
          {t("Button.Register")}
          </Button>
      </div>
      <div className="grid grid-cols-3 justify-start">
        <div>
          <Selector items={levels} label={t("Form.Level")} onChange={setLevel} />
        </div>
        <div>
          <Selector items={sprints} label={t("Form.Sprint")} onChange={setSprint} />
        </div>
        <div>
          <Selector items={sectors} label={t("Form.Sector")} onChange={setSector} />
        </div>
      </div>
      <div className="mx-8 mt-12 relative z-10">
        <StartupsTable></StartupsTable>
      </div>
      <Waves size="sm" />
    </div>
    </>
  );
}

export default MainPage;