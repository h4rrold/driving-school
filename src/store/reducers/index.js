import { combineReducers } from "redux";
import auth from "store/reducers/auth";
import navigation from "store/reducers/navigation";
import { connectRouter } from "connected-react-router";
import history from "../../createHistory";

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth,
  navigation,
});

export default rootReducer;
