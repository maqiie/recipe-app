
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecipeComponent.css'; // Import CSS file for styling

const RecipeComponent = () => {
  const [recipeData, setRecipeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]); // State for search suggestions
  const [servings, setServings] = useState(1); // State for number of servings

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }

    const fetchRecipe = async () => {
      const appId = 'b2b0bbec';
      const appKey = 'b664e2d371d0f19f906369740064ff38';

      setLoading(true);

      try {
        const response = await axios.get(`https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${appKey}&to=1`);
        if (response.data.hits.length > 0) {
          setRecipeData(response.data.hits[0].recipe);
          setError(null);
        } else {
          setRecipeData(null);
          setError('Recipe not found');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.elements.search.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setSuggestions([]);
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Fetch suggestions based on input query (you need to implement this)
    // For example, you can fetch suggestions from an API or use a static list
    // setSuggestions(fetchSuggestions(query));
  };

  const handleServingsChange = (e) => {
    const newServings = parseInt(e.target.value);
    setServings(newServings);
  };

  // Function to calculate the total nutritional information for the recipe
  const calculateTotalNutrition = () => {
    let totalCalories = 0;
    let totalProteins = 0;
    let totalFats = 0;
    let totalCarbs = 0; // Assuming carbohydrates
    let totalVitamins = 0; // Assuming vitamins

    if (recipeData) {
      recipeData.ingredientLines.forEach((ingredient) => {
        // Here, you would calculate the nutritional information for each ingredient
        // based on its quantity and nutritional value
        // For simplicity, let's assume each ingredient has fixed nutritional values per unit (e.g., per 100g)
        // and calculate the total nutritional values based on the servings

        // Example calculation:
        // Assuming the nutritional values per 100g for each nutrient
        const caloriesPer100g = 100;
        const proteinsPer100g = 10;
        const fatsPer100g = 5;
        const carbsPer100g = 20;
        const vitaminsPer100g = 50;

        // Calculate the nutritional values for the ingredient based on its quantity in the recipe
        const quantity = parseFloat(ingredient.split(' ')[0]); // Assuming quantity is the first part of the ingredient string
        totalCalories += (caloriesPer100g / 100) * quantity * servings;
        totalProteins += (proteinsPer100g / 100) * quantity * servings;
        totalFats += (fatsPer100g / 100) * quantity * servings;
        totalCarbs += (carbsPer100g / 100) * quantity * servings;
        totalVitamins += (vitaminsPer100g / 100) * quantity * servings;
      });
    }

    return { totalCalories, totalProteins, totalFats, totalCarbs, totalVitamins };
  };

  const totalNutrition = calculateTotalNutrition();

  return (
    <div className="recipe-container">
      <header>
        <h1>Recipe Search</h1>
      </header>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="Search for a recipe..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      {recipeData && (
        <>
          <h2 className="recipe-title">{recipeData.label}</h2>
          <img src={recipeData.image} alt={recipeData.label} className="recipe-image" />
          <h3 className="section-title">Ingredients:</h3>
          <ul className="ingredient-list">
            {recipeData.ingredientLines.map((ingredient, index) => (
              <li key={index} className="ingredient">{ingredient}</li>
            ))}
          </ul>
          <h3 className="section-title">Instructions:</h3>
          <ol className="instruction-list">
            {recipeData.recipeSteps ? recipeData.recipeSteps.map((step, index) => (
              <li key={index} className="instruction">{step}</li>
            )) : (
              <li className="instruction">No instructions available</li>
            )}
          </ol>
          {/* Meal Calculator */}
          <div className="meal-calculator">
            <h3>Meal Calculator</h3>
            <label htmlFor="servings">Number of Servings:</label>
            <input
              type="number"
              id="servings"
              name="servings"
              min="1"
              value={servings}
              onChange={handleServingsChange}
            />
            <h3>Total Nutrition for {servings} Serving(s):</h3>
            <p>Total Calories: {totalNutrition.totalCalories.toFixed(2)}</p>
            <p>Total Proteins: {totalNutrition.totalProteins.toFixed(2)}</p>
            <p>Total Fats: {totalNutrition.totalFats.toFixed(2)}</p>
            <p>Total Carbs: {totalNutrition.totalCarbs.toFixed(2)}</p>
            <p>Total Vitamins: {totalNutrition.totalVitamins.toFixed(2)}</p>
          </div>
        </>
      )}
      <footer>
        <p>&copy; 2024 Recipe App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RecipeComponent;
