import './Members.css';

const Members = () => {
  const members = [
    {
      name: "Pr I Khalifa",
      position: "Président",
      image: "/src/images/author1.jpg"
    },
    {
      name: "Pr A FEIL",
      position: "Vice-président",
      image: "/src/images/author2.jpg"
    },
    {
      name: "Dr. BENINA",
      position: "Vice-président",
      image: "/src/images/author3.jpg"
    },
    {
      name: "Dr.M SIDATT",
      position: "Secrétaire Général",
      image: "/src/images/author4.jpg"
    },
    {
      name: "Dr N ABDALLAHI",
      position: "Trésorier",
      image: "/src/images/author5.jpg"
    },
    {
      name: "Dr A NDIAY",
      position: "Membre",
      image: "/src/images/author6.jpg"
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
