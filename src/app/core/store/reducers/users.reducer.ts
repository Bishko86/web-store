import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/app.state';
import * as UsersActions from '../actions/users.actions';

export const usersReducer = createReducer(
  initialState.users,
  on(UsersActions.getUsersSuccess, (state, { users }) => ({
    ...state,
    users,
  })),

  on(UsersActions.getUsersFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(UsersActions.getUsersIsFetching, (state, {isFetching}) => ({
    ...state,
    isFetching
  }))
);
