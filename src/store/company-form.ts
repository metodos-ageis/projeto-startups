import { useMemo } from "react";
import { create } from "zustand";

import { CreateCompanyPayload } from "@/services/company";
import { State } from "@/utils/store";

interface Store {
  title: State<string>;
  description: State<string>;
  sector: State<string>;
  goal: State<string>;
  cnpj: State<number>;
  initial_capital: State<number>;
  project_time: State<number>;
  challenges: State<string>;
  team_size: State<number>;
  project_started: State<string>;
  website: State<string>;
  ip: State<boolean>;
  resources: State<string>;
  resources_needed: State<string>;
  mvp: State<boolean>;
  incoming_model: State<string>;
}

const useCompanyForm = create<Store>((set, get) => ({
  title: {
    value: "",
    setter: (value) => set({ title: { ...get().title, value } }),
  },
  description: {
    value: "",
    setter: (value) => set({ description: { ...get().description, value } }),
  },
  sector: {
    value: "",
    setter: (value) => set({ sector: { ...get().sector, value } }),
  },
  goal: {
    value: "",
    setter: (value) => set({ goal: { ...get().goal, value } }),
  },
  cnpj: {
    value: 0,
    setter: (value) => set({ cnpj: { ...get().cnpj, value } }),
  },
  initial_capital: {
    value: 0,
    setter: (value) =>
      set({ initial_capital: { ...get().initial_capital, value } }),
  },
  project_time: {
    value: 0,
    setter: (value) => set({ project_time: { ...get().project_time, value } }),
  },
  challenges: {
    value: "",
    setter: (value) => set({ challenges: { ...get().challenges, value } }),
  },
  team_size: {
    value: 0,
    setter: (value) => set({ team_size: { ...get().team_size, value } }),
  },
  project_started: {
    value: "",
    setter: (value) =>
      set({ project_started: { ...get().project_started, value } }),
  },
  website: {
    value: "",
    setter: (value) => set({ website: { ...get().website, value } }),
  },
  ip: {
    value: false,
    setter: (value) => set({ ip: { ...get().ip, value } }),
  },
  resources: {
    value: "",
    setter: (value) => set({ resources: { ...get().resources, value } }),
  },
  resources_needed: {
    value: "",
    setter: (value) =>
      set({ resources_needed: { ...get().resources_needed, value } }),
  },
  mvp: {
    value: false,
    setter: (value) => set({ mvp: { ...get().mvp, value } }),
  },
  incoming_model: {
    value: "",
    setter: (value) =>
      set({ incoming_model: { ...get().incoming_model, value } }),
  },
}));

export function useCompanyFormField<Key extends keyof Store>(
  key: Key
): [Store[Key]["value"], (_: Store[Key]["value"]) => void] {
  const state = useCompanyForm((store) => store[key]);
  return useMemo(
    () => [
      state.value as Store[Key]["value"],
      state.setter as (_: Store[Key]["value"]) => void,
    ],
    [state.value, state.setter]
  );
}

export function useCompanyFormData() {
  return useCompanyForm((store) => {
    const {
      title,
      description,
      sector,
      goal,
      cnpj,
      project_time,
      challenges,
      team_size,
      project_started,
      website,
      ip,
      resources,
      resources_needed,
      mvp,
      incoming_model,
    } = store;
    return useMemo(
      () =>
        ({
          title: title.value,
          description: description.value,
          sector: sector.value,
          goal: goal.value,
          cnpj: cnpj.value,
          project_time: project_time.value,
          challenges: challenges.value,
          team_size: team_size.value,
          project_started: project_started.value,
          website: website.value,
          ip: ip.value,
          resources: resources.value,
          resources_needed: resources_needed.value,
          mvp: mvp.value,
          incoming_model: incoming_model.value,
        } as CreateCompanyPayload),
      [store]
    );
  });
}

export default useCompanyForm;
