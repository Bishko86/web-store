import { User } from '../../models';
import { FirebaseError } from 'firebase/app';

export interface IAuthState {
  user: User | null;
  error: FirebaseError | null;
  isLoading: boolean;
}

const setInitialState = () => {
  const data = localStorage.getItem('user');
  return  data ? JSON.parse(data) : null
}

export const initialAuthState = {
  user: setInitialState(),
  error: null,
  isLoading: false,
};
