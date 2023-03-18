import { useMutation } from "@tanstack/react-query";

import { useAuth } from "@/store";
import { sleep } from "@/utils";

interface Payload {
  email: string;
  password: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function login(email: string, password: string) {
  await sleep(1000);
  useAuth.getState().setToken("debug-token");
  // return Api.post("/auth", { email, password });
}

export function useLogin() {
  return useMutation({
    mutationFn: ({ email, password }: Payload) => login(email, password),
  });
}
