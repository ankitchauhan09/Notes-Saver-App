import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/pastes" className="nav-link">Pastes</NavLink>
    </nav>
  );
};

export default Navbar;
