import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { commonReducer } from './common.reducer';
import { authReducer } from './auth.reducer';
import { usersReducer } from './users.reducer';
import { categoryReducer } from './category.reducer';
import { productReducer } from './product.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
  auth: authReducer,
  users: usersReducer,
  category: categoryReducer,
  product: productReducer,
  common: commonReducer,
}
