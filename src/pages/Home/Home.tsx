import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";

import ControlPanel from "./ControlPanel";

import { Button, Icon, Text, Waves } from "@/components/atoms";
import { useAuth } from "@/store";

function Home() {
  const { t } = useTranslation("home");
  const isAuthenticated = useAuth((state) => !!state.token);
  const logout = useAuth((state) => state.logout);

  if (!isAuthenticated) {
    return <Navigate to="login" />;
  }

  return (
  <><div id="header" className="pt-32 px-32">
      <div className="flex items-center mb-16 justify-between">
        <div className="flex items-center gap-4">
          <img id="logo" src="assets/logo-trimmed.jpeg" className="h-16" />
          <Text id="greetings" variant="h2" className="font-normal text-typography">
            {t("Greetings", { name: "@" })}
          </Text>
        </div>

        <Button id="logoutButton" variant="text" className="flex gap-1" onClick={logout}>
          <Icon>logout</Icon>
          <span>{t("Logout")}</span>
        </Button>
      </div>
    </div><ControlPanel /><Waves /></>
  );
}

export default Home;
