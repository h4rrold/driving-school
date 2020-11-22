import { produce } from "immer";
import { USER_LOGIN_REQUEST } from "redux/actionsTypes/auth/userAuth";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
export const authUserRequestReducer = (state = defaultState, action) => {
  return produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case USER_LOGIN_REQUEST: {
        draft.isLoading = true;
        draft.redirectUrl = null;
        break;
      }
    }
  });
};