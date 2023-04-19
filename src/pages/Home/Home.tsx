import { useTranslation } from "react-i18next";

import StartupsTable from "./StartupsTable/StartupsTable";

import { Button, Icon, Text, Waves } from "@/components/atoms";
import { withCredentials } from "@/components/hoc";
import { Selector } from "@/components/molecules";
import type { SelectorItem } from "@/components/molecules";
import { Routes } from "@/constants";
import { useAuth, useCompanyFormField } from "@/store";

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

function Home() {
  const { t } = useTranslation("home");

  const [level, setLevel] = useCompanyFormField("level");
  const [sprint, setSprint] = useCompanyFormField("sprint");
  const [sector, setSector] = useCompanyFormField("sector");

  const logout = useAuth((state) => state.logout);

  return (
    <>
      <div className="pt-32 px-24 mx-24">
        <div className="grid grid-cols-[5rem_auto_5rem] items-center justify-between gap-4">
          <div />
          <div className="col-start-2">
            <img src="/assets/logo.png" className="h-16" />
          </div>
          <Button variant="text" className="flex gap-1" onClick={logout}>
            <Icon>logout</Icon>
            <span>{t("Logout")}</span>
          </Button>
        </div>
        <div className="flex items-center justify-between mt-12 relative">
          <Text variant="h5" uppercase>
            {t("Form.Title")}
          </Text>
          <Button variant="outlined" type="button" to={Routes.REGISTER_COMPANY}>
            {t("Button.Register")}
          </Button>
        </div>
        <div className="grid grid-cols-3 justify-start mt-4 gap-8">
          <div>
            <Selector
              items={levels}
              label={t("Form.Level")}
              onChange={setLevel}
              value={level}
            />
          </div>
          <div>
            <Selector
              items={sprints}
              label={t("Form.Sprint")}
              onChange={setSprint}
              value={sprint}
            />
          </div>
          <div>
            <Selector
              items={sectors}
              label={t("Form.Sector")}
              onChange={setSector}
              value={sector}
            />
          </div>
        </div>
        <div className="mt-12 relative z-10">
          <StartupsTable />
        </div>
        <Waves size="sm" />
      </div>
    </>
  );
}

export default withCredentials(Home);
