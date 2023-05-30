import { createAction, props } from '@ngrx/store';
import { User } from '../../models';
import firebase from 'firebase/compat';

export enum AuthActions {
  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILURE = '[Auth] Logout Failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',

  REGISTRATION = '[Auth] Registration',
  REGISTRATION_SUCCESS = '[Auth] Registration Success',
  REGISTRATION_FAILURE = '[Auth] Registration Failure',

  UPDATE_USER_DATA = '[Auth] Update User Data',

  AUTH_IS_LOADING = '[Auth] Auth Is Loading',
}

//login
export const login = createAction(
  AuthActions.LOGIN,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  AuthActions.LOGIN_SUCCESS,
  props<{ user: User }>()
);

export const loginFailure = createAction(
  AuthActions.LOGIN_FAILURE,
  props<{ error: firebase.FirebaseError }>()
);

//registrate
export const registrate = createAction(
  AuthActions.REGISTRATION,
  props<{ username: string; email: string; password: string }>()
);

export const registrateSuccess = createAction(
  AuthActions.REGISTRATION_SUCCESS,
  props<{ user: User }>()
);

export const registrateFailure = createAction(
  AuthActions.REGISTRATION_FAILURE,
  props<{ error: firebase.FirebaseError }>()
);

//logout
export const logout = createAction(
  AuthActions.LOGOUT
);

export const logoutSuccess = createAction(
  AuthActions.LOGOUT_SUCCESS
);

export const logoutFailure = createAction(
  AuthActions.LOGOUT_FAILURE,
  props<{ error: firebase.FirebaseError }>()
);

//update
export const updateUser = createAction(
  AuthActions.UPDATE_USER_DATA,
  props<{ user: User }>()
);

//is loading
export const authIsLoading =createAction(
  AuthActions.AUTH_IS_LOADING,
  props<{isLoading: boolean}>()
);
