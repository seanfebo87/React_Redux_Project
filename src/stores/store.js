import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "../reducers/index";

export default function makeStore() {
  return createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));
}
