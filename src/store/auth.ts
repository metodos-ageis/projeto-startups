import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreData {
  token: string;
}

interface StoreActions {
  setToken: (token: string) => void;
  logout: () => void;
}

type Store = StoreData & StoreActions;

const useAuth = create(
  persist<Store>(
    (set) => ({
      token: "",
      logout() {
        set({ token: "" });
      },
      setToken(token: string) {
        set({ token });
      },
    }),
    { name: "auth", version: 0 }
  )
);

export default useAuth;
