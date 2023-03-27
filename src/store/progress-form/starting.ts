import { useMemo } from "react";
import { create } from "zustand";

interface StoreDate {
  start: Date | null;
  reason: string | null;
  goals: string | null;
  challenges: string | null;
}

interface StoreActions {
  setStart: (start: Date) => void;
  setReason: (reason: string) => void;
  setGoals: (goals: string) => void;
  setChallenges: (challenges: string) => void;
}

type Store = StoreDate & StoreActions;

const useStartingForm = create<Store>((set) => ({
  start: null,
  reason: null,
  goals: null,
  challenges: null,
  setStart(start: Date) {
    set({ start });
  },
  setReason(reason: string) {
    set({ reason });
  },
  setGoals(goals: string) {
    set({ goals });
  },
  setChallenges(challenges: string) {
    set({ challenges });
  },
}));

export function useStartingFormData() {
  const { start, reason, goals, challenges } = useStartingForm();
  return useMemo(
    () => ({ start, reason, goals, challenges }),
    [start, reason, goals, challenges]
  );
}

export default useStartingForm;
