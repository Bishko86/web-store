import { IUser } from '../../models';
import firebase from 'firebase/compat';

export interface IUserState {
  user: IUser | null;
  error: firebase.FirebaseError | null;
}

const setInitialState = () => {
  const data = localStorage.getItem('user');
  return  data ? JSON.parse(data) : null
}

export const initialUserState = {
  user: setInitialState(),
  error: null,
};
