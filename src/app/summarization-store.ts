import { create } from "zustand";

interface SummarizationStore {
  isSummarizing: boolean;
  setIsSummarizing: (isSummarizing: boolean) => void;
}

export const useSummarizationStore = create<SummarizationStore>((set) => ({
  isSummarizing: false,
  setIsSummarizing: (isSummarizing) => set({ isSummarizing }),
}));
