import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recipeActions from "../actions/recipeActions";
import recipeForm from "../components/recipeForm";

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
