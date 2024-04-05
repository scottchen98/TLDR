import { create } from "zustand";

interface SummarizationStore {
  isSummarizing: boolean;
  errorMessage: string;
  setIsSummarizing: (isSummarizing: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
}

export const useSummarizationStore = create<SummarizationStore>((set) => ({
  isSummarizing: false,
  errorMessage: "",
  setIsSummarizing: (isSummarizing) => set({ isSummarizing }),
  setErrorMessage: (errorMessage) => set({ errorMessage }),
}));
