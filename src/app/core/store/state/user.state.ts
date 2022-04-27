import { IUser } from "../../models";

export interface IUserState {
  user: IUser | null;
  error: Error | null;
}

export const initialUserState = {
  user: null,
  error: null
}
