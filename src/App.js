// import logo from "./logo.svg";
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import RecipeComponent from "./components/recipe";
// import Cocktails from "./components/Cocktails";
// import Login from "./components/Login";
// import Navbar from "./components/Navbar";
// import Favorites from "./components/Favourites";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/recipes/:id" element={<recipe />} />
//           <Route path="/cocktails/*" element={<Cocktails />} />
//           <Route path="/recipe" element={<RecipeComponent />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/navbar" element={<Navbar />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cocktails from "./components/Cocktails";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RecipeComponent from "./components/recipe";
import Favorites from "./components/Favourites";
function App() {
  // State to store favorite recipes
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites} />} />
          <Route path="/recipes/:id" element={<RecipeComponent />} />
          <Route path="/cocktails/*" element={<Cocktails />} />
          <Route path="/recipe" element={<RecipeComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
