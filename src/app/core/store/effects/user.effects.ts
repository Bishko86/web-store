import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { User } from '../../models';
import AuthService from '../../services/auth.service';
import { isFetching } from '../actions/common.actions';
import * as UserActionCreators from '../actions/user.actions';
import { IAppState } from '../state/app.state';

@Injectable()
export class UserEffects {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActionCreators.login),
      switchMap(({email, password}) => {
        this.store.dispatch(isFetching({isFetching: true}));
        return from(this.authService.login({email, password})).pipe(
          map((data) => {
            const userDto = data?.user;
            this.store.dispatch(isFetching({isFetching: false}))
            return UserActionCreators.loginSuccess({
              user: new User(userDto)
            });
          }),
          catchError((error) => {
            this.store.dispatch(isFetching({isFetching: false}))
            return of(UserActionCreators.loginFailure({ error }))})
        );
      })
    );
  });

  registrate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActionCreators.registrate),
      switchMap((action) => {
        const {username, email, password} = action;
        this.store.dispatch(isFetching({isFetching: true}))
        return from(this.authService.registrate({username, email, password})).pipe(
          map((user) => {
            this.store.dispatch(isFetching({isFetching: false}));
            return UserActionCreators.registrateSuccess({user: new User(user)})}),
          catchError((error) => {
            this.store.dispatch(isFetching({isFetching: false}));
            return of(UserActionCreators.registrateFailure({ error }))})
        );
      })
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActionCreators.logout),
      switchMap(() => {
        this.store.dispatch(isFetching({ isFetching: true }));
        return from(this.authService.logout()).pipe(
          map(() => UserActionCreators.logoutSuccess()),
          catchError((error) => of(UserActionCreators.loginFailure({ error })))
        );
      })
    );
  });
}
