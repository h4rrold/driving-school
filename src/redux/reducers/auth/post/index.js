import {
  loginUserRequest,
  loginUserSuccess,
  logoutUserFailure,
  redirectAfterLogin,
} from "redux/actionsCreators/auth/userLogin";
import { authUserSuccessReducer } from "./success";
import { authUserRequestReducer } from "./request";
import { authUserFailureReducer } from "./failed";

export default [
  [loginUserRequest, authUserRequestReducer],
  [loginUserSuccess, authUserSuccessReducer],
  [logoutUserFailure, authUserFailureReducer],
  [redirectAfterLogin, authUserSuccessReducer],
];
