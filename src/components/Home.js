
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
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Home.css";

const ModernHome = () => {
  const [userName, setUserName] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [categories, setCategories] = useState([]);
  const [mealOfTheDay, setMealOfTheDay] = useState({});


  const handleCheckboxClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const checkbox = section.querySelector(".checkbox input");
      if (checkbox) {
        checkbox.checked = !checkbox.checked;
  
        // Add or remove the 'checked' class based on the checkbox state
        const stepText = section.querySelector(".step p");
        if (stepText) {
          stepText.classList.toggle("checked", checkbox.checked);
        }
      }
    }
  };
  


  const isChecked = (id) => {
    return false;
  };
  useEffect(() => {
    // Fetch the user name from the backend (replace with your actual API call)
    // Example assuming an API endpoint /api/user
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => setUserName(data.userName || "User"))
      .catch((error) => {
        console.error("Error fetching user name:", error);
        setUserName("User");
      });

    // Determine the time of day
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      setTimeOfDay("morning");
    } else if (currentHour >= 12 && currentHour < 18) {
      setTimeOfDay("afternoon");
    } else {
      setTimeOfDay("evening");
    }

    // Fetch meal categories
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.categories || []))
      .catch((error) => console.error("Error fetching categories:", error));

    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        const randomMeal = data.meals[0] || {};
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
    <div className="modern-home-container">
      <header className="header">
        <div className="profile-button">
          <button className="button">
            <FaUserCircle />
          </button>
        </div>
        <div className="welcome-message">
          <p>
            Welcome, <span className="username">{userName}!</span>
            <br />
            {/* Ready to make {getTimeOfDayMessage(timeOfDay)}? */}
          </p>
        </div>
      </header>

      <section className="category-cards">
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
      </section>

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
          <div
            className={`steps ${
              isChecked(`stepCheckbox-${mealOfTheDay.idMeal}-0`) ? "checked" : ""
            }`}
          >
            {mealOfTheDay.steps &&
              mealOfTheDay.steps.split("\n").map((step, index) => (
                <div key={index} className="step">
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

// ... (Rest of the code remains the same)

export default ModernHome;
