import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RecipeCard from "../components/recipeCard";
import * as recipeActions from "../actions/recipeActions";
import { bindActionCreators } from "redux";

class RecipesPage extends Component {
  componentDidMount() {
    this.props.actions.loadRecipe();
  }

  render() {
    return (
      <section class="hero is-light is-fullheight is-bold">
        <div class="hero-head">
          <br />
          <div class="hero-body">
            {this.props.recipes.length > 0 &&
              this.props.recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            <br />
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(recipeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesPage);
