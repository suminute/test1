import { create } from 'zustand';

interface PlanStore {
  selectedPlan: 'bookMark' | 'traveling' | 'planning' | 'end';
  setSelectedPlan: (
    plan: 'bookMark' | 'traveling' | 'planning' | 'end',
  ) => void;
}

export const usePlanStore = create<PlanStore>((set) => ({
  selectedPlan: 'traveling',
  setSelectedPlan: (plan) => {
    set({ selectedPlan: plan });
  },
}));
