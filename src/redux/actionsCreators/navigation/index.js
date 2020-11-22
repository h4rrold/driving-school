import { createAction } from "redux-actions";
import {
  COLLAPSE_NAVIGATION,
  COLLAPSE_NAVIGATION_REQUEST,
  EXPAND_NAVIGATION,
  EXPAND_NAVIGATION_REQUEST,
  LOCK_NAVIGATION,
  RENDER_ASIDE,
  UNLOCK_NAVIGATION,
} from "redux/actionsTypes/navigation";

export const expandNavigation = createAction(EXPAND_NAVIGATION, () => ({
  isExpandedSidebar: true,
}));

export const expandNavigationRequest = createAction(
  EXPAND_NAVIGATION_REQUEST,
  (ref) => ({
    ref,
  })
);

export const collapseNavigation = createAction(COLLAPSE_NAVIGATION, () => ({
  isExpandedSidebar: false,
}));

export const collapseNavigationRequest = createAction(
  COLLAPSE_NAVIGATION_REQUEST,
  () => ({
    isExpandedSidebar: false,
  })
);

export const lockNavigation = createAction(LOCK_NAVIGATION, () => ({
  isLockedSidebar: true,
}));

export const unlock = createAction(UNLOCK_NAVIGATION, () => ({
  isLockedSidebar: false,
}));

export const renderAsideNavigation = createAction(RENDER_ASIDE, (hasAside) => ({
  hasAside,
}));
