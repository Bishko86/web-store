import { createAction, props } from "@ngrx/store";
import { FirebaseError } from "firebase/app";
import { Product } from "../../models";

export enum ProductActions {
  GET_PRODUCTS = '[Product] Get Product',
  GET_PRODUCTS_SUCCESS = '[Product] Get Product Success',
  GET_PRODUCTS_FAILURE = '[Product] Get Product Failure',

  ADD_PRODUCT = '[Product] Add Product',
  ADD_PRODUCT_SUCCESS = '[Product] Add Product Success',
  ADD_PRODUCT_FAILURE = '[Product] Add Product Failure',

  UPDATE_PRODUCT = '[Product] Update Product',
  UPDATE_PRODUCT_SUCCESS = '[Product] Update Product Success',
  UPDATE_PRODUCT_FAILURE = '[Product] Update Product Failure',

  REMOVE_PRODUCT = '[Product] Remove Product',
  REMOVE_PRODUCT_SUCCESS = '[Product] Remove Product Success',
  REMOVE_PRODUCT_FAILURE = '[Product] Remove Product Failure',

  PRODUCT_IS_LOADING = '[Product] Product Is Loading',
}

// get products
export const getProducts = createAction(
  ProductActions.GET_PRODUCTS
);

export const getProductsSuccess = createAction(
  ProductActions.GET_PRODUCTS_SUCCESS,
  props<{products: Product[]}>()
);

export const getProductsFailure = createAction(
  ProductActions.GET_PRODUCTS_FAILURE,
  props<{error: FirebaseError}>()
);

//add product
export const addProduct = createAction(
  ProductActions.ADD_PRODUCT,
  props<{product: Product}>()
);

export const addProductSuccess = createAction(
  ProductActions.ADD_PRODUCT_SUCCESS,
  props<{product: Product}>()
);

export const addProductFailure = createAction(
  ProductActions.ADD_PRODUCT_FAILURE,
  props<{error: FirebaseError}>()
);

//update product
export const updateProduct = createAction(
  ProductActions.UPDATE_PRODUCT,
  props<{product: Product}>()
);

export const updateProductSuccess = createAction(
  ProductActions.UPDATE_PRODUCT_SUCCESS,
  props<{product: Product}>()
);

export const updateProductFailure = createAction(
  ProductActions.UPDATE_PRODUCT_FAILURE,
  props<{error: FirebaseError}>()
);

//remove product
export const removeProduct = createAction(
  ProductActions.REMOVE_PRODUCT,
  props<{productId: string}>()
);

export const removeProductsSuccess = createAction(
  ProductActions.REMOVE_PRODUCT_SUCCESS,
  props<{productId: string}>()
);

export const removeProductsFailure = createAction(
  ProductActions.REMOVE_PRODUCT_FAILURE,
  props<{error: FirebaseError}>()
);

// product is loading
export const productIsLoading = createAction(
  ProductActions.PRODUCT_IS_LOADING,
  props<{isLoading: boolean}>()
);
