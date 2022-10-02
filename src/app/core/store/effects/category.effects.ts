import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FirebaseError } from 'firebase/app';
import { catchError, filter, from, map, of, OperatorFunction, switchMap, take, tap } from 'rxjs';

import { CategoryService } from 'src/app/features/admin/services/category.service';
import { Category } from '../../models';
import {
  addCategory,
  addCategoryFailure,
  addCategorySuccess,
  categoryIsLoading,
  getCategories,
  getCategoriesFailure,
  getCategoriesSuccess,
  removeCategory,
  removeCategoryFailure,
  removeCategorySuccess,
  updateCategory,
  updateCategoryFailure,
  updateCategorySuccess,
} from '../actions/category.actions';
import { IAppState } from '../state/app.state';

@Injectable()
export class CategoryEffects {
  constructor(
    private readonly store: Store<IAppState>,
    private readonly actions$: Actions,
    private readonly categoryService: CategoryService
  ) { }

  public getCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCategories),
      tap(() => this.store.dispatch(categoryIsLoading({ isLoading: true }))),
      switchMap(() =>
        this.categoryService.getCategories().snapshotChanges().pipe(
          take(1),
          map((changes) => changes.map((c) => ({ id: c.payload.doc.id, ...c.payload.doc.data() }))),
          map((categories: Category[]) => getCategoriesSuccess({ categories })),
          tap(() => this.store.dispatch(categoryIsLoading({ isLoading: false }))),
          catchError((error: FirebaseError) => {
            this.store.dispatch(categoryIsLoading({ isLoading: false }));
            return of(getCategoriesFailure({ error }));
          })
        )
      )
    );
  });

  public addCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addCategory),
      tap(() => this.store.dispatch(categoryIsLoading({ isLoading: true }))),
      switchMap(({ name }) => from(this.categoryService.addCategory(name)).pipe(
        filter((data: Category) => typeof data !== 'undefined') as OperatorFunction<Category | undefined, Category>,
        map((category: Category) => {
          this.store.dispatch(categoryIsLoading({ isLoading: false }));
          return addCategorySuccess({ category });
        }),
        catchError((error) => {
          this.store.dispatch(categoryIsLoading({ isLoading: false }));
          return of(addCategoryFailure({ error }));
        })
      ))
    );
  });

  public removeCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(removeCategory),
      tap(() => this.store.dispatch(categoryIsLoading({ isLoading: true }))),
      switchMap(({ categoryId }) => from(this.categoryService.removeCategory(categoryId)).pipe(
        map(() => {
          this.store.dispatch(categoryIsLoading({ isLoading: false }));
          return removeCategorySuccess({ categoryId });
        }),
        catchError((error) => {
          this.store.dispatch(categoryIsLoading({ isLoading: false }))
          return of(removeCategoryFailure({ error }))
        })
      ))
    );
  });

  public updateCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateCategory),
      tap(() => this.store.dispatch(categoryIsLoading({ isLoading: true }))),
      switchMap(({ categoryName, categoryId }) => from(this.categoryService.updateCategory(categoryName, categoryId)).pipe(
        map(() => {
          this.store.dispatch(categoryIsLoading({ isLoading: false }))
          return updateCategorySuccess({ categoryName, categoryId })
        }),
        catchError((error) => {
          this.store.dispatch(categoryIsLoading({ isLoading: false }))
          return of(updateCategoryFailure({ error }))
        })
      ))
    )
  })
}
