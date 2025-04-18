import { create } from "zustand";

export enum Section {
  user = "user",
  salon = "salon",
  partner = "partner",
}

interface ToggleState {
  section: Section;
  changeSection: (val: Section) => void;
}
export const useToggle = create<ToggleState>((set) => {
  return {
    section: Section.user,
    changeSection: (val: Section) => {
      set({ section: val });
    },
  };
});
