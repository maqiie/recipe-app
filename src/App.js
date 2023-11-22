
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import recipe from './components/Recipe';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<recipe />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
