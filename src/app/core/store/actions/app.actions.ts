import { createAction, props } from '@ngrx/store';

export enum AppActions {
  LOGOUT = '[User] Logout',
  LOGIN = '[User] Login',
  LOGIN_SUCCESS = '[User] Login Success',
  LOGIN_FAILURE = '[User] Login Failure',
  REGISTRATION = '[User] Registration',
  REGISTRATION_SUCCESS = '[User] Registration Success',
  REGISTRATION_FAILURE = '[User] Registration Failure',
  IS_FETCHING = '[Common] Is Fetching',
}

export const login = createAction(
  AppActions.LOGIN,
  props<{email: string; password: string }>()
);

export const loginSuccess = createAction(
  AppActions.LOGIN_SUCCESS,
  props<{user: any}>()
);

export const loginFailure = createAction(
  AppActions.LOGIN_FAILURE,
  props<{error: Error}>()
);

export const registrate = createAction(
  AppActions.REGISTRATION,
  props<{credentials: {username: string; email: string; password: string}}>()
);

export const registrateSuccess = createAction(
  AppActions.REGISTRATION_SUCCESS,
  props<{user: any}>()
);

export const registrateFailure = createAction(
  AppActions.REGISTRATION_FAILURE,
  props<{error: Error}>()
);

export const isFetching = createAction(
  AppActions.IS_FETCHING,
  props<{isFetching: boolean}>()
);
