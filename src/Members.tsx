import './Members.css';

const Members = () => {
  const members = [
    {
      name: "PR ISSELMOU KHALIFA",
      position: "Président",
      image: "/src/images/author1.jpg"
    },
    {
      name: "PR AHMED FEIL",
      position: "1er Vice-Président",
      image: "/src/images/author2.jpg"
    },
    {
      name: "PR MOHAMED ELY TELMOUDI",
      position: "2e Vice-Président",
      image: "/src/images/author3.jpg"
    },
    {
      name: "DR EKHT ELBENINE ZEIN",
      position: "3e Vice-Présidente",
      image: "/src/images/author7.jpg"
    },
    {
      name: "DR MARIEME SIDATT",
      position: "Secrétaire Générale",
      image: "/src/images/author4.jpg"
    },
    {
      name: "DR NASSER EDDINE ABDELLAHI",
      position: "Secrétaire Général Adjoint",
      image: "/src/images/author5.jpg"
    },
    {
      name: "DR AMINA NDIAYE",
      position: "Trésorière",
      image: "/src/images/author6.jpg"
    },
    {
      name: "DR HAMDY MOUSTAPHA",
      position: "Trésorier Adjoint",
      image: "/src/images/author8.jpg"
    },
    {
      name: "DR AISSATA BA",
      position: "Assesseur",
      image: "/src/images/author9.jpg"
    },
    {
      name: "DR ABIDA MEGUEYA",
      position: "Assesseur",
      image: "/src/images/author1.jpg"
    },
    {
      name: "DR ABASS MOHAMED",
      position: "Assesseur",
      image: "/src/images/author2.jpg"
    },
    {
      name: "DR LEMRABOTT BEDDI",
      position: "Assesseur",
      image: "/src/images/author3.jpg"
    },
    {
      name: "DR AICHA BIHA",
      position: "Assesseur",
      image: "/src/images/author4.jpg"
    }
  ];

  return (
    <section id="membre" className="members-section">
      <div className="members-container">
        <div className="section-header">
          <h2 className="section-title">Membre SOMAUPED</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="members-grid">
          {members.map((member, index) => (
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
    </section>
  );
};

export default Members;
