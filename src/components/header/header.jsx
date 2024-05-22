import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="menu container">
        <a href="/" className="logo">Movies!</a>
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img src="images/menu.png" className="menu-icon" alt="Menú" />
        </label>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/confiteria" className="nav-link">
                    Confitería
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>


              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="header-content container">
        <div className="header-1"></div>
        <div className="header-2">
          <h1>Las mejores películas</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
