
// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import { FaUserCircle } from "react-icons/fa";

// const Home = () => {
//   const [userName, setUserName] = useState("");
//   const [timeOfDay, setTimeOfDay] = useState("");
//   const [categories, setCategories] = useState([]);

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

//     // Determine the time of day
//     const currentHour = new Date().getHours();
//     if (currentHour >= 5 && currentHour < 12) {
//       setTimeOfDay("morning");
//     } else if (currentHour >= 12 && currentHour < 18) {
//       setTimeOfDay("afternoon");
//     } else {
//       setTimeOfDay("evening");
//     }

//     // Fetch meal categories
//     fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
//       .then((response) => response.json())
//       .then((data) => setCategories(data.categories || []))
//       .catch((error) => console.error("Error fetching categories:", error));
//   }, []);

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
import "./Home.css";
import { FaUserCircle } from "react-icons/fa";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");
  const [categories, setCategories] = useState([]);
  const [mealOfTheDay, setMealOfTheDay] = useState({});

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

    // Fetch meal of the day
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => setMealOfTheDay(data.meals[0] || {}))
      .catch((error) => console.error("Error fetching meal of the day:", error));
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

      <section className="meal-of-the-day">
        <h2>Meal of the Day</h2>
        <div className="meal-details">
          <img
            src={mealOfTheDay.strMealThumb}
            alt={mealOfTheDay.strMeal}
            className="meal-image"
          />
          <h3>{mealOfTheDay.strMeal}</h3>
          {/* Add more details about the meal */}
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 Yumify. All rights reserved.</p>
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

export default Home;
