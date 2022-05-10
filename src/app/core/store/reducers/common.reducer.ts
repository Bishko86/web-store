import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/app.state';
import * as AppActions from './../actions/common.actions';

export const commonReducer = createReducer(
  initialState.common,
  on(AppActions.isFetching, (state, { isFetching }) => ({
    ...state,
    isFetching,
  }))
);
