import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { IAppState, initialState } from '../state/app.state';
import * as AppActions from './../actions/app.actions';

export const authReducer = createReducer(
  initialState.user,
  on(AppActions.loginSuccess, state => ({ ...state, isLoggedIn: true, })),
  on(AppActions.isFetching, (state, {isFetching}) => ({ ...state, isFetching })),
);

export const appReducer: ActionReducerMap<IAppState, any> = {
  user: authReducer,
}