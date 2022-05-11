import { Category, Order, Product } from '../../models';
import { initialAuthState, IAuthState } from './auth.state';
import { initialUsersState, IUsersState } from './users.state';

export interface IAppState {
  auth: IAuthState;
  users: IUsersState;
  product?: Product[] | null;
  category?: Category[] | null;
  order?: Order[];
  common: {
    isFetching: boolean;
  }
}

export const initialState: IAppState = {
  auth: initialAuthState,
  users: initialUsersState,
  product: null,
  category: null,
  common: {
    isFetching: false
  },
};
