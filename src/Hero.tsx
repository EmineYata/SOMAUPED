import { useState, useEffect } from 'react';
import logo from './images/logo.png';
import './Hero.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 752,
    hours: 17,
    minutes: 22,
    seconds: 55
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="accueil" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-logos">
          <img src={logo} alt="SOMAUPED" className="hero-logo" />
          <img src="/src/images/logo2.png" alt="Ministère" className="hero-logo-ministry" />
        </div>
        
        <div className="hero-subtitle">تحت رعاية معالي وزيرة الصحة</div>
        <div className="hero-subtitle-fr">Sous le patronage de son excellence la ministre de la santé</div>
        
        <h1 className="hero-title-ar">المؤتمر الوطني السادس عشر لطب الأطفال</h1>
        <h1 className="hero-title">XVIème Congrès National de PEDIATRIE</h1>
        
        <div className="hero-info">
          <div className="hero-location">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Hotel Monotel Dar El Barka, Nouakchott
          </div>
          <div className="hero-date">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            13-15 October, 2023
          </div>
        </div>

        <div className="countdown">
          <div className="countdown-item">
            <div className="countdown-value">-{timeLeft.days}</div>
            <div className="countdown-label">JOURS</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.hours}</div>
            <div className="countdown-label">HEURES</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.minutes}</div>
            <div className="countdown-label">MINUTES</div>
          </div>
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.seconds}</div>
            <div className="countdown-label">SECONDES</div>
          </div>
        </div>
      </div>
      
      <div className="hero-shapes">
        <img src="/src/images/shapes/1.png" className="shape shape-1" alt="" />
        <img src="/src/images/shapes/2.png" className="shape shape-2" alt="" />
        <img src="/src/images/shapes/3.png" className="shape shape-3" alt="" />
        <img src="/src/images/shapes/4.png" className="shape shape-4" alt="" />
      </div>
    </section>
  );
};

export default Hero;
