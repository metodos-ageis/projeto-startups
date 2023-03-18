import { Trans, useTranslation } from "react-i18next";

import { Text } from "@/components/atoms";

function LogoPane() {
  const { t } = useTranslation("login");

  return (
    <div className="flex flex-col gap-8">
      <img src="assets/logo.jpeg" className="w-64 mb-8" />
      <div>
        <Text className="text-typography">
          <Trans t={t} i18nKey="Welcome.Title" />
        </Text>
        <Text className="text-typography">
          <Trans t={t} i18nKey="Welcome.Subtitle" />
        </Text>
      </div>
      <div>
        <Text className="text-typography">
          <Trans t={t} i18nKey="Welcome.SponsorTitle" />
        </Text>
        <Text className="text-typography">
          <Trans t={t} i18nKey="Welcome.SponsorSubtitle" />
        </Text>
      </div>
      <div className="flex items-center mt-8 gap-8">
        <img src="assets/logo-senac-pe.png" className="w-32" />
        <img src="assets/logo-ufrpe.jpg" className="w-28" />
      </div>
    </div>
  );
}

export default LogoPane;
