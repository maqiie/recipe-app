
import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaUserCircle } from "react-icons/fa";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [categories, setCategories] = useState([]);
  const [mealOfTheDay, setMealOfTheDay] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryMeals, setCategoryMeals] = useState([]);

  useEffect(() => {
    fetchUserData();
    fetchMealCategories();
    fetchRandomMeal();
    getTimeOfDay();
  }, []);

  const fetchUserData = () => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUserName(data.userName || "User"))
      .catch((error) => console.error("Error fetching user data:", error));
  };

  const fetchMealCategories = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories || []))
      .catch((error) =>
        console.error("Error fetching meal categories:", error)
      );
  };

  const fetchRandomMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        const randomMeal = data.meals ? data.meals[0] : {};
        setMealOfTheDay(randomMeal);
      })
      .catch((error) => console.error("Error fetching random meal:", error));
  };

  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setTimeOfDay("morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setTimeOfDay("afternoon");
    } else {
      setTimeOfDay("evening");
    }
  };

  const handleCheckboxClick = (index) => {
    console.log("Checkbox clicked:", index);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set the selected category
  
    // Fetch meals for the selected category
    fetchCategoryMeals(category);
  };
  

  const fetchCategoryMeals = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
      .then((response) => response.json())
      .then((data) => setCategoryMeals(data.meals || []))
      .catch((error) => console.error("Error fetching category meals:", error));
  };

  return (
    <div className="container">
      <header className="header">
        <a href="/" className="logo">
          Yumify
        </a>
        <div className="links-container">
          <a href="/cocktails" className="link">
            Cocktails
          </a>
          <a href="/recipe" className="link">
            Recipe
          </a>
        </div>
        <div className="profile-button">
          <a href="/login">
          <button className="button">
            <FaUserCircle />
          </button>

          </a>
          
        </div>
      </header>

      <section className="meal-of-the-day">
        <div className="meal-details">
          <img
            src={mealOfTheDay.strMealThumb}
            alt={mealOfTheDay.strMeal}
            className="meal-image"
          />
          <div className="text-details">
            <h2>Meal of the Day</h2>
            <h3>{mealOfTheDay.strMeal}</h3>
            <p>Ingredients:</p>
            <ul className="ingredients-list">
              {mealOfTheDay.ingredients &&
                mealOfTheDay.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
            </ul>
          </div>
          <div className="steps">
            <h3>Steps to Prepare:</h3>
            {mealOfTheDay.strInstructions && (
              <ol>
                {mealOfTheDay.strInstructions.split("\n").map((step, index) => (
                  <li key={index} className="step">
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxClick(index)}
                      />
                      <span>{step}</span>
                    </label>
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </section>
      {mealOfTheDay.strCategory && (
  <p className="category-text">Category: {mealOfTheDay.strCategory}</p>
)}
      <section className="category-cards">
        {categories.map((category) => (
          <div
            key={category.idCategory}
            className="card"
            onClick={() => handleCategoryClick(category)}
          >
            <h3>{category.strCategory}</h3>
            <img
              src={category.strCategoryThumb}
              alt={category.strCategory}
              className="category-image"
            />
          </div>
        ))}
      </section>

      <section className="food-cards">
        {categoryMeals.map((meal) => (
          <div key={meal.idMeal} className="card">
            <h3>{meal.strMeal}</h3>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="food-image"
            />
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Yumify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
