
// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import { FaUserCircle } from "react-icons/fa";

// const Home = () => {
//   const [userName, setUserName] = useState("");
//   const [timeOfDay, setTimeOfDay] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [mealOfTheDay, setMealOfTheDay] = useState({});

//   useEffect(() => {
//     fetchUserData();
//     fetchMealCategories();
//     fetchRandomMeal();
//     getTimeOfDay();
//   }, []);

//   const fetchUserData = () => {
//     fetch("/api/user")
//       .then((response) => response.json())
//       .then((data) => setUserName(data.userName || "User"))
//       .catch((error) => console.error("Error fetching user data:", error));
//   };

//   const fetchMealCategories = () => {
//     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
//       .then((response) => response.json())
//       .then((data) => setCategories(data.categories || []))
//       .catch((error) => console.error("Error fetching meal categories:", error));
//   };

//   const fetchRandomMeal = () => {
//     fetch("https://www.themealdb.com/api/json/v1/1/random.php")
//       .then((response) => response.json())
//       .then((data) => {
//         const randomMeal = data.meals ? data.meals[0] : {};
//         setMealOfTheDay(randomMeal);
//       })
//       .catch((error) => console.error("Error fetching random meal:", error));
//   };

//   const getTimeOfDay = () => {
//     const currentHour = new Date().getHours();
//     if (currentHour >= 5 && currentHour < 12) {
//       setTimeOfDay("morning");
//     } else if (currentHour >= 12 && currentHour < 18) {
//       setTimeOfDay("afternoon");
//     } else {
//       setTimeOfDay("evening");
//     }
//   };

//   const handleCheckboxClick = (index) => {
//     // Handle checkbox click
//     console.log("Checkbox clicked:", index);
//   };

//   return (
//     <div className="container">
//       <header className="header">
//         <a href="/" className="logo">Yumify</a>
//         <div className="links-container">
//           <a href="/about" className="link">About</a>
//           <a href="/contact" className="link">Contact</a>
//         </div>
//         <div className="profile-button">
//           <button className="button">
//             <FaUserCircle />
//           </button>
//         </div>
//       </header>

//       <section className="meal-of-the-day">
//         <div className="meal-details">
//           <img
//             src={mealOfTheDay.strMealThumb}
//             alt={mealOfTheDay.strMeal}
//             className="meal-image"
//           />
//           <div className="text-details">
//             <h2>Meal of the Day</h2>
//             <h3>{mealOfTheDay.strMeal}</h3>
//             <p>Ingredients:</p>
//             <ul className="ingredients-list">
//               {mealOfTheDay.ingredients &&
//                 mealOfTheDay.ingredients.map((ingredient, index) => (
//                   <li key={index}>{ingredient}</li>
//                 ))}
//             </ul>
//           </div>
//           <div className="steps">
//             <h3>Steps to Prepare:</h3>
//             {mealOfTheDay.strInstructions && (
//               <ol>
//                 {mealOfTheDay.strInstructions
//                   .split("\n")
//                   .map((step, index) => (
//                     <li key={index} className="step">
//                       <label>
//                         <input
//                           type="checkbox"
//                           onChange={() => handleCheckboxClick(index)}
//                         />
//                         <span>{step}</span>
//                       </label>
//                     </li>
//                   ))}
//               </ol>
//             )}
//           </div>
//         </div>
//       </section>

//       <section className="category-cards">
//         {categories.map((category) => (
//           <div key={category.idCategory} className="card">
//             <h3>{category.strCategory}</h3>
//             <img
//               src={category.strCategoryThumb}
//               alt={category.strCategory}
//               className="category-image"
//             />
//           </div>
//         ))}
//       </section>

//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} Yumify. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// const getTimeOfDayMessage = (timeOfDay) => {
//   switch (timeOfDay) {
//     case "morning":
//       return "breakfast";
//     case "afternoon":
//       return "lunch";
//     case "evening":
//       return "dinner";
//     default:
//       return "a meal";
//   }
// };

// export default Home;
// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import { FaUserCircle } from "react-icons/fa";

// const Home = () => {
//   const [userName, setUserName] = useState("");
//   const [timeOfDay, setTimeOfDay] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [mealOfTheDay, setMealOfTheDay] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState(null); // New state to store selected category ID

//   useEffect(() => {
//     fetchUserData();
//     fetchMealCategories();
//     fetchRandomMeal();
//     getTimeOfDay();
//   }, []);

//   const fetchUserData = () => {
//     fetch("/api/user")
//       .then((response) => response.json())
//       .then((data) => setUserName(data.userName || "User"))
//       .catch((error) => console.error("Error fetching user data:", error));
//   };

//   const fetchMealCategories = () => {
//     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
//       .then((response) => response.json())
//       .then((data) => setCategories(data.categories || []))
//       .catch((error) => console.error("Error fetching meal categories:", error));
//   };

//   const fetchRandomMeal = () => {
//     fetch("https://www.themealdb.com/api/json/v1/1/random.php")
//       .then((response) => response.json())
//       .then((data) => {
//         const randomMeal = data.meals ? data.meals[0] : {};
//         setMealOfTheDay(randomMeal);
//       })
//       .catch((error) => console.error("Error fetching random meal:", error));
//   };

//   const getTimeOfDay = () => {
//     const currentHour = new Date().getHours();
//     if (currentHour >= 5 && currentHour < 12) {
//       setTimeOfDay("morning");
//     } else if (currentHour >= 12 && currentHour < 18) {
//       setTimeOfDay("afternoon");
//     } else {
//       setTimeOfDay("evening");
//     }
//   };

//   const handleCheckboxClick = (index) => {
//     // Handle checkbox click
//     console.log("Checkbox clicked:", index);
//   };

//   const handleCategoryClick = (categoryId) => {
//     setSelectedCategory(categoryId); // Set the selected category ID
//   };

//   return (
//     <div className="container">
//       <header className="header">
//         <a href="/" className="logo">Yumify</a>
//         <div className="links-container">
//           <a href="/about" className="link">About</a>
//           <a href="/contact" className="link">Contact</a>
//         </div>
//         <div className="profile-button">
//           <button className="button">
//             <FaUserCircle />
//           </button>
//         </div>
//       </header>

//       <section className="meal-of-the-day bg-white rounded-lg shadow-md p-6">
//   <div className="flex items-center">
//     <img
//       src={mealOfTheDay.strMealThumb}
//       alt={mealOfTheDay.strMeal}
//       className="w-64 h-64 rounded-lg object-cover"
//     />
//     <div className="ml-6">
//       <h2 className="text-xl font-bold mb-2">Meal of the Day</h2>
//       <h3 className="text-lg font-semibold mb-2">{mealOfTheDay.strMeal}</h3>
//       <p className="mb-4"><span className="font-semibold">Ingredients:</span></p>
//       <ul className="mb-4">
//         {mealOfTheDay.ingredients &&
//           mealOfTheDay.ingredients.map((ingredient, index) => (
//             <li key={index} className="mb-1">{ingredient}</li>
//           ))}
//       </ul>
//     </div>
//   </div>
//   <div className="mt-6">
//     <h3 className="text-lg font-semibold mb-2">Steps to Prepare:</h3>
//     <ol>
//       {mealOfTheDay.strInstructions &&
//         mealOfTheDay.strInstructions.split("\n").map((step, index) => (
//           <li key={index} className="mb-2 flex items-center">
//             <input
//               type="checkbox"
//               className="mr-2 cursor-pointer"
//               onChange={() => handleCheckboxClick(index)}
//             />
//             <span>{step}</span>
//           </li>
//         ))}
//     </ol>
//   </div>
// </section>


//       <section className="category-cards">
//         {categories.map((category) => (
//           <div key={category.idCategory} className="card" onClick={() => handleCategoryClick(category.idCategory)}>
//             <h3>{category.strCategory}</h3>
//             <img
//               src={category.strCategoryThumb}
//               alt={category.strCategory}
//               className="category-image"
//             />
//           </div>
//         ))}
//       </section>

//       <section className="food-cards">
//         {categories.map((category) => (
//           selectedCategory === category.idCategory && category.meals && category.meals.map((meal) => (
//             <div key={meal.idMeal} className="card">
//               {/* Render food card details */}
//               <h3>{meal.strMeal}</h3>
//               <img
//                 src={meal.strMealThumb}
//                 alt={meal.strMeal}
//                 className="food-image"
//               />
//             </div>
//           ))
//         ))}
//       </section>
// {/* Display category meals if a category is selected */}
// {selectedCategory && (
//   <section className="category-meals py-8">
//     <h2 className="text-3xl font-bold mb-6">{selectedCategory.strCategory} Meals</h2>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//       {categoryMeals.map((meal) => (
//         <div key={meal.idMeal} className="meal bg-white rounded-lg shadow-md overflow-hidden">
//           <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 sm:h-48 object-cover" />
//           <div className="p-4">
//             <h3 className="text-xl font-semibold mb-2">{meal.strMeal}</h3>
//             <p className="text-gray-600 mb-4">{meal.strCategory}</p>
//             {/* Additional information */}
//             <p className="text-gray-700">Origin: {meal.strArea}</p>
//             <p className="text-gray-700">Tags: {meal.strTags}</p>
//             <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Watch on YouTube</a>
//           </div>
//         </div>
//       ))}
//     </div>
//   </section>
// )}

//       <footer className="footer">
//         <p>&copy; {new Date().getFullYear()} Yumify. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;
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
      .catch((error) => console.error("Error fetching meal categories:", error));
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

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId); // Set the selected category ID
  
    // Fetch meals for the selected category
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`)
      .then((response) => response.json())
      .then((data) => {
        setCategoryMeals(data.meals || []);
      })
      .catch((error) =>
        console.error("Error fetching meals for the selected category:", error)
      );
  };
  

  const fetchCategoryMeals = (categoryId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`)
      .then((response) => response.json())
      .then((data) => setCategoryMeals(data.meals || []))
      .catch((error) => console.error("Error fetching category meals:", error));
  };

  return (
    <div className="container">
      <header className="header">
        <a href="/" className="logo">Yumify</a>
        <div className="links-container">
          <a href="/about" className="link">About</a>
          <a href="/contact" className="link">Contact</a>
        </div>
        <div className="profile-button">
          <button className="button">
            <FaUserCircle />
          </button>
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
          {mealOfTheDay.strInstructions
            .split("\n")
            .map((step, index) => (
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


      <section className="category-cards">
        {categories.map((category) => (
          <div key={category.idCategory} className="card" onClick={() => handleCategoryClick(category.idCategory)}>
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
        {selectedCategory && categoryMeals.map((meal) => (
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
