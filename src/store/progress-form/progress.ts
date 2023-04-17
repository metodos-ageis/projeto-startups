/**
  canvas
  pitch
  development_state
  solution_definition
  ecosystem
  definition_validation
  clients
  concurrency_analysis
  market_size
  incoming_method
  mvp
  feedback_cycle
 */

import { create } from "zustand";

interface StoreData {
  canvas?: [number, string];
  pitch?: [number, string];
  intelectual_property?: [number, string];
  development_state?: [number, string];
  solution_definition?: [number, string];
  needed_resources?: [number, string];
  ecosystem?: [number, string];
  definition_validation?: [number, string];
  clients?: [number, string];
  concurrency_analysis?: [number, string];
  market_size?: [number, string];
  incoming_method?: [number, string];
  mvp?: [number, string];
  feedback_cycle?: [number, string];
}

interface StoreActions {
  setCanvas: (canvas: [number, string]) => void;
  setPitch: (pitch: [number, string]) => void;
  setIP: (intelectual_property: [number, string]) => void;
  setDevelopmentState: (development_state: [number, string]) => void;
  setSolutionDefinition: (solution_definition: [number, string]) => void;
  setNeededResources: (needed_resources: [number, string]) => void;
  setEcosystem: (ecosystem: [number, string]) => void;
  setDefinitionValidation: (definition_validation: [number, string]) => void;
  setClients: (clients: [number, string]) => void;
  setConcurrencyAnalysis: (concurrency_analysis: [number, string]) => void;
  setMarketSize: (market_size: [number, string]) => void;
  setIncomingMethod: (incoming_method: [number, string]) => void;
  setMvp: (mvp: [number, string]) => void;
  setFeedbackCycle: (feedback_cycle: [number, string]) => void;
}

type Store = StoreData & StoreActions;

const useProgressForm = create<Store>((set) => ({
  setCanvas: (canvas: [number, string]) => set({ canvas }),
  setPitch: (pitch: [number, string]) => set({ pitch }),
  setIP: (intelectual_property: [number, string]) => set({ intelectual_property }),
  setDevelopmentState: (development_state: [number, string]) =>
    set({ development_state }),
  setSolutionDefinition: (solution_definition: [number, string]) =>
    set({ solution_definition }),
  setNeededResources: (needed_resources: [number, string]) =>
  set({ needed_resources }),
  setEcosystem: (ecosystem: [number, string]) => set({ ecosystem }),
  setDefinitionValidation: (definition_validation: [number, string]) =>
    set({ definition_validation }),
  setClients: (clients: [number, string]) => set({ clients }),
  setConcurrencyAnalysis: (concurrency_analysis: [number, string]) =>
    set({ concurrency_analysis }),
  setMarketSize: (market_size: [number, string]) => set({ market_size }),
  setIncomingMethod: (incoming_method: [number, string]) =>
    set({ incoming_method }),
  setMvp: (mvp: [number, string]) => set({ mvp }),
  setFeedbackCycle: (feedback_cycle: [number, string]) =>
    set({ feedback_cycle }),
}));

export default useProgressForm;
