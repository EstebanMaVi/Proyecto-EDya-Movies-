import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Confiteria from '../../pages/Confiteria/confiteria';
import Login from '../../pages/login/login';

const Header = () => {
  return (
    <header className="header">
      <div className="menu container">
        <a href="/" className="logo">Movies!</a>
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <img src="images/menu.png" className="menu-icon" alt="Menú" />
        </label>
        <nav className="navbar">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/">Nosotros</Link></li>
            <li><Link to='/Confiteria'>Confiteria</Link></li>
            <li><Link to="/">Contacto</Link></li>
            <li><Link to='/Login'>Login</Link></li>
          </ul>
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
