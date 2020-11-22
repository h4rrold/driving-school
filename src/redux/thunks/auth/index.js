import {
  loginUserRequest,
  loginUserSuccess,
  logoutUserFailure,
  redirectAfterLogin,
} from "redux/actionsCreators/auth/userLogin";
import { loginRequest } from "api";

function loginUserRequestThunk({ email, password }) {
  return async (dispatch) => {
    dispatch(loginUserRequest());
    try {
      const userData = await loginRequest({ email, password });
      if (userData) {
        dispatch(loginUserSuccess(userData));
        dispatch(redirectAfterLogin("/cat"));
      }
    } catch (e) {
      dispatch(logoutUserFailure(e));
    }
  };
}

export { loginUserRequestThunk };
