import { createSelector } from "reselect";

const getAuthState = (state) => state.auth.auth;

export const getUserDataSelector = createSelector(
  getAuthState,
  (auth) => auth.user
);

export const getUserErrorSelector = createSelector(
  getAuthState,
  (auth) => auth.error
);

export const getUserTokenSelector = createSelector(
  getAuthState,
  (auth) => auth.token
);

export const getAuthRedirectUrl = createSelector(
  getAuthState,
  (auth) => auth.redirectUrl
);
