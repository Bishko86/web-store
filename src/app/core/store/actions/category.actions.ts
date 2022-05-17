import { createAction, props } from "@ngrx/store";
import { FirebaseError } from "firebase/app";

import {Category} from 'src/app/core/models'

export enum CategoryActions {
  GET_CATEGORIES = '[Category] Get Categories',
  GET_CATEGORIES_SUCCESS = '[Category] Get Categories Success',
  GET_CATEGORIES_FAILURE = '[Category] Get Categories Failure',
  
  ADD_CATEGORY = '[Category] Add Category',
  ADD_CATEGORY_SUCCESS = '[Category] Add Category Success',
  ADD_CATEGORY_FAILURE = '[Category] Add Category Failure',

  REMOVE_CATEGORY = '[Category] Remove Category',
  REMOVE_CATEGORY_SUCCESS = '[Category] Remove Category Success',
  REMOVE_CATEGORY_FAILURE = '[Category] Remove Category Failure',

  CATEGORY_IS_LOADING = '[Category] Category Is Loading',
}

export const getCategories = createAction(
  CategoryActions.GET_CATEGORIES,
);

export const getCategoriesSuccess = createAction(
  CategoryActions.GET_CATEGORIES_SUCCESS,
  props<{categories: Category[]}>()
);

export const getCategoriesFailure = createAction(
  CategoryActions.GET_CATEGORIES_FAILURE,
  props<{error: FirebaseError}>()
);

export const addCategory = createAction(
  CategoryActions.ADD_CATEGORY,
  props<{name: string}>()
);

export const addCategorySuccess = createAction(
  CategoryActions.ADD_CATEGORY_SUCCESS,
  props<{category: Category}>() //?? I'm not sure which value returns firebase in this action
);

export const addCategoryFailure = createAction(
  CategoryActions.ADD_CATEGORY_FAILURE,
  props<{error: FirebaseError}>()
);

export const removeCategory = createAction(
  CategoryActions.REMOVE_CATEGORY,
  props<{id: string}>()
);

export const removeCategorySuccess = createAction(
  CategoryActions.REMOVE_CATEGORY_SUCCESS,
  props<{categories: Category[]}>() //?? I'm not sure which value returns firebase in this action
);

export const removeCategoryFailure = createAction(
  CategoryActions.REMOVE_CATEGORY_FAILURE,
  props<{error: FirebaseError}>()
);

export const categoryIsLoading = createAction(
  CategoryActions.CATEGORY_IS_LOADING,
  props<{isLoading: boolean}>()
);
