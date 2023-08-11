import { create } from "zustand";

export interface IUserStore {
  user: {};
  isAuth: boolean;
  setUser: (user: {}) => void;
}

const useUserStore = create<IUserStore>((set) => ({
  user: {},
  isAuth: false,
  setUser: (user) =>
    set({
      user,
      isAuth: true,
    }),
}));

export default useUserStore;
