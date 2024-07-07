import { create } from "zustand";

interface AuthState {
  token: string | null;
  username: string | "";
  setToken: (token: string | null) => void;
  setUsername: (name: string | "") => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  token: null,
  username: "",
  setToken: (token) => set({ token }),
  setUsername: (name) => set({ username: name }),
}));
