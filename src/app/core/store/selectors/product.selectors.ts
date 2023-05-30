import { createSelector } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { IProductState } from "../state/product.state";

const selectFeature = (state: AppState) => state.product;

export const selectProducts = createSelector(
  selectFeature,
  (state: IProductState) => state.products
);

export const selectProductIsLoading = createSelector(
  selectFeature,
  (state: IProductState) => state.isLoading
);
