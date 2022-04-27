import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { User } from '../../models';
import { AuthService } from '../../services/auth.service';
import * as UserActionCreators from '../actions/user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActionCreators.login),
      switchMap(({email, password}) => {
        return from(this.authService.login({email, password})).pipe(
          map((data) => {
            const userDto = data?.user;
            console.log('Login',new User(userDto));
            return UserActionCreators.loginSuccess({
              user: new User(userDto)
            });
          }),
          catchError((error) => of(UserActionCreators.loginFailure({ error })))
        );
      })
    );
  });

  registrate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActionCreators.registrate),
      switchMap((action) => {
        const {username, email, password} = action;
        return from(this.authService.registrate({username, email, password})).pipe(
          map((user) => {
            return UserActionCreators.registrateSuccess({user: new User(user)})}),
          catchError((error) => of(UserActionCreators.registrateFailure({ error })))
        );
      })
    );
  });
}
