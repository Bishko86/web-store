import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FirebaseError } from 'firebase/app';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { User } from '../../models';
import { UserService } from '../../services/user.service';
import * as AdminActions from '../actions/admin.actions';
import { AppState } from '../state/app.state';
import { isFetching } from '../actions/common.actions';

@Injectable()
export class AdminEffects {
  constructor(
    private readonly userService: UserService,
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
  ) { }

  public users$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminActions.getUsers),
      tap(() => {
        this.store.dispatch(
          isFetching({ isFetching: true })
        )
      }),
      switchMap(() => {
        return this.userService.getAllUsers().valueChanges()
          .pipe(
            tap(() => {
              this.store.dispatch(
                isFetching({ isFetching: false })
              )
            }
            ),
            map((users: User[]) => AdminActions.getUsersSuccess({ users })),
            catchError((error: FirebaseError) => {
              this.store.dispatch(isFetching({ isFetching: false }));
              return of(AdminActions.getUsersFailure({ error }));
            })
          );
      })
    );
  });
}
