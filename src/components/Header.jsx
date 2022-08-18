import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" alt="" width="30" height="30" className="d-inline-block align-text-top" />
            Custom Socks
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/registration">Registration</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/authorization">Authorization</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}

export default Header;
