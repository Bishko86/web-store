import { createReducer, on } from '@ngrx/store';
import { initialState } from '../state/app.state';
import * as ProductActions from '../actions/product.action';

export const productReducer = createReducer(
  initialState.product,
  on(
    ProductActions.getProductsFailure,
    ProductActions.addProductFailure,
    ProductActions.removeProductFailure,
    ProductActions.updateProductFailure,
    (state, { error }) => ({
      ...state,
      error,
    })
  ),

  on(ProductActions.getProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  })),

  on(ProductActions.addProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),

  on(ProductActions.removeProductSuccess, (state, { productId }) => ({
    ...state,
    products: state.products.filter((product) => product.id !== productId),
  })),

  on(ProductActions.updateProductSuccess, (state, { product }) => ({
    ...state,
    products: state.products.map((prod) => {
      return prod.id === product.id
        ? {
            ...product,
          }
        : prod;
    }),
  })),

  on(ProductActions.productIsLoading, (state, { isLoading }) => ({
    ...state,
    isLoading,
  }))
);
