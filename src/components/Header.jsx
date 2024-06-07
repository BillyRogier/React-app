import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="grid">
      <nav>
        <ul className="grid">
          <li>
            <NavLink className="nav_link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav_link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
