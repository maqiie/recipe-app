import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo" activeClassName="active">
        Yumify
      </NavLink>
      <div className="links-container">
        <NavLink to="/cocktails" className="link" activeClassName="active">
          Cocktails
        </NavLink>
        <NavLink to="/recipe" className="link" activeClassName="active">
          Recipe
        </NavLink>
      </div>
      <div className="profile-button">
        <a href="/login">
          <button className="button">
            <FaUserCircle />
          </button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
