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
    <form className="flex flex-col items-center gap-8 p-8" onSubmit={onSubmit}>
      <Text variant="h2" className="text-primary font-semibold">
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
        <Link className="text-sm py-0.5 text-typography" to="/register">
          {t("NewUser")}
        </Link>
        <Text className="lowercase text-sm text-typography">{t("Or")}</Text>
        <Link className="text-sm py-0.5 text-typography" to="/forgot-password">
          {t("ForgotPassword")}
        </Link>
      </div>

      <Button
        className="w-full"
        typeof="submit"
        type="submit"
        color="secondary"
        loading={login.isLoading}
        disabled={!email || !password}
        error={login.isError}
        helperText={login.error ? t("Error.InvalidCredentials") : undefined}
      >
        {t("SignIn")}
      </Button>

      <Text className="text-sm text-red-500">
        {login.isError && t("Error.InvalidCredentials")}
      </Text>
    </form>
  );
}

export default FormPane;
