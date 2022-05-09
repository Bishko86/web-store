import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/app.state';
import * as UserAppActions from '../actions/user.actions';

export const userReducer = createReducer(
  initialState.user,
  on(
    UserAppActions.updateUser,
    UserAppActions.loginSuccess,
    UserAppActions.registrateSuccess,
    (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),

  on(
    UserAppActions.loginFailure,
    UserAppActions.registrateFailure,
    UserAppActions.logoutFailure,
    (state, { error }) => ({
    ...state,
    user: null,
    error,
  })),
  
  on(UserAppActions.logoutSuccess,(state) => ({
    ...state,
    user: null,
    error: null
  })),
);
