import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialStore = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*
    const composeEnhancers = compose;
*/

const store = createStore(
  rootReducer,
  initialStore,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
