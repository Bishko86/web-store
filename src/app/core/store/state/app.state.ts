import { Category, Order, Product } from '../../models';
import { initialAuthState, IAuthState } from './auth.state';

export interface IAppState {
  auth: IAuthState;
  product?: Product[] | null;
  category?: Category[] | null;
  order?: Order[];
  common: {
    isFetching: boolean;
  }
}

export const initialState: IAppState = {
  auth: initialAuthState,
  product: null,
  category: null,
  common: {
    isFetching: false
  },
};
