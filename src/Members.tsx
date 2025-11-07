import './Members.css';

const Members = () => {
  const bureau = [
    {
      name: "PR ISSELMOU KHALIFA",
      position: "Président",
      image: "/src/images/bureau/PR ISSELMOU KHALIFA.jpeg"
    },
    {
      name: "PR AHMED FEIL",
      position: "1er Vice-Président",
      image: "/src/images/bureau/PR AHMED FEIL.jpeg"
    },
    {
      name: "PR MOHAMED ELY TELMOUDI",
      position: "2e Vice-Président",
      image: "/src/images/bureau/PR MOHAMED ELY TELMOUDI.jpeg"
    },
    {
      name: "DR EKHT ELBENINE ZEIN",
      position: "3e Vice-Présidente",
      image: "/src/images/bureau/ekhtelbenin.png"
    },
    {
      name: "DR MARIEME SIDATT",
      position: "Secrétaire Générale",
      image: "/src/images/bureau/mariemsidatt.png"
    },
    {
      name: "DR NASSER EDDINE ABDELLAHI",
      position: "Secrétaire Général Adjoint",
      image: "/src/images/bureau/DR NASSER EDDINE ABDELLAHI.png"
    },
    {
      name: "DR AMINA NDIAYE",
      position: "Trésorière",
      image: "/src/images/bureau/amina ndiay.jpeg"
    },
    {
      name: "DR HAMDY MOUSTAPHA",
      position: "Trésorier Adjoint",
      image: "/src/images/bureau/DR HAMDY MOUSTAPHA.jpeg"
    },
    {
      name: "DR AISSATA BA",
      position: "Assesseur",
      image: "/src/images/bureau/aissata ba.png"
    },
    {
      name: "DR ABIDA MEGUEYA",
      position: "Assesseur",
      image: "/src/images/bureau/ABIDA MEGUEYA.png"
    },
    {
      name: "DR ABASS MOHAMED",
      position: "Assesseur",
      image: "/src/images/bureau/Abass.jpeg"
    },
    {
      name: "DR LEMRABOTT BEDDI",
      position: "Assesseur",
      image: "/src/images/bureau/DR LEMRABOTT BEDDI.jpeg"
    },
    {
      name: "DR AICHA BIHA",
      position: "Assesseur",
      image: "/src/images/bureau/aicha biha.jpeg"
    }
  ];


  return (
    <section id="membre" className="members-section">
      <div className="members-container">
        <div className="section-header">
          <h2 className="section-title">SOMAUPED</h2>
          <div className="title-underline"></div>
        </div>

        {/* Section Bureau */}
        <div className="members-subsection">
          <h3 className="subsection-title">Bureau</h3>
          <div className="members-grid bureau-grid">
            {bureau.map((member, index) => (
              <div key={index} className="member-card">
                <div className="member-image-wrapper">
                  <img src={member.image} alt={member.name} className="member-image" />
                </div>
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
