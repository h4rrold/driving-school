import { createSelector } from "reselect";

export const getUserDataSelector = createSelector(
  (state) => state.user,
  (user) => user
);
