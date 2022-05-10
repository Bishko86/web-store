import { IUser } from '../../models';
import { FirebaseError } from 'firebase/app';

export interface IAuthState {
  user: IUser | null;
  error: FirebaseError | null;
}

const setInitialState = () => {
  const data = localStorage.getItem('user');
  return  data ? JSON.parse(data) : null
}

export const initialAuthState = {
  user: setInitialState(),
  error: null,
};
