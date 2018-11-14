import React from "react";
import { Link } from "react-router-dom";

class RecipeCard extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    votes: this.props.recipe.votes
  }
}
  
  voteRecipe = (id) => {
  this.setState({votes: this.props.recipe.votes += 1})
  id = this.props.recipe.id
    return fetch(`/recipes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: id
    })
  };

 render() {
  return (
    <div>
    <Link class="box" to={"/recipe/" + this.props.recipe.id}>
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img src={this.props.recipe.picture} />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{this.props.recipe.name}</strong>
              <br />
              {this.props.recipe.ingredients}
            </p>
          </div>
        </div>
      </article>
    </Link>
    <button onClick={this.voteRecipe}>VOTE</button>
    <p>{this.state.votes}</p>
    </div>
  );
};
}
export default RecipeCard;
