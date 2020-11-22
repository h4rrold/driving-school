import { produce } from "immer";
import { USER_LOGIN_SUCCESS } from "redux/actionsTypes/auth/userAuth";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
export const authUserSuccessReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case USER_LOGIN_SUCCESS: {
        const user = action.payload;
        draft.isLoading = false;
        draft.auth.user = user;
        draft.auth.error = null;
        draft.token = user?.api_token;
        break;
      }
      case "REDIRECT_AFTER_LOGIN": {
        debugger;
        draft.redirectUrl = action.payload;
        break;
      }
    }
  });
};
