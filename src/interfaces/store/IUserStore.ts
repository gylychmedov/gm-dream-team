import { IUser } from "../user/IUser";

export interface IUserStore {
  user: IUser;
  isAuth: boolean;
  setUser: (user: IUser) => void;
}
