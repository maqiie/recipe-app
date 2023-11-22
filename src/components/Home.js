
import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaUserCircle } from "react-icons/fa";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [timeOfDay, setTimeOfDay] = useState("");

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
