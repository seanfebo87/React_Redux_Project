import React from "react";

const mapStateToProps = (state, ownProps) => {
  const recipe = state.recipes.find(
    recipe => String(recipe.id) === ownProps.match.params.id
  );
  if (recipe) {
    return { recipe: recipe };
  } else {
    return { recipe: {} };
  }
};
