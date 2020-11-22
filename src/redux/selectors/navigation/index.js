import { createSelector } from "reselect";

const navigationState = (state) => state.navigation;

export const isLockedSelector = createSelector(
  navigationState,
  (state) => state.isLockedSidebar
);

export const isExpandedSelector = createSelector(
  navigationState,
  (state) => state.isExpandedSidebar
);

export const hasAsideNavigationSelector = createSelector(
  navigationState,
  (state) => state.hasAside
);
