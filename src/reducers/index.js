import { combineReducers } from "redux";
import recipes from "./RecipeReducer";

const mainReducer = combineReducers({
  recipes: recipes
});

export default mainReducer;
