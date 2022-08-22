import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Header({ authState, setAuthState }) {
  const navigate = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/auth/logout');
    if (response.ok) {
      setAuthState(null);
      navigate('/');
    }
  };
  return (
    <header role="banner" className="headerContainer">
      <nav className="navbar navbar-expand-lg bg-green">
        {!authState?.email
          ? (
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                <img src="/images/logo.png" alt="" width="30" height="30" className="d-inline-block align-text-top" />
                Магазин кастомных носков
              </NavLink>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/registration">Регистрация</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Войти</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )

          : (
            <div className="container-fluid">
              <NavLink className="navbar-brand" to="/">
                <img src="/images/logo.png" alt="" width="50" height="50" className="d-inline-block align-text-top" />
                Магазин кастомных носков
              </NavLink>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/generate">Генератор носков</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/favourites">Избранное</NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="login" onClick={logoutHandler} href="">Выйти</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
      </nav>

    </header>
  );
}

export default Header;
