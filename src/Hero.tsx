import { useState, useEffect } from 'react';
import logo from './images/logo.png';
import mainBg1 from './images/main6.jpg';
import mainBg2 from './images/los.png';
import mainBg3 from './images/main5.webp';
import './Hero.css';

const Hero = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-11-20T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const backgroundImages = [mainBg1 ,mainBg3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Timer pour le compte à rebours
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Carrousel d'images automatique
  useEffect(() => {
    const carousel = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(carousel);
  }, []);

  return (
    <section id="accueil" className="hero">
      {/* Images de fond en carrousel */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-logos">
          <img src={logo} alt="SOMAUPED" className="hero-logo" />
          <img src="/src/images/logo2.png" alt="Ministère" className="hero-logo-ministry" />
        </div>
        
        <div className="hero-subtitle">تحت رعاية معالي وزيرة الصحة</div>
        <div className="hero-subtitle-fr">Sous le patronage de son excellence la ministre de la santé</div>
        
        <h1 className="hero-title-ar">المؤتمر المغاربي الحادي والأربعون لطب الأطفال</h1>
        <h1 className="hero-title">41ème Congrès Maghrébin de PÉDIATRIE</h1>
        <h2 className="hero-subtitle-congress">Congrès de l'APLF</h2>
        <h2 className="hero-subtitle-congress">18ème Congrès National de PÉDIATRIE</h2>
        
        <div className="hero-info">
          <div className="hero-location">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Palais des Congrès - Nouakchott
          </div>
          <div className="hero-date">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            20-21-22 Novembre, 2025
          </div>
        </div>

        <div className="countdown">
          <div className="countdown-item">
            <div className="countdown-value">{timeLeft.days}</div>
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

      {/* Indicateurs de carrousel */}
      <div className="carousel-indicators">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
