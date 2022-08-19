import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header role="banner" className="headerContainer">
      <nav className="navbar navbar-expand-lg bg-green">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="" width="30" height="30" className="d-inline-block align-text-top" />
            Custom Socks
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/generate">Socks Generator</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/registration">Registration</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}

export default Header;
