import { produce } from "immer";
import { USER_LOGIN_FAILURE } from "redux/actionsTypes/auth/userAuth";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
export const authUserFailureReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case USER_LOGIN_FAILURE: {
        const error = action.payload;
        draft.isLoading = false;
        draft.auth.user = null;
        draft.auth.error = error;
        draft.token = null;
        draft.redirectUrl = null;
        break;
      }
    }
  });
};
