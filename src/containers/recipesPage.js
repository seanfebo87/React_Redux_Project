import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import recipeCard from "../components/recipeCard";
import * as recipeActions from "../actions/recipeActions";
import { bindActionCreators } from "redux";

class RecipesPage extends Component {

  componentDidMount() {
    this.props.actions.loadRecipe();
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
)(recipesPage);
