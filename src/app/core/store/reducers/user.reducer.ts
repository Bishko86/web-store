import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/app.state';
import * as AppActions from './../actions/app.actions';

export const userReducer = createReducer(
  initialState.user,
  on(AppActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),

  on(AppActions.loginFailure, (state, { error }) => {
    return {
      ...state,
      user: null,
      error,
    };
  }),

  on(AppActions.registrateSuccess, (state, { user }) => {
    return {
      ...state,
      user,
      error: null,
    };
  }),

  on(AppActions.registrateFailure, (state, { error }) => {
    return {
      ...state,
      user: null,
      error,
    };
  })
);
