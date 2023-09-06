import { create } from "zustand";

export const useAuth = create((set) => ({
  isLoggedIn: false,
  user: null,
  login: () =>
    set({
      isLoggedIn: true,
      user: {
        name: "Mateo",
        lastname: "Castaño",
        email: "matew17@gmail.com",
      },
    }),
  logout: () => set({ isLoggedIn: false }),
}));
