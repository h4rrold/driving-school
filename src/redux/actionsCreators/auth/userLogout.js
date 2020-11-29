import { createAction } from "redux-actions";
import {
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
} from "redux/actionsTypes/auth/userLogout";

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
