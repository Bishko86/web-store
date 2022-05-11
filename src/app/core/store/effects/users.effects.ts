import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { FirebaseError } from 'firebase/app';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { IUser } from '../../models';
import { UserService } from '../../services/user.service';
import * as UsersActions from '../actions/users.actions';
import { IAppState } from '../state/app.state';

@Injectable()
export class UsersEffects {
  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}

  users$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UsersActions.getUsers),
      tap(() => this.store.dispatch(
          UsersActions.getUsersIsFetching({ isFetching: true })
        )),
      switchMap(() => {
        return this.userService.getAllUsers().valueChanges()
          .pipe(tap(() => this.store.dispatch(
                UsersActions.getUsersIsFetching({ isFetching: false })
                )
            ),
            map((users: IUser[]) => UsersActions.getUsersSuccess({ users })),
            catchError((error: FirebaseError) => {
              this.store.dispatch( UsersActions.getUsersIsFetching({ isFetching: false }));
              return of(UsersActions.getUsersFailure({ error }));
            })
          );
      })
    );
  });
}
