import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";

export const selectFeature = (state: IAppState) => state.common;
 
export const selectIsFetching = createSelector(
  selectFeature,
  (state: {isFetching: boolean}) => state.isFetching
);
