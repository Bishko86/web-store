import { Order } from '../../models';
import { initialAuthState, IAuthState } from './auth.state';
import { ICategoryState, initialCategoryState } from './category.state';
import { initialProductState, IProductState } from './product.state';
import { initialAdminState, AdminState } from './admin.state';
import { initialUserState, UserState } from './user.state';

export interface AppState {
  auth: IAuthState;
  user: UserState;
  admin: AdminState;
  product: IProductState;
  category: ICategoryState;
  order?: Order[];
}

export const initialState: AppState = {
  auth: initialAuthState,
  user: initialUserState,
  admin: initialAdminState,
  product: initialProductState,
  category: initialCategoryState,
};
