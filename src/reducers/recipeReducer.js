import * as types from "../actions/actionTypes";

export default function RecipeReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_RECIPE:
      return action.recipes;

    case types.CREATE_RECIPE:
      return [...state, Object.assign({}, action.recipe)];

    default:
      return state;
  }
}
