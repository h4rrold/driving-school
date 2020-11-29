import { produce } from "immer";
import {
  COLLAPSE_NAVIGATION,
  COLLAPSE_NAVIGATION_REQUEST,
  EXPAND_NAVIGATION_REQUEST,
  EXPAND_NAVIGATION,
  LOCK_NAVIGATION,
  UNLOCK_NAVIGATION,
} from "store/actionsTypes/navigation";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
function sidebarUIReducer(state = defaultState, action) {
  return produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case COLLAPSE_NAVIGATION:
        draft.isExpandedSidebar = action.payload.isExpandedSidebar;
        break;
      case COLLAPSE_NAVIGATION_REQUEST:
        draft.ref = action.payload.ref;
        break;
      case EXPAND_NAVIGATION:
        draft.isExpandedSidebar = action.payload.isExpandedSidebar;
        break;
      case EXPAND_NAVIGATION_REQUEST:
        draft.ref = action.payload.ref;
        break;
      case LOCK_NAVIGATION:
        draft.isLockedSidebar = action.payload.isLockedSidebar;
        break;
      case UNLOCK_NAVIGATION:
        draft.isLockedSidebar = action.payload.isLockedSidebar;
        break;
    }
  });
}

export default [
  [COLLAPSE_NAVIGATION, sidebarUIReducer],
  [COLLAPSE_NAVIGATION_REQUEST, sidebarUIReducer],
  [EXPAND_NAVIGATION_REQUEST, sidebarUIReducer],
  [EXPAND_NAVIGATION, sidebarUIReducer],
  [LOCK_NAVIGATION, sidebarUIReducer],
  [UNLOCK_NAVIGATION, sidebarUIReducer],
];
