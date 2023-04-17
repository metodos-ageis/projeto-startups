import { useTranslation } from "react-i18next";

import ControlPanelButtons from "./ControlPanelButtons";

import { Button, Icon, Text, Waves } from "@/components/atoms";
import { withCredentials } from "@/components/hoc";
import { useAuth } from "@/store";

function ControlPanel() {
  const { t } = useTranslation("controlPanel");
  const logout = useAuth((state) => state.logout);

  return (
    <div className="pt-32 px-32">
      <div className="flex items-center mb-16 justify-between">
        <div className="flex items-center gap-4">
          <img src="/assets/logo-trimmed.jpeg" className="h-16" />
          <Text variant="h2" className="font-normal text-typography">
            {t("Greetings", { name: "@" })}
          </Text>
        </div>

        <Button variant="text" className="flex gap-1" onClick={logout}>
          <Icon>logout</Icon>
          <span>{t("Logout")}</span>
        </Button>
      </div>

      <ControlPanelButtons />

      <Waves />
    </div>
  );
}

export default withCredentials(ControlPanel);
