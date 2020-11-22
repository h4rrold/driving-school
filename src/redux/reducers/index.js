import { combineReducers } from "redux";
import auth from "redux/reducers/auth";
import navigation from "redux/reducers/navigation";

const rootReducer = combineReducers({
  auth,
  navigation,
});

export default rootReducer;
