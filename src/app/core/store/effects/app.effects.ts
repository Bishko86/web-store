import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { UserDto } from '../../dtos/user.dto';
import { UserRole } from '../../enums/user-role.enum';
import { AuthService } from '../../services/auth.service';
import * as ActionCreators from '../actions/app.actions';
import { IAppState } from '../state/app.state';

@Injectable()
export class AppEffects {
  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionCreators.login),
      switchMap(({email, password}) => {
        return from(this.authService.login({email, password})).pipe(
          map((data) => {
            const userDto = data.user?.multiFactor;
            console.log(data);
            return ActionCreators.loginSuccess({
              user: new UserDto(userDto)
            });
          }),
          catchError((error) => of(ActionCreators.loginFailure({ error })))
        );
      })
    );
  });

  registrate$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ActionCreators.registrate),
      switchMap((action) => {
        return from(this.authService.registrate(action.credentials)).pipe(
          map((user) => {
            return ActionCreators.registrateSuccess({user: new UserDto(user)})}),
          catchError((error) => of(ActionCreators.registrateFailure({ error })))
        );
      })
    );
  });
}
