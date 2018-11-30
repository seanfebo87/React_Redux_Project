import * as types from "./actionTypes";

function loadRecipes(recipes) {
  return { type: types.LOAD_RECIPE, recipes };
}

function sortRecipes(recipes) {
  return { type: types.SORT_RECIPE, recipes };
}

export function loadRecipe() {
  return function(dispatch) {
    return fetch("https://cookbookrailsapi.herokuapp.com/recipes")
      .then(response => response.json())
      .then(recipes => {
        dispatch(loadRecipes(recipes));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function sortRecipe() {
  return function(dispatch) {
    return fetch("https://cookbookrailsapi.herokuapp.com/recipes")
      .then(response => response.json())
      .then(recipes => {
        dispatch(sortRecipes(recipes));
      })
      .catch(error => {
        throw error;
      });
  };
}

function createRecipes(recipe) {
  return { type: types.CREATE_RECIPE, recipe };
}

export function createRecipe(recipe) {
  return function(dispatch) {
    return fetch("https://cookbookrailsapi.herokuapp.com/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify((recipe: recipe))
    })
      .then(response => response.json())
      .then(recipe => {
        dispatch(createRecipes(recipe));
      })
      .catch(error => {
        throw error;
      });
  };
}
