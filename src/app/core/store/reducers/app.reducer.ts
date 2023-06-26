import { Action, ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { authReducer } from './auth.reducer';
import { adminReducer } from './admin.reducer';
import { userReducer } from './user.reducer';
import { categoryReducer } from './category.reducer';
import { productReducer } from './product.reducer';

export const appReducer: ActionReducerMap<AppState, any> = {
  auth: authReducer,
  user: userReducer,
  admin: adminReducer,
  category: categoryReducer,
  product: productReducer,
}
