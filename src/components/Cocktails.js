
import React, { useState, useEffect } from "react";
import "./Cocktails.css";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCocktailsByFirstLetter("a");
  }, []);

  const fetchCocktailsByName = async (name) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error("Error fetching cocktails by name:", error);
    }
  };

  const fetchCocktailsByFirstLetter = async (letter) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error("Error fetching cocktails by first letter:", error);
    }
  };

  const fetchCocktailDetailsById = async (id) => {
    try {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      setSelectedCocktail(data.drinks[0] || null);
    } catch (error) {
      console.error("Error fetching cocktail details:", error);
    }
  };
  const fetchRandomCocktail = async () => {
    try {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error("Error fetching random cocktail:", error);
    }
  };
  
  const fetchPopularCocktails = async () => {
    try {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/popular.php");
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error("Error fetching popular cocktails:", error);
    }
  };
  
  const fetchLatestCocktails = async () => {
    try {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/latest.php");
      const data = await response.json();
      setCocktails(data.drinks || []);
    } catch (error) {
      console.error("Error fetching latest cocktails:", error);
    }
  };
  
  const getIngredients = (cocktail) => {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
      if (ingredient && measure) {
        ingredients.push(`${ingredient} - ${measure}`);
      } else if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  };
  

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchCocktailsByName(searchTerm);
  };

  const handleCocktailClick = (id) => {
    fetchCocktailDetailsById(id);
  };
   const handleClosePopup = () => {
    setSelectedCocktail(null);
  };

//   return (
//     <div className="cocktails-container">
//       <h1 className="cocktails-title">Cocktails</h1>
//       <div className="cocktails-actions">
//         <form onSubmit={handleSearchSubmit}>
//           <input
//             type="text"
//             placeholder="Search by name..."
//             value={searchTerm}
//             onChange={handleSearchInputChange}
//           />
//           <button type="submit">Search</button>
//         </form>
//         {/* Add other action buttons here */}
//       </div>
//       <div className="cocktails-grid">
//         {cocktails.map((cocktail) => (
//           <div key={cocktail.idDrink} className="cocktail-item" onClick={() => handleCocktailClick(cocktail.idDrink)}>
//             <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktail-image" />
//             <h3 className="cocktail-name">{cocktail.strDrink}</h3>
//             <p className="cocktail-category">{cocktail.strCategory}</p>
//           </div>
//         ))}
//       </div>
//       {selectedCocktail && (
//         <div className="cocktail-details">
//           <h2>{selectedCocktail.strDrink}</h2>
//           <p>Category: {selectedCocktail.strCategory}</p>
//           <p>Ingredients:</p>
//           <ul>
//             {Object.keys(selectedCocktail)
//               .filter((key) => key.includes("Ingredient") && selectedCocktail[key])
//               .map((key) => (
//                 <li key={key}>
//                   {selectedCocktail[key]} - {selectedCocktail[`strMeasure${key.slice(-1)}`]}
//                 </li>
//               ))}
//           </ul>
//           <p>Instructions: {selectedCocktail.strInstructions}</p>
//           {/* Add more details as needed */}
//         </div>
//       )}
//     </div>
//   );
return (
    <div className="cocktails-container">
      <h1 className="cocktails-title">Cocktails</h1>
      <div className="cocktails-actions">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <button type="submit">Search</button>
        </form>
        <button onClick={fetchRandomCocktail}>Random Cocktail</button>
        <button onClick={fetchPopularCocktails}>Popular Cocktails</button>
        <button onClick={fetchLatestCocktails}>Latest Cocktails</button>
        <button onClick={() => fetchCocktailsByFirstLetter("a")}>Cocktails Starting with 'A'</button>
      </div>
      <div className="cocktails-grid">
        {cocktails.map((cocktail) => (
          <div key={cocktail.idDrink} className="cocktail-item" onClick={() => handleCocktailClick(cocktail.idDrink)}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktail-image" />
            <h3 className="cocktail-name">{cocktail.strDrink}</h3>
            <p className="cocktail-category">{cocktail.strCategory}</p>
          </div>
        ))}
      </div>
      {selectedCocktail && (
        <div className="cocktail-popup-overlay" onClick={handleClosePopup}>
          <div className="cocktail-popup">
            <span className="cocktail-popup-close" onClick={handleClosePopup}>&times;</span>
            <h2>{selectedCocktail.strDrink}</h2>
            <p>Category: {selectedCocktail.strCategory}</p>
            <p>Ingredients:</p>
            <ul>
              {getIngredients(selectedCocktail).map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <p>Instructions: {selectedCocktail.strInstructions}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
  
  
};

export default Cocktails;
