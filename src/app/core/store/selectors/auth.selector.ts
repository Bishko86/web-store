import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { IAuthState } from "../state/auth.state";

const selectFeature = (state: AppState) => state.auth;
 
export const selectUser = createSelector(
  selectFeature,
  (state: IAuthState) => state.user
);

export const selectUserId = createSelector(
  selectFeature,
  (state: IAuthState) => state.user?.id
)

export const selectError = createSelector(
  selectFeature,
  (state: IAuthState) => state.error
);

export const selectAuthIsLoading = createSelector(
  selectFeature,
  (state: IAuthState) => state.isLoading
);

export const selectUserRole = createSelector(
  selectFeature,
  (state: IAuthState) => {
    return state.user?.role
  }
);
