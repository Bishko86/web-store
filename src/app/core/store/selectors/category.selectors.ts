import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { ICategoryState } from '../state/category.state';

const selectFeature = (state: AppState) => state.category;

export const selectCategories = createSelector(
  selectFeature,
  (state: ICategoryState) => state.categories
);

export const selectCategoryError = createSelector(
  selectFeature,
  (state: ICategoryState) => state.error
);

export const selectCategoryIsLoading = createSelector(
  selectFeature,
  (state: ICategoryState) => state.isLoading
);
