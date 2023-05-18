import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ProductService } from 'src/app/features/admin/services/product.service';
import { IAppState } from '../state/app.state';
import * as ProductActions from '../actions/product.action';
import { catchError, from, map, of, switchMap, take, tap } from 'rxjs';
import { Product } from '../../models';
import { FirebaseError } from 'firebase/app';
import { UploadFileService } from '../../services/upload-file.service';

@Injectable()
export class ProductEffects {
  constructor(
    private readonly store: Store<IAppState>,
    private readonly actions$: Actions,
    private readonly productService: ProductService,
    private readonly uploadFileService: UploadFileService
  ) { }

  public getProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.getProducts),
      tap(() =>
        this.store.dispatch(
          ProductActions.productIsLoading({ isLoading: true })
        )
      ),
      switchMap(() =>
        this.productService
          .getProducts()
          .snapshotChanges()
          .pipe(
            take(1),
            map((changes) =>
              changes.map((c) => ({
                id: c.payload.doc.id,
                ...c.payload.doc.data(),
              }))
            ),
            map((products: Product[]) =>
              ProductActions.getProductsSuccess({ products })
            ),
            tap(() =>
              this.store.dispatch(
                ProductActions.productIsLoading({ isLoading: false })
              )
            ),
            catchError((error: FirebaseError) => {
              this.store.dispatch(
                ProductActions.productIsLoading({ isLoading: false })
              );
              return of(ProductActions.getProductsFailure({ error }));
            })
          )
      )
    );
  });

  public addProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.addProduct),
      tap(() =>
        this.store.dispatch(
          ProductActions.productIsLoading({ isLoading: true })
        )
      ),
      switchMap(({ product }) =>
        from(this.productService.addProduct(product)).pipe(
          map((product: Product) => {
            this.store.dispatch(
              ProductActions.productIsLoading({ isLoading: false })
            );
            return ProductActions.addProductSuccess({ product });
          }),
          catchError((error) => {
            this.store.dispatch(
              ProductActions.productIsLoading({ isLoading: false })
            );
            return of(ProductActions.addProductFailure({ error }));
          })
        )
      )
    );
  });

  public updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      tap(() =>
        this.store.dispatch(
          ProductActions.productIsLoading({ isLoading: true })
        )
      ),
      switchMap(({ product }) =>
        from(this.productService.updateProduct(product)).pipe(
          map(() => {
            this.store.dispatch(
              ProductActions.productIsLoading({ isLoading: false })
            );
            return ProductActions.updateProductSuccess({ product });
          }),
          catchError((error) => {
            this.store.dispatch(
              ProductActions.productIsLoading({ isLoading: false })
            );
            return of(ProductActions.updateProductFailure({ error }));
          })
        )
      )
    );
  });

  public removeProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.removeProduct),
      tap(() => {
        this.store.dispatch(
          ProductActions.productIsLoading({ isLoading: true })
        )
      }
      ),
      switchMap(({ productId, photos }) => {
        photos && photos.forEach((photo) => this.uploadFileService.deleteFile(photo.name));
        return from(this.productService.removeProduct(productId)).pipe(
          map(() => {
            this.store.dispatch(
              ProductActions.productIsLoading({ isLoading: false })
            );
            return ProductActions.removeProductSuccess({ productId });
          }),
          catchError((error) => {
            this.store.dispatch(
              ProductActions.productIsLoading({ isLoading: false })
            );
            return of(ProductActions.removeProductFailure({ error }));
          })
        );
      })
    );
  });

  public getProductsByCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.getProductsByCategory),
      tap(() => { this.store.dispatch(ProductActions.productIsLoading({ isLoading: true })) }
      ),
      switchMap(({ id }) => {
        return this.productService.getProductsByCategory(id).pipe(
          tap(() => {
            this.store.dispatch(
              ProductActions.productIsLoading({ isLoading: false })
            );
          }),
          map((products: Product[]) => {
            return ProductActions.getProductsByCategorySuccess({ products })
          })
        );
      }),
    )
  })
}
