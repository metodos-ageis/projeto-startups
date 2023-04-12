import { useTranslation } from "react-i18next";
import { ImageButton } from "@/components/atoms";
import { Routes } from "@/constants";

function ControlPanel() {
  const { t } = useTranslation("home");
  return (     
    <div className="flex items-center justify-evenly">   
         <ImageButton
            id="indicator-button"
            className="w-44"
            src="assets/icons/indicator.svg"
            href={Routes.DASHBOARD}
        >
            {t("Panel.Indicators")}
        </ImageButton>
    
       <ImageButton 
            id="feedback-button" 
            className="w-44" 
            src="assets/icons/feedback.svg">
            {t("Panel.Feedback")}
        </ImageButton>
        
      <ImageButton 
            id="file-upload-button" 
            className="w-44" 
            src="assets/icons/upload.svg">
            {t("Panel.FileUpload")}
        </ImageButton>
    </div>
 );
}

export default ControlPanel;