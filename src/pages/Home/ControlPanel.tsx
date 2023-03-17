import type { ButtonHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

import { Text } from "@/components/atoms";

interface ImageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
}

function ImageButton({ src, children, className, ...props }: ImageButtonProps) {
  return (
    <button
      className={twMerge(
        "rounded-xl bg-secondary bg-opacity-0 hover:bg-opacity-10 active:bg-opacity-20 transition-all",
        "flex flex-col items-center gap-2 px-4 py-2",
        className
      )}
      {...props}
    >
      <img src={src} />
      <Text className="text-typography uppercase font-semibold text-sm">
        {children}
      </Text>
    </button>
  );
}

function ControlPanel() {
  const { t } = useTranslation("home");
  return (
    <div className="flex items-center justify-evenly">
      <ImageButton className="w-44" src="assets/icons/indicator.svg">
        {t("Panel.Indicators")}
      </ImageButton>
      <ImageButton className="w-44" src="assets/icons/feedback.svg">
        {t("Panel.Feedback")}
      </ImageButton>
      <ImageButton className="w-44" src="assets/icons/upload.svg">
        {t("Panel.FileUpload")}
      </ImageButton>
    </div>
  );
}

export default ControlPanel;
