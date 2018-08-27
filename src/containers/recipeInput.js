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
