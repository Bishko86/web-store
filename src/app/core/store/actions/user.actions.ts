import { createAction, props } from '@ngrx/store';
import { IUser } from '../../models';
import firebase from 'firebase/compat';

export enum UserActions {
  LOGOUT = '[User] Logout',
  LOGOUT_SUCCESS = '[User] Logout Success',
  LOGOUT_FAILURE = '[User] Logout Failure',
  LOGIN = '[User] Login',
  LOGIN_SUCCESS = '[User] Login Success',
  LOGIN_FAILURE = '[User] Login Failure',
  REGISTRATION = '[User] Registration',
  REGISTRATION_SUCCESS = '[User] Registration Success',
  REGISTRATION_FAILURE = '[User] Registration Failure',
  UPDATE_USER_DATA = '[User} Update User Data',
}

export const updateUser = createAction(
  UserActions.UPDATE_USER_DATA,
  props<{ user: IUser }>()
)

export const login = createAction(
  UserActions.LOGIN,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  UserActions.LOGIN_SUCCESS,
  props<{ user: IUser }>()
);

export const loginFailure = createAction(
  UserActions.LOGIN_FAILURE,
  props<{ error: firebase.FirebaseError }>()
);

export const registrate = createAction(
  UserActions.REGISTRATION,
  props<{ username: string; email: string; password: string }>()
);

export const registrateSuccess = createAction(
  UserActions.REGISTRATION_SUCCESS,
  props<{ user: IUser }>()
);

export const registrateFailure = createAction(
  UserActions.REGISTRATION_FAILURE,
  props<{ error: firebase.FirebaseError }>()
);

export const logout = createAction(
  UserActions.LOGOUT
);

export const logoutSuccess = createAction(
  UserActions.LOGOUT_SUCCESS
);

export const logoutFailure = createAction(
  UserActions.LOGOUT_FAILURE,
  props<{ error: firebase.FirebaseError }>()
);
