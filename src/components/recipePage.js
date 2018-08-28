import React from "react";
import { connect } from "react-redux";

const RecipePage = ({ recipe }) => {
  return (
    <section class="hero is-light is-fullheight is-bold">
      <div class="hero-body">
        <div class="container">
          <h3>{recipe.instructions}</h3>
        </div>
      </div>
    </section>
  );
};
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

export default connect(mapStateToProps)(RecipePage);
