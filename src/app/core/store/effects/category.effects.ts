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
} from '../actions/category.actions';
import { IAppState } from '../state/app.state';

@Injectable()
export class CategoryEffects {
  constructor(
    private store: Store<IAppState>,
    private actions$: Actions,
    private categoryService: CategoryService
  ) {}

  getCategories$ = createEffect(() => {
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

  addCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addCategory),
      tap(() => this.store.dispatch(categoryIsLoading({ isLoading: true }))),
      switchMap(({name}) => from(this.categoryService.addCategory(name)).pipe(
        filter((data) => typeof data !== 'undefined')  as OperatorFunction<Category | undefined, Category>,
        map((category: Category) => {
          this.store.dispatch(categoryIsLoading({ isLoading: false }))
            return addCategorySuccess({category})
         }),
         catchError((error) => of(addCategoryFailure({error})))
      ))
    )
  })
}
