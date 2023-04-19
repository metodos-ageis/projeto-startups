import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreData {
  token: string;
  email: string;
}

interface StoreActions {
  setToken: (token: string) => void;
  setEmail: (email: string) => void;
  logout: () => void;
}

type Store = StoreData & StoreActions;

const useAuth = create(
  persist<Store>(
    (set) => ({
      token: "",
      email: "",
      logout() {
        set({ token: "", email: "" });
      },
      setToken(token: string) {
        set({ token });
      },
      setEmail(email) {
        set({ email });
      },
    }),
    { name: "auth", version: 0 }
  )
);

export default useAuth;
