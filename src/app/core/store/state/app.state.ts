import { Order } from '../../models';
import { initialAuthState, IAuthState } from './auth.state';
import { ICategoryState, initialCategoryState } from './category.state';
import { initialProductState, IProductState } from './product.state';
import { initialUsersState, IUsersState } from './users.state';

export interface IAppState {
  auth: IAuthState;
  users: IUsersState;
  product: IProductState;
  category: ICategoryState;
  order?: Order[];
  common: {
    isFetching: boolean;
  }
}

export const initialState: IAppState = {
  auth: initialAuthState,
  users: initialUsersState,
  product: initialProductState,
  category: initialCategoryState,
  common: {
    isFetching: false
  },
};
