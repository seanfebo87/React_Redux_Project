import React from "react";
import { Link } from "react-router-dom";

const recipeCard = ({ recipe }) => {
  return (
    <Link class="box" to={"/recipe/" + recipe.id}>
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
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default recipeCard;
