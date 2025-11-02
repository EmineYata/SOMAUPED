import logo from './images/logo.png';
import './Navbar.css';

const Navbar = () => {
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
          <li><a href="#membre">Membre SOMAUPED</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
