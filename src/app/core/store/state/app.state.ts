import { Category, Product } from '../../models';
import { initialUserState, IUserState } from './user.state';

export interface IAppState {
  user: IUserState;
  product?: Product[] | null;
  category?: Category[] | null;
  common: {
    isFetching: boolean;
  }
}

export const initialState: IAppState = {
  user: initialUserState,
  product: null,
  category: null,
  common: {
    isFetching: false
  },
};
