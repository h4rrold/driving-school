import { createSelector } from "reselect";

const getAuthState = (state) => state.auth;

export const getUserDataSelector = createSelector(
  getAuthState,
  (auth) => auth.auth.user
);

export const getUserErrorSelector = createSelector(
  getAuthState,
  (auth) => auth.auth.error
);

export const getAuthIsLoadingSelector = createSelector(
  getAuthState,
  (auth) => auth.isLoading
);

export const getUserTokenSelector = createSelector(
  getAuthState,
  (auth) => auth.token
);
