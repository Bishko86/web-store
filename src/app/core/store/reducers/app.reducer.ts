import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { commonReducer } from './common.reducer';
import { userReducer } from './user.reducer';


export const appReducer: ActionReducerMap<IAppState, any> = {
  user: userReducer,
  common: commonReducer,
};
