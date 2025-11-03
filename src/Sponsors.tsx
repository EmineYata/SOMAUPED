import './Sponsors.css';

const Sponsors = () => {
  const platinumSponsors = [
    { image: "/src/images/platinum-partner1.png" },
    { image: "/src/images/platinum-partner2.png" }
  ];

  const pharmalys = { image: "/src/images/gold-partner1.png" };

  const goldSponsors = [
    { image: "/src/images/gold-partner2.png" },
    { image: "/src/images/gold-partner3.png" }
  ];

  const goldLogos = [
    { image: "/src/images/logo10.png", name: "Nestlé" },
    { image: "/src/images/logo11.png", name: "Organon" },
    { image: "/src/images/logo12.png", name: "France Lait" },
    { image: "/src/images/logo13.png", name: "Biomerieux" },
    { image: "/src/images/logo14.png", name: "Paolo Chiesi" },
    { image: "/src/images/logo15.png", name: "Respiro" }
  ];

  const silverSponsors = [
    { image: "/src/images/platinum-partner3.png" },
    { image: "/src/images/platinum-partner4.png" }
  ];

  const silverLogos = [
    { image: "/src/images/logo16.png", name: "Sahema" },
    { image: "/src/images/logo17.png", name: "Basi" },
    { image: "/src/images/logo18.png", name: "Swisslac" },
    { image: "/src/images/logo19.png", name: "Abbott" },
    { image: "/src/images/logo20.png", name: "Ninolac" },
    { image: "/src/images/logo23.png", name: "SAGA" },
    { image: "/src/images/logo24.png", name: "LPM" },
    { image: "/src/images/logo30.png", name: "AP" },
    { image: "/src/images/logo31.png", name: "Kothar Medical" },
    { image: "/src/images/logo32.png", name: "Fine's" }
  ];

  return (
    <section id="sponsor" className="sponsors-section">
      <div className="sponsors-container">
        <div className="sponsors-header">
          <div className="sponsors-circle">
            <span className="sponsors-circle-text">NOS<br/>PARTENAIRES</span>
          </div>
        </div>

        {/* PLATINUM SPONSOR */}
        <div className="sponsor-tier platinum-tier">
          <div className="tier-badges">
            <div className="tier-badge hexagon">
              <img src={platinumSponsors[0].image} alt="Platinum 1" />
            </div>
            <h3 className="tier-title">PLATINUM SPONSOR</h3>
            <div className="tier-badge hexagon">
              <img src={platinumSponsors[1].image} alt="Platinum 2" />
            </div>
          </div>
        </div>

        <div className="sponsor-divider"></div>

        {/* PHARMALYS - Grand sponsor unique */}
        <div className="main-sponsor">
          <img src={pharmalys.image} alt="Pharmalys" />
        </div>

        <div className="sponsor-divider"></div>

        {/* GOLD SPONSOR */}
        <div className="sponsor-tier gold-tier">
          <div className="tier-badges">
            <div className="tier-badge hexagon-gold">
              <img src={goldSponsors[0].image} alt="Gold 1" />
            </div>
            <h3 className="tier-title gold">GOLD SPONSOR</h3>
            <div className="tier-badge hexagon-gold">
              <img src={goldSponsors[1].image} alt="Gold 2" />
            </div>
          </div>
        </div>

        <div className="sponsor-logos-grid">
          {goldLogos.map((logo, index) => (
            <div key={index} className="sponsor-logo-item">
              <img src={logo.image} alt={logo.name} />
            </div>
          ))}
        </div>

        <div className="sponsor-divider"></div>

        {/* SILVER SPONSOR */}
        <div className="sponsor-tier silver-tier">
          <div className="tier-badges">
            <div className="tier-badge hexagon-silver">
              <img src={silverSponsors[0].image} alt="Silver 1" />
            </div>
            <h3 className="tier-title silver">SILVER SPONSOR</h3>
            <div className="tier-badge hexagon-silver">
              <img src={silverSponsors[1].image} alt="Silver 2" />
            </div>
          </div>
        </div>

        <div className="sponsor-logos-grid silver-grid">
          {silverLogos.map((logo, index) => (
            <div key={index} className="sponsor-logo-item">
              <img src={logo.image} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
