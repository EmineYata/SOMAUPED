import './Speakers.css';

const Speakers = () => {
  const speakers = [
    {
      name: "Pr Abdi Ahmed Bonnahi",
      location: "Nouakchott",
      image: "/src/images/speakers1.jpg"
    },
    {
      name: "Pr M Bouskraoui",
      location: "Marrakech",
      image: "/src/images/speakers2.jpg"
    },
    {
      name: "Pr A Fell",
      location: "Nouakchott",
      image: "/src/images/speakers3.jpg",
      topics: "Topics1: Pédiatrie en maternité(impact des niveaux de soins et des réseaux périnataux sur la mortalité néonatale) Topics2:Symposium pharmalys..."
    },
    {
      name: "Pr A Fell",
      location: "Nouakchott",
      image: "/src/images/speakers4.jpg"
    },
    {
      name: "Dr BENINA",
      location: "Nouakchott",
      image: "/src/images/speakers5.jpg"
    },
    {
      name: "Pr Said Ahmed",
      location: "Marrakech",
      image: "/src/images/speakers6.jpg"
    },
    {
      name: "Dr M SIDATT",
      location: "Nouakchott",
      image: "/src/images/speakers7.jpg"
    },
    {
      name: "Dr N ABDALLAHI",
      location: "Nouakchott",
      image: "/src/images/speakers8.jpg"
    }
  ];

  return (
    <section className="speakers-section">
      <div className="speakers-container">
        <div className="section-header">
          <h2 className="section-title">Orateurs</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-card">
              <div className="speaker-image">
                <img src={speaker.image} alt={speaker.name} />
                <div className="speaker-overlay">
                  <div className="speaker-info">
                    <h3>{speaker.name}</h3>
                    <p>{speaker.location}</p>
                  </div>
                </div>
              </div>
              {speaker.topics && (
                <div className="speaker-topics">
                  <p>{speaker.topics}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
