import { combineReducers } from "redux";
import RecipeReducer from "./recipeReducer";

const mainReducer = combineReducers({
  recipes: RecipeReducer
});

export default mainReducer;
