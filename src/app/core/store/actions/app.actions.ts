import { createAction, props } from '@ngrx/store';

export enum AppActions {
  LOGOUT = '[Auth] Logout',
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  REGISTRATION = '[Auth] Registration',
  REGISTRATION_SUCCESS = '[Auth] Registration Success',
  REGISTRATION_FAILURE = '[Auth] Registration Failure',
  IS_FETCHING = '[Auth] Auth Is Fetching',
}

export const login = createAction(
  AppActions.LOGIN,
  props<{credentials: {email: string; password: string; } }>()
);

export const loginSuccess = createAction(
  AppActions.LOGIN_SUCCESS,
  props<{user:{}}>()
);

export const loginFailure = createAction(
  AppActions.LOGIN_SUCCESS,
  props<{error:{}}>()
);

export const registrate = createAction(
  AppActions.REGISTRATION,
  props<{credentials: {username: string; email: string; password: string}}>()
);

export const registrateSuccess = createAction(
  AppActions.REGISTRATION_SUCCESS,
  props<{user: {}}>()
);

export const registrateFailure = createAction(
  AppActions.REGISTRATION_FAILURE,
  props<{error: {}}>()
);

export const isFetching = createAction(
  AppActions.IS_FETCHING,
  props<{isFetching: boolean}>()
);
