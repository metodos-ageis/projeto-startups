import { useTranslation } from "react-i18next";

import { Button, Icon, Text } from "../atoms";

import { useUser } from "@/services/auth";
import { useAuth } from "@/store";

function Profile() {
  const { t } = useTranslation("controlPanel");
  const { data: user } = useUser();
  const logout = useAuth((state) => state.logout);
  return (
    <div className="flex gap-2 items-center">
      <Icon
        variant="filled"
        className="text-typography"
        fontSize="3extra-large"
      >
        account_circle
      </Icon>
      <div className="text-typography">
        <Text variant="caption" className="font-bold">
          {user?.name}
        </Text>
        <Text variant="caption">{user?.email}</Text>
      </div>
      <Button variant="text" className="flex gap-1" onClick={logout}>
        <Icon>logout</Icon>
        <span>{t("Logout")}</span>
      </Button>
    </div>
  );
}

export default Profile;
