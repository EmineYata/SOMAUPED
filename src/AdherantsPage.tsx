import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import './Members.css';

const AdherantsPage = () => {
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
    "DR SID'AHMED EL WAVI",
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
    "DR LEMRABET SID'AHMED HABIB",
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
    "DR MOUNINA SID'EL MOKHTAR",
    "DR ROKIA MAGUIRAGA",
    "DR ELBAR BABA CHEIKH",
  ];

  const adherants = adherantNames.map(name => ({
    name,
    position: "Adhérant",
  }));

  return (
    <div className="app">
      <Navbar />
      <main>
        <section className="members-section">
          <div className="members-container">
            <div className="section-header">
              <h2 className="section-title">ADHÉRANTS</h2>
              <div className="title-underline"></div>
            </div>

            {/* Section Adhérants */}
            <div className="members-subsection">
              <div className="members-grid adherants-grid">
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
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AdherantsPage;
