import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import navbar from "./components/navbar";
import home from "./components/home";
import about from "./components/about";
import recipePage from "./components/recipePage";
import recipesPage from "./containers/recipesPage";
import recipeInput from "./containers/recipeInput";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <navbar />
          <Route exact path="/" component={home} />
          <Route exact path="/about" component={about} />
          <Route exact path="/recipe/:id" component={recipePage} />
          <Route exact path="/recipes" component={recipesPage} />
          <Route exact path="/recipe/new" component={recipeInput} />
        </div>
      </Router>
    );
  }
}

export default App;
