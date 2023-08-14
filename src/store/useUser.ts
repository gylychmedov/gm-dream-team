import { IUserStore } from "@/interfaces/store/IUserStore";
import { IUser } from "@/interfaces/user/IUser";
import { create } from "zustand";

const useUserStore = create<IUserStore>((set) => ({
  user: {} as IUser,
  isAuth: false,
  setUser: (user) =>
    set({
      user,
      isAuth: true,
    }),
}));

export default useUserStore;
