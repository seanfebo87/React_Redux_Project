import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav class="navbar is-fixed-top">
      <div class="container">
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <Link class="navbar-item" to="/">
              home
            </Link>
            <Link class="navbar-item" to="/about">
              about
            </Link>
            <Link class="navbar-item" to="/recipes">
              recipes
            </Link>
            <Link class="navbar-item" to="/recipe/new">
              add recipe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
