
// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import { FaUserCircle } from "react-icons/fa";
// import Navbar from "./Navbar";

// const Home = () => {
//   const [userName, setUserName] = useState("");
//   const [timeOfDay, setTimeOfDay] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [mealOfTheDay, setMealOfTheDay] = useState({});
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [categoryMeals, setCategoryMeals] = useState([]);

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
//       .catch((error) =>
//         console.error("Error fetching meal categories:", error)
//       );
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
//     console.log("Checkbox clicked:", index);
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category); // Set the selected category
  
//     // Fetch meals for the selected category
//     fetchCategoryMeals(category);
//   };
  

//   const fetchCategoryMeals = (category) => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`)
//       .then((response) => response.json())
//       .then((data) => setCategoryMeals(data.meals || []))
//       .catch((error) => console.error("Error fetching category meals:", error));
//   };

//   return (
//     <div className="container">
//             <Navbar />



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
//                 {mealOfTheDay.strInstructions.split("\n").map((step, index) => (
//                   <li key={index} className="step">
//                     <label>
//                       <input
//                         type="checkbox"
//                         onChange={() => handleCheckboxClick(index)}
//                       />
//                       <span>{step}</span>
//                     </label>
//                   </li>
//                 ))}
//               </ol>
//             )}
//           </div>
//         </div>
//       </section>
//       {mealOfTheDay.strCategory && (
//   <p className="category-text">Category: {mealOfTheDay.strCategory}</p>
// )}
//       <section className="category-cards">
//         {categories.map((category) => (
//           <div
//             key={category.idCategory}
//             className="card"
//             onClick={() => handleCategoryClick(category)}
//           >
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
//         {categoryMeals.map((meal) => (
//           <div key={meal.idMeal} className="card">
//             <h3>{meal.strMeal}</h3>
//             <img
//               src={meal.strMealThumb}
//               alt={meal.strMeal}
//               className="food-image"
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

// export default Home;


import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Ensure screen readers work correctly

const Home = () => {
  const [mealOfTheDay, setMealOfTheDay] = useState({});
  const [categories, setCategories] = useState([]);
  const [categoryMeals, setCategoryMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetchRandomMeal();
    fetchMealCategories();
  }, []);

  const fetchRandomMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setMealOfTheDay(data.meals ? data.meals[0] : {}))
      .catch((error) => console.error("Error fetching random meal:", error));
  };

  const fetchMealCategories = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories || []))
      .catch((error) =>
        console.error("Error fetching meal categories:", error)
      );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchCategoryMeals(category.strCategory);
  };

  const fetchCategoryMeals = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json())
      .then((data) => setCategoryMeals(data.meals || []))
      .catch((error) => console.error("Error fetching category meals:", error));
  };

  const handleMealClick = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedMeal(data.meals[0]);
        setModalIsOpen(true);
      })
      .catch((error) => console.error("Error fetching meal details:", error));
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMeal(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Meal of the Day Section */}
      <section className="p-8 bg-gradient-to-br from-teal-300 via-teal-400 to-teal-500 text-white">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold mb-4">Welcome to Yumify</h2>
          <p className="text-xl mb-8">Discover delicious recipes curated just for you!</p>
        </div>

        <motion.div
          className="my-12 p-8 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start md:space-x-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={mealOfTheDay.strMealThumb}
            alt={mealOfTheDay.strMeal}
            className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          />
          <div className="text-left mt-6 md:mt-0 md:w-1/2">
            <h3 className="text-3xl font-semibold text-teal-600">Meal of the Day</h3>
            <h4 className="text-2xl font-bold text-gray-800 mt-4">{mealOfTheDay.strMeal}</h4>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {mealOfTheDay.strInstructions?.slice(0, 250)}...
            </p>
            <div className="mt-6">
              <button
                onClick={() => handleMealClick(mealOfTheDay.idMeal)}
                className="inline-block bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-teal-500 transition-colors duration-300"
              >
                View Full Recipe
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Meal Categories Section */}
      <section className="p-8 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 text-white">
        <h3 className="text-4xl font-semibold mb-6">Browse by Category</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.idCategory}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCategoryClick(category)}
            >
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-semibold text-gray-700">{category.strCategory}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Selected Category Meals Section */}
      {selectedCategory && (
        <section className="p-8 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-white">
          <h3 className="text-4xl font-semibold mb-6">{selectedCategory.strCategory} Meals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {categoryMeals.map((meal) => (
              <motion.div
                key={meal.idMeal}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleMealClick(meal.idMeal)}
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="text-xl font-semibold text-gray-700">{meal.strMeal}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Recipe Modal */}
      {selectedMeal && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Recipe Modal"
          className="bg-gradient-to-br from-teal-200 via-teal-300 to-teal-400 p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-20 relative"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl"
          >
            &times;
          </button>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{selectedMeal.strMeal}</h2>
          <img
            src={selectedMeal.strMealThumb}
            alt={selectedMeal.strMeal}
            className="w-full h-80 object-cover rounded-lg mb-4 shadow-md"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Instructions</h3>
          <p className="text-gray-700 mb-4">{selectedMeal.strInstructions}</p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Ingredients</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {Array.from({ length: 20 }, (_, i) => i + 1)
              .map((i) => ({
                ingredient: selectedMeal[`strIngredient${i}`],
                measure: selectedMeal[`strMeasure${i}`],
              }))
              .filter((item) => item.ingredient)
              .map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item.ingredient} - {item.measure}
                </li>
              ))}
          </ul>
        </Modal>
      )}

      {/* Footer */}
      <footer className="text-center py-8 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 text-gray-800">
        <p className="text-lg">&copy; {new Date().getFullYear()} Yumify. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
