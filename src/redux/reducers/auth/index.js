import handleActions from "redux-actions/es/handleActions";

import postHandlers from "./post";

import defaultState from "./defaultState";

const reducer = handleActions(new Map([...postHandlers]), defaultState);

export default reducer;
