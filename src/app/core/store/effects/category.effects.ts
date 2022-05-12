import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FirebaseError } from 'firebase/app';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { CategoryService } from 'src/app/features/admin/services/category.service';
import { Category } from '../../models';
import {
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

  category$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getCategories),
      tap(() => this.store.dispatch(categoryIsLoading({ isLoading: true }))),
      switchMap(() =>
        this.categoryService.getCategories().valueChanges()
          .pipe(
            map((categories: Category[]) =>
              getCategoriesSuccess({ categories })
            ),
            tap(() =>
              this.store.dispatch(categoryIsLoading({ isLoading: false }))
            ),
            catchError((error: FirebaseError) => {
              this.store.dispatch(categoryIsLoading({ isLoading: false }));
              return of(getCategoriesFailure({ error }));
            })
          )
      )
    );
  });
}
