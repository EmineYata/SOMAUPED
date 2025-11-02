import './Sponsors.css';

const Sponsors = () => {
  const partners = [
    {
      name: "Ministère de la Santé",
      image: "/src/images/logo2.png"
    },
    {
      name: "Le Conseil Régional de Nouakchott",
      image: "/src/images/logo3.png"
    },
    {
      name: "Faculté de Médecine, de Pharmacie et d'Odonto-Stomatologie",
      image: "/src/images/logo4.png"
    },
    {
      name: "Caisse Nationale d'Assurance Maladie",
      image: "/src/images/logo5.png"
    },
    {
      name: "Centrale d'Achat des Médicaments et consommables",
      image: "/src/images/logo6.png"
    }
  ];

  const sponsors = [
    {
      name: "Wellneos",
      image: "/src/images/logo7.png"
    },
    {
      name: "Picot",
      image: "/src/images/logo8.png"
    },
    {
      name: "SAGA",
      image: "/src/images/logo9.png"
    }
  ];

  return (
    <section id="sponsor" className="sponsors-section">
      <div className="sponsors-container">
        <div className="section-header">
          <h2 className="section-title">Sponsors et Partners</h2>
          <div className="title-underline"></div>
        </div>

        <div className="sponsors-category">
          <h3 className="category-title">PARTNERS</h3>
          <div className="sponsors-grid partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="sponsor-item">
                <div className="sponsor-logo">
                  <img src={partner.image} alt={partner.name} />
                </div>
                <p className="sponsor-name">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="sponsors-category">
          <h3 className="category-title sponsors-title">SPONSORS</h3>
          <div className="sponsors-grid">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-item">
                <div className="sponsor-logo">
                  <img src={sponsor.image} alt={sponsor.name} />
                </div>
                <p className="sponsor-name">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
