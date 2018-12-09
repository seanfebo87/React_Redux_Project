import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as recipeActions from "../actions/recipeActions";
import RecipeForm from "../components/recipeForm";

class RecipeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: Object.assign({}, props.recipe),
      saving: false
    };
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    let newRecipe = Object.assign({}, this.state.recipe, { [name]: value });
    return this.setState({ recipe: newRecipe });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.setState({saving: true})
    this.props.actions
      .createRecipe(this.state.recipe)
      .then(() => this.saveRecipe())
      .catch((error) => {
        this.setState({saving: false})
      })
  };

  saveRecipe = () => {
    this.setState({saving: false})
    this.props.history.push("/recipes");
  };

  render(){

    return (
    
   <form onSubmit={this.handleOnSubmit}>
    <br />
    <br />
    <br />
      <RecipeForm classs="input" type="text" name="name" value={this.state.recipe.name} placeholder="Name" onChange={this.handleOnChange} />
      <RecipeForm classs="input" type="text" name="picture" value={this.state.recipe.picture} placeholder="Picture" onChange={this.handleOnChange} />
      <RecipeForm classs="input" type="text" name="url" value={this.state.recipe.url} placeholder="URL" onChange={this.handleOnChange} />
      <input type="submit" />
      </form>
     
    )
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
