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

export const getRouterSelector = createSelector(
  (state) => state.router,
  (router) => router
);

export const routerLocationSelector = createSelector(
  getRouterSelector,
  (router) => router.location
);

export const routerLocationStateSelector = createSelector(
  routerLocationSelector,
  (location) => location.state
);

export const routerActionSelector = createSelector(
  getRouterSelector,
  (router) => router.action
);

export default getRouterSelector;
