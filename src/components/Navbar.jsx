import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">GreenNest</Link>
      <ul className="nav-links">
        <li><Link to="/fruits">Organic Fruits</Link></li>
        <li><Link to="/veggies">Organic Veggies</Link></li>
        <li><Link to="/cart">Cart 🛒</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
