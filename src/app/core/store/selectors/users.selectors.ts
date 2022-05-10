import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IUsersState } from "../state/users.state";

const selectFeature = (state: IAppState) => state.users;

export const selectGetUsers = createSelector(
  selectFeature,
  (state: IUsersState) => state.users
);

export const selectUsersIsFetch = createSelector(
  selectFeature,
  (state: IUsersState) => state.isFetching
);
