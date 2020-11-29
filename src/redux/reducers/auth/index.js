import handleActions from "redux-actions/es/handleActions";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginHandlers from "./login";
import registerHandlers from "./register";
import defaultState from "./defaultState";

const reducer = handleActions(
  new Map([...loginHandlers, ...registerHandlers]),
  defaultState
);
const persistConfig = {
  key: "auth",
  storage,
  whiteList: ["user", "token"],
};

export default persistReducer(persistConfig, reducer);
