import { useQuery } from "@tanstack/react-query";

import { Api, ApiError } from "../api";

import { User } from "@/models";
import { useAuth } from "@/store";

export function retrieveUser(email: string) {
  return Api.get<User>("user", { email });
}

export function useUser() {
  const email = useAuth((state) => state.email);
  return useQuery<User, ApiError>({
    queryKey: ["user", email],
    queryFn: () => retrieveUser(email),
    enabled: !!email,
  });
}
