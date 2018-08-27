import { combineReducers } from "redux";
import recipes from "./recipeReducer";

const mainReducer = combineReducers({
  recipes: recipes
});

export default mainReducer;
