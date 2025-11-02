import logo from './images/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="SOMAUPED" className="footer-logo" />
        <p className="footer-text">
          Copyright © 2023 SOMAUPED . All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
