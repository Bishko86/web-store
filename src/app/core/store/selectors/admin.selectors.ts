import { createSelector } from "@ngrx/store";

import { AppState } from "../state/app.state";
import { AdminState } from "../state/admin.state";

const selectFeature = (state: AppState) => state.admin;

export const selectGetUsers = createSelector(
  selectFeature,
  (state: AdminState) => state.users
);
