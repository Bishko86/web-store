import { createAction, props } from "@ngrx/store";
import { Cart, Product } from "../../models";

export enum UserActions {
    ADD_PRODUCT_TO_CART = '[User] Add Product To Cart',
    REMOVE_PRODUCT_FROM_CART = '[User] Remove Product From Cart',
    GET_USER_CART = '[User] Get User Cart',
    GET_USER_CART_SUCCESS = '[User] Get User Cart Success',
}

export const addProductToCart = createAction(
    UserActions.ADD_PRODUCT_TO_CART,
    props<{ productId: string }>()
);

export const removeProductFromCart = createAction(
    UserActions.REMOVE_PRODUCT_FROM_CART,
    props<{ productId: string }>()
)

export const getUserCart = createAction(
    UserActions.GET_USER_CART,
);

export const getUserCartSuccess = createAction(
    UserActions.GET_USER_CART_SUCCESS,
    props<{ cart: Cart }>()
);
