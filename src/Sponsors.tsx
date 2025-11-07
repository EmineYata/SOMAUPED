import './Sponsors.css';

const Sponsors = () => {
  const toArray = (mod: Record<string, string>) => Object.values(mod) as string[];

  const institutionnels = toArray(import.meta.glob('./assets/INSTITUTIONNELS/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' }));
  const platinum = toArray(import.meta.glob('./assets/PLATINUM/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' }));
  const gold = toArray(import.meta.glob('./assets/GOLD/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' }));
  const silver = toArray(import.meta.glob('./assets/SILVER/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' }));

  return (
    <section id="sponsor" className="sponsors-section">
      <div className="sponsors-container">
        <div className="sponsors-header">
          <div className="sponsors-circle">
            <span className="sponsors-circle-text">NOS<br/>PARTENAIRES</span>
          </div>
        </div>

        {/* PARTENAIRES INSTITUTIONNELS */}
        <div className="sponsor-tier">
          <h3 className="tier-title">PARTENAIRES INSTITUTIONNELS</h3>
          <div className="sponsor-logos-grid">
            {institutionnels.map((src, i) => (
              <div key={`inst-${i}`} className="sponsor-logo-item">
                <img src={src} alt={`Institutionnel ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-divider"></div>

        {/* PLATINUM SPONSOR */}
        <div className="sponsor-tier platinum-tier">
          <h3 className="tier-title">PLATINUM SPONSOR</h3>
          <div className="tier-badges">
            {platinum.map((src, i) => (
              <div key={`pl-${i}`} className="tier-badge hexagon">
                <img src={src} alt={`Platinum ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-divider"></div>

        {/* GOLD SPONSOR */}
        <div className="sponsor-tier gold-tier">
          <h3 className="tier-title gold">GOLD SPONSOR</h3>
          <div className="tier-badges">
            {gold.map((src, i) => (
              <div key={`g-${i}`} className="tier-badge hexagon-gold">
                <img src={src} alt={`Gold ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="sponsor-divider"></div>

        {/* SILVER SPONSOR */}
        <div className="sponsor-tier silver-tier">
          <h3 className="tier-title silver">SILVER SPONSOR</h3>
          <div className="tier-badges">
            {silver.map((src, i) => (
              <div key={`s-${i}`} className="tier-badge hexagon-silver">
                <img src={src} alt={`Silver ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
