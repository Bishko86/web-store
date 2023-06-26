import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { from, map, tap } from "rxjs";
import { filter, switchMap } from 'rxjs/operators';

import { CartService } from "src/app/features/client/services/cart.service";
import { addProductToCart, getUserCart, getUserCartSuccess, removeProductFromCart } from "../actions/user.actions";
import { AppState } from "../state/app.state";
import { isFetching } from "../actions/common.actions";

@Injectable()
export class UserEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly cartService: CartService,
    private readonly store: Store<AppState>,
  ) { }

  public getCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getUserCart),
      tap(() => {
        this.store.dispatch(
          isFetching({ isFetching: true })
        )
      }),
      switchMap(() => {
        return from(this.cartService.getCart()).pipe(
          tap(() => {
            this.store.dispatch(
              isFetching({ isFetching: false })
            )
          }),
          
        )
      }),
      filter(Boolean),
      switchMap((cart) => {
        return this.cartService.getCartProducts(cart.products as string[]).pipe(
          tap(data => console.error(data)),
          map((data) => getUserCartSuccess({ cart: { products: data } }))
        );
      })
    )
  });

  public addToCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addProductToCart),
      switchMap(({ productId }) => {
        return from(this.cartService.addToCart(productId as string))
          .pipe(
            map(() => getUserCart())
          )
      }
      ))
  });

  public removeFromCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(removeProductFromCart),
      tap(() => {
        this.store.dispatch(
          isFetching({ isFetching: true })
        )
      }),
      switchMap(({ productId }) => {
        return from(this.cartService.removeFromCart(productId as string))
          .pipe(
            tap(() => {
              this.store.dispatch(isFetching({ isFetching: true }))
            }),
            map(() => getUserCart())
          )
      }
      )
    )
  })
}
