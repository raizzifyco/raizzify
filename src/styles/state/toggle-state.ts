import { create } from "zustand";

export enum Section {
  user = "user",
  salon = "salon",
  partner = "partner",
}

interface ToggleState {
  section: Section;
  isToggled: boolean;
  changeSection: (val: Section) => void;
}

export const useToggle = create<ToggleState>((set, get) => ({
  section: Section.partner,
  get isToggled() {
    return get().section !== Section.partner;
  },
  changeSection: (val: Section) => {
    set({ section: val });
  },
}));
