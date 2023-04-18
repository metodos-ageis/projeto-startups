import { useTranslation } from "react-i18next";

import { ImageButton } from "@/components/atoms";
import { Routes } from "@/constants";

function ControlPanelButtons() {
  const { t } = useTranslation("controlPanel");
  return (
    <div className="flex items-center justify-evenly">
      <ImageButton
        className="w-44"
        src="/assets/icons/indicator.svg"
        to={Routes.COMPANY.DASHBOARD}
        detailed
      >
        {t("Panel.Indicators")}
      </ImageButton>
      <ImageButton
        to={Routes.COMPANY.UPDATE_PROGRESS}
        detailed
        className="w-44"
        src="/assets/icons/feedback.svg"
      >
        {t("Panel.Feedback")}
      </ImageButton>
      <ImageButton to="#" className="w-44" src="/assets/icons/upload.svg">
        {t("Panel.FileUpload")}
      </ImageButton>
    </div>
  );
}

export default ControlPanelButtons;
