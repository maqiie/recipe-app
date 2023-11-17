import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import { IoMdHome } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const APP_ID = "b2b0bbec";
const APP_KEY = "b664e2d371d0f19f906369740064ff38";
const API_URL = "https://api.edamam.com/search";

class Home extends Component {
  state = {
    searchString: "",
    recipes: [],
    favorites: [],
  };

  handleSearchChange = (e) => {
    this.setState({ searchString: e.target.value });
  };

  handleSearchSubmit = async (e) => {
    e.preventDefault();
    const { searchString } = this.state;

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: searchString,
          app_id: APP_ID,
          app_key: APP_KEY,
        },
      });

      this.setState({ recipes: response.data.hits });
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  handleAddToFavorites = (recipe) => {
    this.setState((prevState) => ({
      favorites: [...prevState.favorites, recipe],
    }));
  };

  render() {
    const { searchString, recipes, favorites } = this.state;

    return (
      <div>
        <div>
          <section>
            <nav>
              <div className="button-container">
                <button className="button">
                  <IoMdHome />
                </button>

                <form onSubmit={this.handleSearchSubmit} className="button">
                  <input
                    type="text"
                    name="text"
                    value={searchString}
                    onChange={this.handleSearchChange}
                    placeholder="Search 'Recipe'"
                    className="input"
                  />
                </form>

                <button className="button">
                  <FaHeart />
                </button>

                <button className="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    className="icon"
                  >
                    <circle r="1" cy="21" cx="9"></circle>
                    <circle r="1" cy="21" cx="20"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
              </div>
            </nav>
          </section>

          <div className="recipe-list">
            {recipes.map((recipe) => (
              <div key={recipe.recipe.label} className="recipe-card">
                <img
                  src={recipe.recipe.image}
                  alt={recipe.recipe.label}
                  className="recipe-image"
                />
                <h3>{recipe.recipe.label}</h3>
                <p>Source: {recipe.recipe.source}</p>
                <p>Yield: {recipe.recipe.yield}</p>
                <p>Diet Labels: {recipe.recipe.dietLabels.join(", ")}</p>
                <p>Health Labels: {recipe.recipe.healthLabels.join(", ")}</p>
                <p>Ingredients: {recipe.recipe.ingredientLines.join(", ")}</p>
                <button onClick={() => this.handleAddToFavorites(recipe)}>
                  Add to Favorites
                </button>
              </div>
            ))}
          </div>

          <div className="favorites-list">
            <h2>Favorites</h2>
            {favorites.map((favRecipe) => (
              <div key={favRecipe.recipe.label} className="recipe-card">
                <img
                  src={favRecipe.recipe.image}
                  alt={favRecipe.recipe.label}
                  className="recipe-image"
                />
                <h3>{favRecipe.recipe.label}</h3>
                <p>Source: {favRecipe.recipe.source}</p>
                <p>Yield: {favRecipe.recipe.yield}</p>
                <p>Diet Labels: {favRecipe.recipe.dietLabels.join(", ")}</p>
                <p>Health Labels: {favRecipe.recipe.healthLabels.join(", ")}</p>
                <p>Ingredients: {favRecipe.recipe.ingredientLines.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
