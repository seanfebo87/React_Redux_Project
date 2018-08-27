import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import mainReducer from "../reducers/index";

export default function maketore(initialState) {
  return createStore(mainReducer, initialState, applyMiddleware(thunk));
}
