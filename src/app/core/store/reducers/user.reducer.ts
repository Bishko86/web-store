import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/app.state';
import { getUserCartSuccess } from '../actions/user.actions';

export const userReducer = createReducer(
  initialState.user,
  on(getUserCartSuccess, (state, { cart }) => ({
    ...state,
    cart,
  })),
);
