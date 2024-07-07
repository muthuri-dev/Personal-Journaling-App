import { create } from "zustand";

interface ICreate {
  mood: string;
  feel: string;
  category: string;
  setMood: (mmod: string) => void;
  setFeel: (feel: string) => void;
  setCategory: (cat: string) => void;
}

export const useCreate = create<ICreate>()((set) => ({
  mood: "",
  feel: "",
  category: "",
  setMood: (mood) => set(() => ({ mood })),
  setFeel: (feel) => set(() => ({ feel })),
  setCategory: (cat) => set(() => ({ category: cat })),
}));
