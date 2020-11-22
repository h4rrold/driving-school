import handleActions from "redux-actions/es/handleActions";

import renderHandlers from "./ui/renderAside";
import sidebarUIHandlers from "./ui/sidebar";

import defaultState from "./defaultState";

const reducer = handleActions(
  new Map([...renderHandlers, ...sidebarUIHandlers]),
  defaultState
);

export default reducer;
