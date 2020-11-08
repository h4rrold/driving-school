import handleActions from "redux-actions/es/handleActions";

import getHandlers from "./get";
import postHandlers from "./post";

import defaultState from "./defaultState";

const reducer = handleActions(new Map([]), defaultState);

export default reducer;
