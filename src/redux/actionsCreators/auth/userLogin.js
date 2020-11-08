import { createAction } from "redux-actions";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
} from "redux/actionsTypes/auth/userAuth";

export const loginUserRequest = createAction(
  USER_LOGIN_REQUEST,
  (payload) => payload
);
export const loginUserSuccess = createAction(
  USER_LOGIN_SUCCESS,
  (payload) => payload
);
export const loginUserFailure = createAction(
  USER_LOGIN_FAILURE,
  (payload) => payload
);

export const logoutUserRequest = createAction(
  USER_LOGOUT_REQUEST,
  (payload) => payload
);

export const logoutUserSuccess = createAction(
  USER_LOGOUT_SUCCESS,
  (payload) => payload
);

export const logoutUserFailure = createAction(
  USER_LOGOUT_FAILURE,
  (payload) => payload
);
