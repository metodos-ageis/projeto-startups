import { useMutation } from "@tanstack/react-query";

import { Api } from "../api";

interface Payload {
  email: string;
  password: string;
}

export async function login(email: string, password: string) {
  return Api.post("/login", { email, password });
}

export function useLogin() {
  return useMutation({
    mutationFn: ({ email, password }: Payload) => login(email, password),
  });
}
