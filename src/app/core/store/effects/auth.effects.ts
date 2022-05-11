import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { User } from '../../models';
import { AuthService } from '../../services/auth.service';
import { isFetching } from '../actions/common.actions';
import * as AuthActions from '../actions/auth.actions';
import { IAppState } from '../state/app.state';

@Injectable()
export class AuthEffects {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private store: Store<IAppState>,
    private router: Router,
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({email, password}) => {
        this.store.dispatch(isFetching({isFetching: true}));
        return from(this.authService.login({email, password})).pipe(
          map((data) => {
            const userDto = data?.user;
            this.store.dispatch(isFetching({isFetching: false}));
            this.router.navigateByUrl('/');
            return AuthActions.loginSuccess({
              user: new User(userDto)
            });
          }),
          catchError((error) => {
            this.store.dispatch(isFetching({isFetching: false}));
            return of(AuthActions.loginFailure({ error }))})
        );
      })
    );
  });

  registrate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.registrate),
      switchMap((action) => {
        const {username, email, password} = action;
        this.store.dispatch(isFetching({isFetching: true}));
        return from(this.authService.registrate({username, email, password})).pipe(
          map((user) => {
            this.store.dispatch(isFetching({isFetching: false}));
            this.router.navigateByUrl('/');
            return AuthActions.registrateSuccess({user: new User(user)})}),
          catchError((error) => {
            this.store.dispatch(isFetching({isFetching: false}));
            return of(AuthActions.registrateFailure({ error }))})
        );
      })
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      switchMap(() => {
        this.store.dispatch(isFetching({ isFetching: true }));
        return from(this.authService.logout()).pipe(
          map(() => {
            this.store.dispatch(isFetching({ isFetching: false }));
            this.router.navigateByUrl('/');
            return AuthActions.logoutSuccess();
          }),
          catchError((error) => {
            this.store.dispatch(isFetching({ isFetching: false }));
            return of(AuthActions.logoutFailure({ error }))})
        );
      })
    );
  });
}
