import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RecipeComponent from "./components/recipe";
import Cocktails from "./components/Cocktails";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<recipe />} />
          <Route path="/cocktails/*" element={<Cocktails />} />
          <Route path="/recipe" element={<RecipeComponent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
