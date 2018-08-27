import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recipeActions from "../actions/recipeActions";
import recipeForm from "../components/recipeForm";

class RecipeInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipe: Object.assign({}, props.recipe),
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target
    let newRecipe = Object.assign({}, this.state.recipe, { [name]: value })
    return this.setState({ recipe: newRecipe })

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
