import { useMutation } from "@tanstack/react-query";

import { Api, ApiError } from "../api";

import { useAuth } from "@/store";

interface Payload {
  email: string;
  password: string;
}

interface Response {
  token: string;
}

export async function login(email: string, password: string) {
  return Api.post<Response, Payload, ApiError>("/auth", { email, password });
}

export function useLogin() {
  return useMutation<Response, ApiError, Payload>({
    mutationFn: ({ email, password }: Payload) => login(email, password),
    onSuccess: (data) => {
      useAuth.getState().setToken(data.token);
    },
  });
}
