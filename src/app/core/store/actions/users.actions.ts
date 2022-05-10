import { createAction, props } from "@ngrx/store";
import { FirebaseError } from "firebase/app";
import { IUser } from "../../models";

export enum UsersActions {
  GET_USERS = '[Users] Get Users',
  GET_USERS_SUCCESS = '[Users] Get Users Success',
  GET_USERS_FAILURE = '[Users] Get Users Failure',
  GET_USERS_IS_FETCHING = '[Users] Get Users Is Fetching'
}

export const getUsers = createAction(
  UsersActions.GET_USERS
);

export const getUsersSuccess = createAction(
  UsersActions.GET_USERS_SUCCESS,
  props<{users: IUser[]}>()
);

export const getUsersFailure = createAction(
  UsersActions.GET_USERS_FAILURE,
  props<{error: FirebaseError}>()
);

export const getUsersIsFetching = createAction(
  UsersActions.GET_USERS_IS_FETCHING,
  props<{isFetching: boolean}>()
);