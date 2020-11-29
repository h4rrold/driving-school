import produce from "immer";
import { RENDER_ASIDE } from "store/actionsTypes/navigation";
import defaultState from "../defaultState";

/* eslint-disable default-case, no-param-reassign, consistent-return, implicit-arrow-linebreak */
function navigationUiReducer(state = defaultState, action) {
  return produce(state, (draft) => {
    const { type } = action;
    switch (type) {
      case RENDER_ASIDE: {
        const { hasAside } = action.payload;
        draft.hasAside = hasAside;
        break;
      }
    }
  });
}

export default [[RENDER_ASIDE, navigationUiReducer]];
