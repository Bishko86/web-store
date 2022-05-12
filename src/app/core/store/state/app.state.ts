import { Order, Product } from '../../models';
import { initialAuthState, IAuthState } from './auth.state';
import { ICategoryState, initialCategoryState } from './category.state';
import { initialUsersState, IUsersState } from './users.state';

export interface IAppState {
  auth: IAuthState;
  users: IUsersState;
  product?: Product[] | null;
  category: ICategoryState;
  order?: Order[];
  common: {
    isFetching: boolean;
  }
}

export const initialState: IAppState = {
  auth: initialAuthState,
  users: initialUsersState,
  product: null,
  category: initialCategoryState,
  common: {
    isFetching: false
  },
};
