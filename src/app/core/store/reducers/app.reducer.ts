import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { commonReducer } from './common.reducer';
import { authReducer } from './auth.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
  auth: authReducer,
  common: commonReducer,
}
