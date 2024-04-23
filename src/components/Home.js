
// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import { FaUserCircle } from "react-icons/fa";

// const Home = () => {
//   const [userName, setUserName] = useState("");
//   const [timeOfDay, setTimeOfDay] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [mealOfTheDay, setMealOfTheDay] = useState({});

  // const handleCheckboxClick = (sectionId) => {
  //   const section = document.getElementById(sectionId);
  //   if (section) {
  //     const checkbox = section.querySelector(".checkbox input");
  //     if (checkbox) {
  //       checkbox.checked = !checkbox.checked;
  
  //       // Add or remove the 'checked' class based on the checkbox state
  //       const stepText = section.querySelector(".step p");
  //       if (stepText) {
  //         stepText.classList.toggle("checked", checkbox.checked);
  //       }
  //     }
  //   }
  // };
  


  // const isChecked = (id) => {
  //   return false;
  // };
  // useEffect(() => {
  //   // Fetch the user name from the backend (replace with your actual API call)
  //   // Example assuming an API endpoint /api/user
  //   fetch("/api/user")
  //     .then((response) => response.json())
  //     .then((data) => setUserName(data.userName || "User"))
  //     .catch((error) => {
  //       console.error("Error fetching user name:", error);
  //       setUserName("User");
  //     });

  //   // Determine the time of day
  //   const currentHour = new Date().getHours();
  //   if (currentHour >= 5 && currentHour < 12) {
  //     setTimeOfDay("morning");
  //   } else if (currentHour >= 12 && currentHour < 18) {
  //     setTimeOfDay("afternoon");
  //   } else {
  //     setTimeOfDay("evening");
  //   }

  //   // Fetch meal categories
  //   fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  //     .then((response) => response.json())
  //     .then((data) => setCategories(data.categories || []))
  //     .catch((error) => console.error("Error fetching categories:", error));

  //   fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const randomMeal = data.meals[0] || {};
  //       setMealOfTheDay(randomMeal);

  //       // Fetch ingredients and steps for the meal
  //       fetch(
  //         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMeal.idMeal}`
  //       )
  //         .then((response) => response.json())
  //         .then((detailsData) => {
  //           const details = detailsData.meals[0] || {};
  //           setMealOfTheDay((prevMeal) => ({
  //             ...prevMeal,
  //             ingredients: details.ingredients,
  //             steps: details.strInstructions,
  //           }));
  //         })
  //         .catch((error) =>
  //           console.error("Error fetching meal details:", error)
  //         );
  //     })
  //     .catch((error) =>
  //       console.error("Error fetching meal of the day:", error)
  //     );
  // }, []);

//   return (
//     <div>
//       <section className="section-background">
//         <div className="profile-button">
//           <button className="button">
//             <FaUserCircle />
//           </button>
//         </div>

//         <div className="welcome-message">
//           <p>
//             Welcome, <span className="username">{userName}!</span>
//             <br />
//             Ready to make {getTimeOfDayMessage(timeOfDay)}?
//           </p>
//         </div>

//         <div className="category-cards">
//           {categories.slice(0, 6).map((category) => (
//             <div key={category.idCategory} className="card">
//               <img
//                 src={category.strCategoryThumb}
//                 alt={category.strCategory}
//                 className="category-image"
//               />
//               <h3>{category.strCategory}</h3>
//               {/* Add more details or a link to fetch meals for this category */}
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* <section className="meal-of-the-day">
//         <div className="meal-details">
//           <img
//             src={mealOfTheDay.strMealThumb}
//             alt={mealOfTheDay.strMeal}
//             className="meal-image"
//           />
//           <div className="text-details">
//             <h2>Meal of the Day</h2>
//             <h3>{mealOfTheDay.strMeal}</h3>
//             <p>{mealOfTheDay.strCategory}</p>
//             <ul className="ingredients-list">
//               {mealOfTheDay.ingredients &&
//                 mealOfTheDay.ingredients.map((ingredient, index) => (
//                   <li key={index}>{ingredient}</li>
//                 ))}
//             </ul>
//           </div>
//           <div className="steps" id="stepsSection">
//             {mealOfTheDay.steps &&
//               mealOfTheDay.steps.split("\n").map((step, index) => (
//                 <div key={index} className="step">
//                   <p>{step}</p>
//                   <div
//                     className="checkbox"
//                     onClick={() => handleCheckboxClick(`stepCheckbox-${index}`)}
//                   >
//                     <label>
//                       <input type="checkbox" id={`stepCheckbox-${index}`} />
//                       <span className="checkmark"></span>
//                     </label>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </section> */}

// <section className="meal-of-the-day">
//   <div className="meal-details">
//     <img
//       src={mealOfTheDay.strMealThumb}
//       alt={mealOfTheDay.strMeal}
//       className="meal-image"
//     />
//     <div className="text-details">
//       <h2>Meal of the Day</h2>
//       <h3>{mealOfTheDay.strMeal}</h3>
//       <p>{mealOfTheDay.strCategory}</p>
//       <ul className="ingredients-list">
//         {mealOfTheDay.ingredients &&
//           mealOfTheDay.ingredients.map((ingredient, index) => (
//             <li key={index}>{ingredient}</li>
//           ))}
//       </ul>
//     </div>
//     <div className="steps" id={`stepsSection-${mealOfTheDay.idMeal}`}>
//       {mealOfTheDay.steps &&
//         mealOfTheDay.steps.split("\n").map((step, index) => (
//           <div
//             key={index}
//             className={`step ${
//               isChecked(`stepCheckbox-${mealOfTheDay.idMeal}-${index}`)
//                 ? "checked"
//                 : ""
//             }`}
//           >
//             <p>{step}</p>
//             <div
//               className="checkbox"
//               onClick={() =>
//                 handleCheckboxClick(`stepCheckbox-${mealOfTheDay.idMeal}-${index}`)
//               }
//             >
//               <label>
//                 <input
//                   type="checkbox"
//                   id={`stepCheckbox-${mealOfTheDay.idMeal}-${index}`}
//                 />
//                 <span className="checkmark"></span>
//               </label>
//             </div>
//           </div>
//         ))}
//     </div>
//   </div>
// </section>

//       <footer className="footer">
//         <p>&copy; 2023 Yumify. All rights reserved.</p>
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

//   const handleCheckboxClick = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       const checkbox = section.querySelector(".checkbox input");
//       if (checkbox) {
//         checkbox.checked = !checkbox.checked;

//         // Add or remove the 'checked' class based on the checkbox state
//         const stepText = section.querySelector(".step p");
//         if (stepText) {
//           stepText.classList.toggle("checked", checkbox.checked);
//         }
//       }
//     }
//   };

//   const isChecked = (id) => {
//     return false;
//   };
//   useEffect(() => {
//     // Fetch the user name from the backend (replace with your actual API call)
//     // Example assuming an API endpoint /api/user
//     fetch("/api/user")
//       .then((response) => response.json())
//       .then((data) => setUserName(data.userName || "User"))
//       .catch((error) => {
//         console.error("Error fetching user name:", error);
//         setUserName("User");
//       });

  //   // Determine the time of day
  //   const currentHour = new Date().getHours();
  //   if (currentHour >= 5 && currentHour < 12) {
  //     setTimeOfDay("morning");
  //   } else if (currentHour >= 12 && currentHour < 18) {
  //     setTimeOfDay("afternoon");
  //   } else {
  //     setTimeOfDay("evening");
  //   }

//     // Fetch meal categories
//     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
//       .then((response) => response.json())
//       .then((data) => setCategories(data.categories || []))
//       .catch((error) => console.error("Error fetching categories:", error));

//     fetch("https://www.themealdb.com/api/json/v1/1/random.php")
//       .then((response) => response.json())
//       .then((data) => {
//         const randomMeal = data.meals[0] || {};
//         setMealOfTheDay(randomMeal);

//         // Fetch ingredients and steps for the meal
//         fetch(
//           `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMeal.idMeal}`
//         )
//           .then((response) => response.json())
//           .then((detailsData) => {
//             const details = detailsData.meals[0] || {};
//             setMealOfTheDay((prevMeal) => ({
//               ...prevMeal,
//               ingredients: details.ingredients,
//               steps: details.strInstructions,
//             }));
//           })
//           .catch((error) =>
//             console.error("Error fetching meal details:", error)
//           );
//       })
//       .catch((error) =>
//         console.error("Error fetching meal of the day:", error)
//       );
//   }, []);

//   return (
//     <div>
//       {/* <section className="meal-of-the-day">
//         <div className="meal-details">
//           <img
//             src={mealOfTheDay.strMealThumb}
//             alt={mealOfTheDay.strMeal}
//             className="meal-image"
//           />
//           <div className="text-details">
//             <h2>Meal of the Day</h2>
//             <h3>{mealOfTheDay.strMeal}</h3>
//             <p>{mealOfTheDay.strCategory}</p>
//             <ul className="ingredients-list">
//               {mealOfTheDay.ingredients &&
//                 mealOfTheDay.ingredients.map((ingredient, index) => (
//                   <li key={index}>{ingredient}</li>
//                 ))}
//             </ul>
//           </div>
//           <div className="steps" id="stepsSection">
//             {mealOfTheDay.steps &&
//               mealOfTheDay.steps.split("\n").map((step, index) => (
//                 <div key={index} className="step">
//                   <p>{step}</p>
//                   <div
//                     className="checkbox"
//                     onClick={() => handleCheckboxClick(`stepCheckbox-${index}`)}
//                   >
//                     <label>
//                       <input type="checkbox" id={`stepCheckbox-${index}`} />
//                       <span className="checkmark"></span>
//                     </label>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </section> */}

//       <section className="meal-of-the-day">
//         <div className="e">
//         <div className="meal-details">
//           <img
//             src={mealOfTheDay.strMealThumb}
//             alt={mealOfTheDay.strMeal}
//             className="meal-image"
//           />
//           <div className="text-details">
//             <h2>Meal of the Day</h2>
//             <h3>{mealOfTheDay.strMeal}</h3>
//             <p>{mealOfTheDay.strCategory}</p>
//             <ul className="ingredients-list">
//               {mealOfTheDay.ingredients &&
//                 mealOfTheDay.ingredients.map((ingredient, index) => (
//                   <li key={index}>{ingredient}</li>
//                 ))}
//             </ul>
//           </div>
//           <div className="steps" id={`stepsSection-${mealOfTheDay.idMeal}`}>
//             {mealOfTheDay.steps &&
//               mealOfTheDay.steps.split("\n").map((step, index) => (
//                 <div
//                   key={index}
//                   className={`step ${
//                     isChecked(`stepCheckbox-${mealOfTheDay.idMeal}-${index}`)
//                       ? "checked"
//                       : ""
//                   }`}
//                 >
//                   <p>{step}</p>
//                   <div
//                     className="checkbox"
//                     onClick={() =>
//                       handleCheckboxClick(
//                         `stepCheckbox-${mealOfTheDay.idMeal}-${index}`
//                       )
//                     }
//                   >
//                     <label>
//                       <input
//                         type="checkbox"
//                         id={`stepCheckbox-${mealOfTheDay.idMeal}-${index}`}
//                       />
//                       <span className="checkmark"></span>
//                     </label>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//         </div>
        
//       </section>
//       <section className="section-background">
//         <div className="profile-button">
//           <button className="button">
//             <FaUserCircle />
//           </button>
//         </div>

//         <div className="welcome-message">
//           <p>
//             Welcome, <span className="username">{userName}!</span>
//             <br />
//             Ready to make {getTimeOfDayMessage(timeOfDay)}?
//           </p>
//         </div>

//         <div className="category-cards">
//           {categories.slice(0, 6).map((category) => (
//             <div key={category.idCategory} className="card">
//               <img
//                 src={category.strCategoryThumb}
//                 alt={category.strCategory}
//                 className="category-image"
//               />
//               <h3>{category.strCategory}</h3>
//               {/* Add more details or a link to fetch meals for this category */}
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* <section className="meal-of-the-day">
//         <div className="meal-details">
//           <img
//             src={mealOfTheDay.strMealThumb}
//             alt={mealOfTheDay.strMeal}
//             className="meal-image"
//           />
//           <div className="text-details">
//             <h2>Meal of the Day</h2>
//             <h3>{mealOfTheDay.strMeal}</h3>
//             <p>{mealOfTheDay.strCategory}</p>
//             <ul className="ingredients-list">
//               {mealOfTheDay.ingredients &&
//                 mealOfTheDay.ingredients.map((ingredient, index) => (
//                   <li key={index}>{ingredient}</li>
//                 ))}
//             </ul>
//           </div>
//           <div className="steps" id="stepsSection">
//             {mealOfTheDay.steps &&
//               mealOfTheDay.steps.split("\n").map((step, index) => (
//                 <div key={index} className="step">
//                   <p>{step}</p>
//                   <div
//                     className="checkbox"
//                     onClick={() => handleCheckboxClick(`stepCheckbox-${index}`)}
//                   >
//                     <label>
//                       <input type="checkbox" id={`stepCheckbox-${index}`} />
//                       <span className="checkmark"></span>
//                     </label>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </section> */}

// <section className="meal-of-the-day">
//   <div className="meal-details">
//     <img
//       src={mealOfTheDay.strMealThumb}
//       alt={mealOfTheDay.strMeal}
//       className="meal-image"
//     />
//     <div className="text-details">
//       <h2>Meal of the Day</h2>
//       <h3>{mealOfTheDay.strMeal}</h3>
//       <p>{mealOfTheDay.strCategory}</p>
//       <ul className="ingredients-list">
//         {mealOfTheDay.ingredients &&
//           mealOfTheDay.ingredients.map((ingredient, index) => (
//             <li key={index}>{ingredient}</li>
//           ))}
//       </ul>
//     </div>
//     <div className="steps" id={`stepsSection-${mealOfTheDay.idMeal}`}>
//       {mealOfTheDay.steps &&
//         mealOfTheDay.steps.split("\n").map((step, index) => (
//           <div
//             key={index}
//             className={`step ${
//               isChecked(`stepCheckbox-${mealOfTheDay.idMeal}-${index}`)
//                 ? "checked"
//                 : ""
//             }`}
//           >
//             <p>{step}</p>
//             <div
//               className="checkbox"
//               onClick={() =>
//                 handleCheckboxClick(`stepCheckbox-${mealOfTheDay.idMeal}-${index}`)
//               }
//             >
//               <label>
//                 <input
//                   type="checkbox"
//                   id={`stepCheckbox-${mealOfTheDay.idMeal}-${index}`}
//                 />
//                 <span className="checkmark"></span>
//               </label>
//             </div>
//           </div>
//         ))}
//     </div>
//   </div>
// </section>

//       <footer className="footer">
//         <p>&copy; 2023 Yumify. All rights reserved.</p>
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

//   useEffect(() => {
//     fetchUserData();
//     fetchMealCategories();
//     fetchRandomMeal();
//   }, []);

//   const fetchUserData = () => {
//     fetch("/api/user")
//       .then((response) => response.json())
//       .then((data) => setUserName(data.userName || "User"))
//       .catch((error) => {
//         console.error("Error fetching user name:", error);
//         setUserName("User");
//       });
//   };

//   const fetchMealCategories = () => {
//     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
//       .then((response) => response.json())
//       .then((data) => setCategories(data.categories || []))
//       .catch((error) => console.error("Error fetching categories:", error));
//   };

//   const fetchRandomMeal = () => {
//     fetch("https://www.themealdb.com/api/json/v1/1/random.php")
//       .then((response) => response.json())
//       .then((data) => {
//         const randomMeal = data.meals[0] || {};
//         setMealOfTheDay(randomMeal);
//       })
//       .catch((error) =>
//         console.error("Error fetching meal of the day:", error)
//       );
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

//   useEffect(() => {
//     getTimeOfDay();
//   }, []);

//   return (
//     <div className="home-container">
//       <header className="header">
//         <div className="profile-button">
//           <button className="button">
//             <FaUserCircle />
//           </button>
//         </div>
//         <div className="welcome-message">
//           <p>
//             Welcome, <span className="username">{userName}!</span>
//             <br />
//             Ready to make {getTimeOfDayMessage(timeOfDay)}?
//           </p>
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
//             <p>{mealOfTheDay.strCategory}</p>
//             <ul className="ingredients-list">
//               {mealOfTheDay.ingredients &&
//                 mealOfTheDay.ingredients.map((ingredient, index) => (
//                   <li key={index}>{ingredient}</li>
//                 ))}
//             </ul>
//           </div>
//           <div className="steps">
//             {mealOfTheDay.steps &&
//               mealOfTheDay.steps.split("\n").map((step, index) => (
//                 <div key={index} className="step">
//                   <p>{step}</p>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </section>

//       <section className="section-background">
//         <div className="category-cards">
//           {categories.slice(0, 6).map((category) => (
//             <div key={category.idCategory} className="card">
//               <img
//                 src={category.strCategoryThumb}
//                 alt={category.strCategory}
//                 className="category-image"
//               />
//               <h3>{category.strCategory}</h3>
//             </div>
//           ))}
//         </div>
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
//         <div className="profile-button">
//           <button className="button">
//             <FaUserCircle />
//           </button>
//         </div>
//         <div className="welcome-message">
//           <p>
//             Welcome, <span className="username">{userName}!</span>
//             <br />
//             Ready to make {getTimeOfDayMessage(timeOfDay)}?
//           </p>
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
//                     <li key={index}>
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
//       {/* <header className="header">
//         <div className="profile-button">
//           <button className="button">
//             <FaUserCircle />
//           </button>
//         </div>
//         <div className="welcome-message">
//           <p>
//             Welcome, <span className="username">{userName}!</span>
//             <br />
//             Ready to make {getTimeOfDayMessage(timeOfDay)}?
//           </p>
//         </div>
//       </header> */}
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
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Home.css";

const ModernHome = () => {
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
    // Fetch user data
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

        // Fetch ingredients and steps for the meal
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMeal.idMeal}`
        )
          .then((response) => response.json())
          .then((detailsData) => {
            const details = detailsData.meals[0] || {};
            setMealOfTheDay((prevMeal) => ({
              ...prevMeal,
              ingredients: details.ingredients,
              steps: details.strInstructions,
            }));
          })
          .catch((error) =>
            console.error("Error fetching meal details:", error)
          );
      })
      .catch((error) =>
        console.error("Error fetching meal of the day:", error)
      );
  }, []);

  return (
    <div>
      <section className="section-background">
        <div className="profile-button">
          <button className="button">
            <FaUserCircle />
          </button>
        </div>

        <div className="welcome-message">
          <p>
            Welcome, <span className="username">{userName}!</span>
            <br />
            Ready to make {getTimeOfDayMessage(timeOfDay)}?
          </p>
        </div>

        <div className="category-cards">
          {categories.slice(0, 6).map((category) => (
            <div key={category.idCategory} className="card">
              <img
                src={category.strCategoryThumb}
                alt={category.strCategory}
                className="category-image"
              />
              <h3>{category.strCategory}</h3>
              {/* Add more details or a link to fetch meals for this category */}
            </div>
          ))}
        </div>
      </section>
      {/* <section className="meal-of-the-day">
        <div className="meal-details">
          <img
            src={mealOfTheDay.strMealThumb}
            alt={mealOfTheDay.strMeal}
            className="meal-image"
          />
          <div className="text-details">
            <h2>Meal of the Day</h2>
            <h3>{mealOfTheDay.strMeal}</h3>
            <p>{mealOfTheDay.strCategory}</p>
            <ul className="ingredients-list">
              {mealOfTheDay.ingredients &&
                mealOfTheDay.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
            </ul>
          </div>
          <div className="steps" id="stepsSection">
            {mealOfTheDay.steps &&
              mealOfTheDay.steps.split("\n").map((step, index) => (
                <div key={index} className="step">
                  <p>{step}</p>
                  <div
                    className="checkbox"
                    onClick={() => handleCheckboxClick(`stepCheckbox-${index}`)}
                  >
                    <label>
                      <input type="checkbox" id={`stepCheckbox-${index}`} />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section> */}

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
      <p>{mealOfTheDay.strCategory}</p>
      <ul className="ingredients-list">
        {mealOfTheDay.ingredients &&
          mealOfTheDay.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
      </ul>
    </div>
    <div className="steps" id={`stepsSection-${mealOfTheDay.idMeal}`}>
      {mealOfTheDay.steps &&
        mealOfTheDay.steps.split("\n").map((step, index) => (
          <div
            key={index}
            className={`step ${
              isChecked(`stepCheckbox-${mealOfTheDay.idMeal}-${index}`)
                ? "checked"
                : ""
            }`}
          >
            <p>{step}</p>
            <div
              className="checkbox"
              onClick={() =>
                handleCheckboxClick(`stepCheckbox-${mealOfTheDay.idMeal}-${index}`)
              }
            >
              <label>
                <input
                  type="checkbox"
                  id={`stepCheckbox-${mealOfTheDay.idMeal}-${index}`}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        ))}
    </div>
  </div>
</section>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Yumify. All rights reserved.</p>
      </footer>
    </div>
  );
};

const getTimeOfDayMessage = (timeOfDay) => {
  switch (timeOfDay) {
    case "morning":
      return "breakfast";
    case "afternoon":
      return "lunch";
    case "evening":
      return "dinner";
    default:
      return "a meal";
  }
};

export default ModernHome;
