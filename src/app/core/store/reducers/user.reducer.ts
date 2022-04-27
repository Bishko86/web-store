import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/app.state';
import * as UserAppActions from '../actions/user.actions';

export const userReducer = createReducer(
  initialState.user,
  on(UserAppActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),

  on(UserAppActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    error,
  })),

  on(UserAppActions.registrateSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),

  on(UserAppActions.registrateFailure, (state, { error }) => ({
    ...state,
    user: null,
    error,
  }))
);
