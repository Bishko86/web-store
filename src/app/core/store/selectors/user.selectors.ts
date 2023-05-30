import { createSelector } from "@ngrx/store";

import { AppState } from "../state/app.state";
import { UserState } from "../state/user.state";

const selectFeature = (state: AppState) => state.user;

export const selectUserCart = createSelector(
  selectFeature,
  (state: UserState) => state.cart,
);
