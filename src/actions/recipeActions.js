import * as types from "./actionTypes";

function loadRecipes(recipes) {
  return { type: types.LOAD_RECIPE, recipes };
}

export function loadRecipe() {
  return function(dispatch) {
    return fetch("/recipes")
      .then(response => response.json())
      .then(recipes => {
        dispatch(loadRecipes(recipes));
      })
      .catch(error => {
        throw error;
      });
  };
}
