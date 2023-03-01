import { FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { Button, Input, Text } from "@/components/atoms";
import { useEventCallback } from "@/hooks";

function FormPane() {
  const { t } = useTranslation("login");

  const onSubmit = useEventCallback((e: FormEvent) => {
    e.preventDefault();
    console.log("submitting");
  });

  return (
    <form className="flex flex-col items-center gap-8" onSubmit={onSubmit}>
      <Text variant="h3" className="font-normal">
        {t("Login")}
      </Text>

      <div className="flex flex-col items-center gap-4">
        <Input label={t("Username")} />
        <Input label={t("Password")} />
      </div>

      <div className="flex flex-col items-center">
        <Button variant="text" className="text-sm py-1" type="button">
          {t("NewUser")}
        </Button>
        <Text className="lowercase text-sm">{t("Or")}</Text>
        <Button variant="text" className="text-sm py-1" type="button">
          {t("ForgotPassword")}
        </Button>
      </div>

      <Button className="w-full" typeof="submit" type="submit">
        {t("SignIn")}
      </Button>
    </form>
  );
}

export default FormPane;
