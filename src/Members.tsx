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

  const adherantNames = [
    "PR ISSELMOU KHALIFA",
    "PR AHMED FEIL",
    "PR YACOUB KHALEF",
    "PR MOHAMED TELMOUDI",
    "PR ABDELLAHI WEDDIH",
    "PR CHEIKH ABDELLAHI",
    "PR MOUNA SIDATT",
    "PR SIDI BRAHIM SID OUMAR",
    "PR OUKHTELBENINA ZEIN",
    "PR ZEINABOU HAIDY",
    "DR SIDI MOHAMED SIDI MAHMOUD",
    "DR AISSATA BA",
    "DR Ahmed DAHMOUD",
    "DR KHATRY MEKHALE",
    "DR MARIEM SIDI BRAHIM",
    "DR SAADBOUH AMAR BEBATT",
    "PR BEZEID MOHAMEDEN",
    "DR MOHAMED LEMINE CHERIF ELVAGHIH",
    "DR ABASS MOHAMED",
    "DR NASSERDINE ABDELLAHI",
    "DR AHMED YOUSSEF",
    "DR AMINA NDIAYE",
    "DR CHEIKHNA MEYABA",
    "DR EBIBECRINE LEMRABETT",
    "DR MOHAMED LEMINE TALEB AHMED",
    "DR HOUDA RABBANY",
    "DR SID’AHMED EL WAVI",
    "DR LEMRABET BEDDI",
    "DR MAIMOUNA SEPTI",
    "DR MOHAMED TALEB",
    "DR NOUMA LEBATT",
    "DR MOULAYE ZEINE MOHAMED MAHMOUD",
    "DR TEWFIGH GHADOUR",
    "DR SIDI MOHAMED ELHACENE",
    "DR VAYZE AHMED ELBECHIR",
    "DR AHMED SALEM HMETY",
    "DR ABIDA AHMED MEGAYA",
    "DR AHMED BEZEID",
    "DR AICHA BIHA",
    "DR MOHAMED DIAGANA",
    "DR ABDELLAHI ELWELY",
    "DR EMMANETOULLAH MAMMINE",
    "DR MOHAMED KANE",
    "DR LEMRABET SID’AHMED HABIB",
    "DR MOHAMED TIYIB ELIDI",
    "DR MLOHAMEDOU AHMED GUEDDAR",
    "DR MOHAMED MENE",
    "DR MARIEME ABDELLAHI",
    "DR CHEIKH ELMOUSTAINE BOUBY",
    "DR DIANGO MAMADOU WAGUE",
    "DR TAHER BAMINE",
    "DR ZEINE EL ABIDINE MOHAMED MOUSTAPHA",
    "DR ABDI BOUKHAIR",
    "DR MOHAMED LEINE KEBAD",
    "DR MAMADOU ATHIE",
    "DR JAFAR TANDIA",
    "DR MOUNINA SID’EL MOKHTAR",
    "DR ROKIA MAGUIRAGA",
    "DR ELBAR BABA CHEIKH",
  ];

  const adherants = adherantNames.map(name => ({
    name,
    position: "Adhérant",
  }));

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
          <div className="members-grid">
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

        {/* Section Adhérants */}
        <div className="members-subsection">
          <h3 className="subsection-title">Adhérants</h3>
          <div className="members-grid">
            {adherants.map((member, index) => (
              <div key={index} className="member-card adherant-card">
                <div className="member-icon-wrapper">
                  <svg className="member-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" fill="currentColor"/>
                    <path d="M20 21C20 17.134 16.418 14 12 14C7.582 14 4 17.134 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
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
