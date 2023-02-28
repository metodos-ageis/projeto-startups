import { Header } from "@/components/organisms";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation("login");

  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[1fr_minmax(0,1080px)_1fr] gap-4">
      <Header className="col-span-3" />
      <main className="col-start-2">{t("SignIn")}</main>
    </div>
  );
}

export default Login;
