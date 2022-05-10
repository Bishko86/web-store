import { FirebaseError } from "firebase/app";
import { IUser } from "../../models";

export interface IUsersState {
  users: IUser[];
  error: FirebaseError | null;
  isFetching: boolean;
}

export const initialUsersState: IUsersState = {
  users: [],
  error: null,
  isFetching: false,
}
