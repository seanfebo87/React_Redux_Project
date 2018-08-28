import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recipeActions from "../actions/recipeActions";
import RecipeForm from "../components/recipeForm";

class recipeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: Object.assign({}, props.recipe)
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    let newRecipe = Object.assign({}, this.state.recipe, { [name]: value });
    return this.setState({ recipe: newRecipe });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.actions
      .createRecipe(this.state.recipe)
      .then(() => this.saveRecipe());
  };

  saveRecipe = () => {
    this.props.history.push("/recipes");
  };

  render() {
    return (
      <section class="hero is-light is-fullheight is-bold">
        <div class="hero-body">
          <RecipeForm
            type="text"
            name="name"
            value={this.state.recipe.name}
            placeholder="Name"
            onChange={this.handleOnChange}
          />
          <RecipeForm
            type="text"
            name="ingredients"
            value={this.state.recipe.ingredients}
            placeholder="Ingredients"
            onChange={this.handleOnChange}
          />
          <RecipeForm
            type="text"
            name="instructions"
            value={this.state.recipe.instructions}
            placeholder="Instructions"
            onChange={this.handleOnChange}
          />
          <RecipeForm
            type="text"
            name="picture"
            value={this.state.recipe.picture}
            placeholder="Picture"
            onChange={this.handleOnChange}
          />
          <input type="submit" onSubmit={this.handleOnSubmit} />
        </div>
      </section>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let recipe = { name: "", instructions: "", ingredients: "", picture: "" };

  return {
    recipe: recipe
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeInput);
