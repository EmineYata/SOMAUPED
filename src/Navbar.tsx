import { useState } from 'react';
import logo from './images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#orateurs">Orateurs</a></li>
          <li><a href="#programme">Programme</a></li>
          <li><a href="#sponsor">Sponsor</a></li>
          <li 
            className="dropdown-menu-item"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <a href="#membre" className="dropdown-toggle">
              SOMAUPED
              <span className="dropdown-arrow">▼</span>
            </a>
            {dropdownOpen && (
              <div className="dropdown-submenu">
                <ul className="dropdown-submenu-inner">
                  <li><a href="#membre" onClick={closeDropdown}>Bureau</a></li>
                  <li><a href="#membre" onClick={closeDropdown}>Adhérant</a></li>
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
