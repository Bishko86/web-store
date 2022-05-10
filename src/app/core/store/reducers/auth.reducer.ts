import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/app.state';
import * as AuthActions from '../actions/auth.actions';

export const authReducer = createReducer(
  initialState.auth,
  on(
    AuthActions.updateUser,
    AuthActions.loginSuccess,
    AuthActions.registrateSuccess,
    (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),

  on(
    AuthActions.loginFailure,
    AuthActions.registrateFailure,
    AuthActions.logoutFailure,
    (state, { error }) => ({
    ...state,
    user: null,
    error,
  })),
  
  on(AuthActions.logoutSuccess,(state) => ({
    ...state,
    user: null,
    error: null
  })),
);
