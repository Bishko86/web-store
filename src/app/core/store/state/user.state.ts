import { IUser } from '../../models';
import firebase from 'firebase/compat';

export interface IUserState {
  user: IUser | null;
  error: firebase.FirebaseError | null;
}

export const initialUserState = {
  user: JSON.parse(localStorage['user'] ? localStorage['user'] : null),
  error: null,
};
