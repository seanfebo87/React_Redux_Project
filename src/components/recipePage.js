import React from "react";
import { connect } from "react-redux";

const RecipePage = ({ recipe }) => {
    return (
      <section class="hero is-light is-fullheight is-bold">
      <div class="hero-head">
          <br />
      <div class="hero-body">
        <div class="box">
        <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src={recipe.picture} />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{recipe.name}</strong>
              <br />
              {recipe.ingredients}
              <br />
              {recipe.instructions}
            </p>
          </div>
        </div>
      </article>
      </div>
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
