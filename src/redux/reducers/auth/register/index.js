import {
  registerUserRequest,
  registerUserFailure,
  registerUserSuccess,
} from "redux/actionsCreators/auth/userRegister";
import { registerUserSuccessReducer } from "./success";
import { registerUserRequestReducer } from "./request";
import { registerUserFailureReducer } from "./failed";

export default [
  [registerUserRequest, registerUserRequestReducer],
  [registerUserSuccess, registerUserSuccessReducer],
  [registerUserFailure, registerUserFailureReducer],
];
