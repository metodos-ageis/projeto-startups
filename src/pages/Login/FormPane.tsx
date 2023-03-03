import { FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { Button, Icon, Input, Link, Text } from "@/components/atoms";
import { PasswordInput } from "@/components/molecules";
import { useEventCallback, useFormState } from "@/hooks";
import { useLogin } from "@/services";

function FormPane() {
  const { t } = useTranslation("login");

  const [email, setEmail] = useFormState("");
  const [password, setPassword] = useFormState("");

  const login = useLogin();

  const onSubmit = useEventCallback((e: FormEvent) => {
    e.preventDefault();
    login.mutate({ email, password });
  });

  return (
    <form
      className="flex flex-col items-center gap-4 shadow-lg p-8 bg-slate-100"
      onSubmit={onSubmit}
    >
      <Text variant="h3" className="font-normal">
        {t("Login")}
      </Text>

      <div className="flex flex-col items-center gap-4 w-full">
        <Input
          className="w-full"
          label={t("Username")}
          name="email"
          type="email"
          value={email}
          onChange={setEmail}
          startIcon={<Icon>alternate_email</Icon>}
        />
        <PasswordInput
          className="w-full"
          label={t("Password")}
          name="password"
          value={password}
          onChange={setPassword}
        />
      </div>

      <div className="flex flex-col items-center w-full">
        <Link className="text-sm py-1" to="/register">
          {t("NewUser")}
        </Link>
        <Text className="lowercase text-sm">{t("Or")}</Text>
        <Link className="text-sm py-1" to="/forgot-password">
          {t("ForgotPassword")}
        </Link>
      </div>

      <Button
        className="w-full"
        typeof="submit"
        type="submit"
        loading={login.isLoading}
        disabled={!email || !password}
      >
        {t("SignIn")}
      </Button>
    </form>
  );
}

export default FormPane;
