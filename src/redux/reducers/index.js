import { combineReducers } from "redux";
import auth from "redux/reducers/auth";
import navigation from "redux/reducers/navigation";
import { connectRouter } from "connected-react-router";
import history from "../../createHistory";

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth,
  navigation,
});

export default rootReducer;
