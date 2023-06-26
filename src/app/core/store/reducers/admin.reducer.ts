import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/app.state';
import * as AdminActions from '../actions/admin.actions';

export const adminReducer = createReducer(
  initialState.admin,
  on(AdminActions.getUsersSuccess, (state, { users }) => ({
    ...state,
    users,
  })),

  on(AdminActions.getUsersFailure, (state, { error }) => ({
    ...state,
    error,
  })),
);
