import { createAction, props } from "@ngrx/store";
import { FirebaseError } from "firebase/app";
import { User } from "../../models";

export enum AdminActions {
  GET_ADMIN = '[Admin] Get Users',
  GET_ADMIN_SUCCESS = '[Admin] Get Users Success',
  GET_ADMIN_FAILURE = '[Admin] Get Users Failure',
}

export const getUsers = createAction(
  AdminActions.GET_ADMIN
);

export const getUsersSuccess = createAction(
  AdminActions.GET_ADMIN_SUCCESS,
  props<{ users: User[] }>()
);

export const getUsersFailure = createAction(
  AdminActions.GET_ADMIN_FAILURE,
  props<{ error: FirebaseError }>()
);
