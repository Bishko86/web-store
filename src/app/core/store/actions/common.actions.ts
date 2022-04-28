import { createAction, props } from "@ngrx/store";

export enum CommonActions {
  IS_FETCHING = '[Common] Is Fetching',
}

export const isFetching = createAction(
  CommonActions.IS_FETCHING,
  props<{isFetching: boolean}>()
);
