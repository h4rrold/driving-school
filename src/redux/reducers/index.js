import { combineReducers } from "redux";
import userReducer from "redux/reducers/auth";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
