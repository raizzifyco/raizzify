import { create } from 'zustand'

interface ToggleState {
    isToggled: boolean;
    toggle: (val: boolean) => void;
}
export const useToggle = create<ToggleState>((set) => {
    return {
        isToggled: false,
        toggle: (val) => {
            set({ isToggled: val })
        }
    }
})