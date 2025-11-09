import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="SOMAUPED Logo" />
          <div className="logo-text">
            <div className="logo-text-ar">الجمعية الموريتانية لطب الأطفال</div>
            <div className="logo-text-fr">Société Mauritanienne de Pédiatrie</div>
          </div>
        </div>
        <ul className="navbar-menu">
          <li><a href={isHomePage ? "#accueil" : "/#accueil"}>Accueil</a></li>
          <li><a href={isHomePage ? "#programme" : "/#programme"}>Congrès</a></li>
          <li><a href={isHomePage ? "#sponsor" : "/#sponsor"}>Sponsor</a></li>
          <li 
            className="dropdown-menu-item"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href={isHomePage ? "#membre" : "/#membre"} className="dropdown-toggle">
              SOMAUPED
              <span className="dropdown-arrow">▼</span>
            </a>
            {dropdownOpen && (
              <div className="dropdown-submenu">
                <ul className="dropdown-submenu-inner">
                  <li><a href={isHomePage ? "#membre" : "/#membre"} onClick={closeDropdown}>Bureau</a></li>
                  <li><Link to="/adherants" onClick={closeDropdown}>Adhérant</Link></li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
