import { createReducer, on } from '@ngrx/store';
import {
  addCategorySuccess,
  categoryIsLoading,
  getCategoriesFailure,
  getCategoriesSuccess,
  removeCategoryFailure,
  removeCategorySuccess,
  updateCategoryFailure,
  updateCategorySuccess,
} from '../actions/category.actions';
import { initialState } from '../state/app.state';

export const categoryReducer = createReducer(
  initialState.category,
  on(getCategoriesSuccess, (state, { categories }) => ({
    ...state,
    categories,
  })),

  on(
    removeCategoryFailure,
    getCategoriesFailure,
    updateCategoryFailure,
    (state, { error }) => ({
      ...state,
      error,
    })
  ),

  on(categoryIsLoading, (state, { isLoading }) => ({
    ...state,
    isLoading,
  })),

  on(addCategorySuccess, (state, { category }) => ({
    ...state,
    categories: [...state.categories, category],
  })),

  on(updateCategorySuccess, (state, { categoryName, categoryId }) => ({
    ...state,
    categories: state.categories.map((category) => {
      return category.id === categoryId
        ? {
          ...category,
          name: categoryName,
        }
        : category;
    }),
  })),

  on(removeCategorySuccess, (state, { categoryId }) => ({
    ...state,
    categories: [
      ...state.categories.filter((category) => category.id !== categoryId),
    ],
  }))
);
