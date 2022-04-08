import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import * as ActionCreators from '../actions/app.actions';

@Injectable()
export class AppEffects {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionCreators.login),
      switchMap((action) => {
        return this.authService.login(action.credentials).pipe(
          map(user => ActionCreators.loginSuccess({ user })),
          catchError(error => of(ActionCreators.loginFailure({ error })))
        );
      })
    );
  });

  registrate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionCreators.registrate),
      switchMap((action) => {
        return this.authService.registrate(action.credentials).pipe(
          map(user =>  ActionCreators.registrateSuccess({ user })),
          catchError(error => of(ActionCreators.registrateFailure({ error })))
        );
      })
    );
  });
}
