import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { IUserState } from "../state/user.state";

export const selectFeature = (state: IAppState) => state.user;
 
export const selectUser = createSelector(
  selectFeature,
  (state: IUserState) => state.user
);

export const selectUserId = createSelector(
  selectFeature,
  (state: IUserState) => state.user?.id
)

export const selectError = createSelector(
  selectFeature,
  (state: IUserState) => state.error
);

export const selectUserRole = createSelector(
  selectFeature,
  (state: IUserState) => {
    return state.user?.role
  }
);
