import { useState } from 'react';
import './Agenda.css';

const Agenda = () => {
  const [activeDay, setActiveDay] = useState('day1');

  const agendaData = {
    day1: {
      title: "1ER JOUR",
      subtitle: "JEUDI 20 NOVEMBRE 2025",
      sessions: [
        {
          time: "08h00 - 09h00",
          title: "ACCUEIL ET INSCRIPTION",
          rooms: []
        },
        {
          time: "09h00 - 10h30",
          title: "CONGRÈS MAGHRÉBIN",
          rooms: [
            {
              name: "Salle 1 - CO1",
              moderators: "A Feil, W Messadi, K Bouayad",
              sessions: ["9 Communications : 8 min + 2 min de discussion"]
            },
            {
              name: "Salle 2 - CO2",
              moderators: "E B Zein, L Haddad, M khemiri",
              sessions: ["9 Communications : 8 min + 2 min de discussion"]
            },
            {
              name: "Salle 3 - ATELIER 1",
              moderators: "",
              sessions: ["Aérosolthérapie"]
            }
          ]
        },
        {
          time: "10h30 - 11h00",
          title: "PAUSE CAFÉ",
          rooms: []
        },
        {
          time: "11h00 - 12h30",
          title: "SESSIONS PARALLÈLES",
          rooms: [
            {
              name: "Salle 1 - SESSION RHUMATO/SYSTÈME",
              moderators: "N Dini, R Abourra, M Khemiri, A Linglart",
              sessions: [
                "Arthrites juvéniles idiopathiques - K Bouayad (Maroc)",
                "Syndrome d'activation macrophagique - W Messadi (Algérie)",
                "La fièvre méditerranéenne familiale - Z Fitouri (Tunisie)"
              ]
            },
            {
              name: "Salle 2 - SESSION DERMATOLOGIE",
              moderators: "M S Afif, E Samoud, A Oussedik",
              sessions: [
                "La télédermatologie - H Maouche (Algérie), M Ely Telmoudi, A Youssouf",
                "Dermatoses infectieuses",
                "Cas cliniques de dermatologie - E Mahé (France)"
              ]
            },
            {
              name: "Salle 3 - ATELIER 2",
              moderators: "L Karboubi (Maroc), M Sidatt (Mauritanie)",
              sessions: [
                "Simulation/Urgences pédiatrie",
                "Importance du diagnostic précoce en Oncologie - L Hsissen (Maroc)"
              ]
            }
          ]
        },
        {
          time: "12h30 - 13h30",
          title: "SYMPOSIUM",
          rooms: [
            {
              name: "Salle 1 - LABORATOIRE PHARMALYS",
              moderators: "I Khalifa",
              sessions: ["Prise en charge des mangeurs difficiles et des faibles poids - P Tounian"]
            },
            {
              name: "Salle 2 - ETHICA/ORGANON",
              moderators: "E Mahé",
              sessions: ["Prise en charge de la dermatite atopique chez l'enfant - M Kébé"]
            }
          ]
        },
        {
          time: "13h30 - 15h00",
          title: "PAUSE-DÉJEUNER",
          rooms: []
        },
        {
          time: "15h30 - 17h00",
          title: "SESSIONS PARALLÈLES",
          rooms: [
            {
              name: "Salle 1 - TR TUBERCULOSE",
              moderators: "H Maouche, T Sfar, L Karboubi, M E Telmoudi",
              sessions: [
                "Aspects épidémiologiques - E Kane (Mauritanie)",
                "Nouveautés dans le diagnostic - M Bouskraoui (Maroc)",
                "Traitement actuel - M Khemiri (Tunisie)",
                "L'infection tuberculeuse latente - R Boukari (Algérie)"
              ]
            },
            {
              name: "Salle 2 - SESSION PNEUMOLOGIE",
              moderators: "R Boukari, F Amon, F Bakouche",
              sessions: [
                "Nouveautés dans l'asthme préscolaire - N Dini (Maroc)",
                "Asthme de l'enfant de plus de 6 ans - L Smati (Algérie)",
                "Pneumopathies interstitielles - S Hamouda (Tunisie)",
                "Approche diagnostique de la Mucoviscidose - A Hassani (Maroc)"
              ]
            }
          ]
        },
        {
          time: "17h00 - 17h30",
          title: "PAUSE CAFÉ",
          rooms: []
        },
        {
          time: "17h30 - 18h30",
          title: "SÉANCE D'INAUGURATION OFFICIELLE",
          rooms: []
        }
      ]
    },
    day2: {
      title: "2ÈME JOUR",
      subtitle: "VENDREDI 21 NOVEMBRE 2025",
      sessions: [
        {
          time: "08h00 - 09h30",
          title: "COMMUNICATIONS ORALES",
          rooms: [
            {
              name: "Salle 1 - CO3",
              moderators: "M Sidatt, W Messadi, S Hamnouda",
              sessions: ["9 Communications : 8 min + 2 min de discussion"]
            },
            {
              name: "Salle 2 - CO4",
              moderators: "E B Zein, A Oulmaati, O Bouyahya",
              sessions: ["9 Communications : 8 min + 2 min de discussion"]
            },
            {
              name: "Salle 3 - ATELIER 3",
              moderators: "O Benrabah, M Mokhtari, A Feil, H Rabani",
              sessions: [
                "Réa néo en salle de naissance",
                "2 ateliers : 1 pour les médecins et 1 pour les sages femmes"
              ]
            }
          ]
        },
        {
          time: "09h30 - 11h00",
          title: "SESSIONS PARALLÈLES",
          rooms: [
            {
              name: "Salle 1 - SESSION PALUDISME",
              moderators: "D Enyama, R Diagne, H Haas, M Bouskraoui",
              sessions: [
                "Aspects épidémiologiques - S Ategbo (Gabon)",
                "Complications du paludisme - M Sidatt (Mauritanie)",
                "Paludisme du nouveau-né - M Amorassini Folquet (Cote d'Ivoire)",
                "Prévention du paludisme - S Ategbo, M Abass"
              ]
            },
            {
              name: "Salle 2 - SESSION CAS CLINIQUES",
              moderators: "L Smati, J M Pedespan, N Siala, O Ndiaye",
              sessions: [
                "Pédiatrie générale - E Samoud (Tunisie)",
                "Pneumo/Allergo - N Dini (Maroc)",
                "Gastro-entérologie et nutrition - R Belbouab (Algérie)"
              ]
            },
            {
              name: "Salle 3 - ATELIER 4",
              moderators: "O Bouyahya (Tunisie), A Megueya (Mauritanie)",
              sessions: ["Cholestases de l'enfant : Pas à Pas"]
            }
          ]
        },
        {
          time: "11h00 - 11h30",
          title: "PAUSE CAFÉ",
          rooms: []
        },
        {
          time: "11h30 - 13h00",
          title: "SESSIONS PARALLÈLES",
          rooms: [
            {
              name: "Salle 1 - ENDOCRINO/MÉTABOLIQUES",
              moderators: "S Hamouda, K Benhalla, L Hsissen, Y Khalef",
              sessions: [
                "Retard de croissance",
                "Urgences endocriniennes néonatales - A Linglart (France)",
                "Les mucopolysaccharidoses - N Dini (Maroc)"
              ]
            },
            {
              name: "Salle 2 - GASTRO-ENTÉROLOGIE-NUTRITION",
              moderators: "O Bouyahya, D Benlahcene, R Belbouab",
              sessions: [
                "Diversification alimentaire, Allergie aux PLV - P Tounian (France)",
                "Les œsophagites à éosinophiles - N Siala (Tunisie)",
                "CAT devant une élévation des transaminases - O Bouyahya",
                "Les gastrites à HP - L Beddi (Mauritanie)"
              ]
            }
          ]
        },
        {
          time: "13h00 - 15h00",
          title: "PAUSE-DÉJEUNER (ET PRIÈRE)",
          rooms: []
        },
        {
          time: "15h00 - 16h00",
          title: "SYMPOSIUM",
          rooms: [
            {
              name: "Salle 1 - BIOMERIEUX",
              moderators: "M Bouskraoui",
              sessions: ["Impact de l'approche syndromique (PCR FilmArray) sur le diagnostic rapide"]
            },
            {
              name: "Salle 2 - LABORATOIRE NESTLE",
              moderators: "A Feil",
              sessions: ["Probiotiques et HMO - I Khalifa (Mauritanie)"]
            }
          ]
        },
        {
          time: "16h00 - 17h30",
          title: "SESSIONS PARALLÈLES",
          rooms: [
            {
              name: "Salle 1 - SESSION INFECTIOLOGIE",
              moderators: "M Amorassini, K Benhalla, Z Fitouri, M Sylla",
              sessions: [
                "Infections respiratoires virales - H Haas (France), N E Abdellahi",
                "Problématique des résistances aux antibiotiques - M Bouskraoui",
                "Bronchopneumopathies communautaires - F Amon (Cote d'Ivoire)"
              ]
            },
            {
              name: "Salle 2 - SESSION NÉPHROLOGIE",
              moderators: "M Jellouli, M Boutaba, A Dahmoud",
              sessions: [
                "Nouveautés dans la PEC du syndrome néphrotique - M Jellouli (Tunisie)",
                "HTA de l'enfant - S Mabrouk (Tunisie)",
                "Syndrome hémolytique et urémique - N E Abdellahi",
                "La dialyse chez l'enfant - M Boutaba (Algerie)"
              ]
            }
          ]
        },
        {
          time: "17h30 - 18h00",
          title: "PAUSE CAFÉ",
          rooms: []
        },
        {
          time: "18h00 - 19h30",
          title: "SESSIONS PARALLÈLES",
          rooms: [
            {
              name: "Salle 1 - SESSION DRÉPANOCYTOSE",
              moderators: "M Amorassini, S Ategbo, M Elkhorassani, M Boutaba",
              sessions: [
                "Drépanocytose chez l'enfant en Mauritanie - A Biha",
                "Complications infectieuses - S A Soufiane",
                "Complications non infectieuses - A Diakite (Mali)",
                "Prise en charge du syndrome thoracique aigu"
              ]
            },
            {
              name: "Salle 2 - SESSION NÉONATOLOGIE 1",
              moderators: "O Claris, M Mokhtari, M Sidatt, A Faraj",
              sessions: [
                "Les défis de la Néonatologie - J Haddad (Liban)",
                "Le traitement de l'asphyxie par hypothermie - MF Maoulainine",
                "CAT devant une hypoglycémie néonatale - E Ben Hamida (Tunisie)",
                "Les anémies du nouveau-né - F Thabet (Tunisie), A Oulmaati (Maroc)"
              ]
            }
          ]
        }
      ]
    },
    day3: {
      title: "3ÈME JOUR",
      subtitle: "SAMEDI 22 NOVEMBRE 2025",
      sessions: [
        {
          time: "08h00 - 09h30",
          title: "COMMUNICATIONS ORALES",
          rooms: [
            {
              name: "Salle 1 - CO5",
              moderators: "M Bezeid, L Haddad, S Mabrouk",
              sessions: ["9 Communications : 8 min + 2 min de discussion"]
            },
            {
              name: "Salle 2 - CO6",
              moderators: "K Mekhalle, Z Fitouri, K Haddad",
              sessions: ["9 Communications : 8 min + 2 min de discussion"]
            },
            {
              name: "Salle 3 - ATELIER 5",
              moderators: "T Sfar, L Boughamoura, M Bouskraoui, L Beddi",
              sessions: ["Rattrapage vaccinal"]
            }
          ]
        },
        {
          time: "09h30 - 11h00",
          title: "SESSIONS PARALLÈLES",
          rooms: [
            {
              name: "Salle 1 - TR: STRATÉGIES HIV DE L'ENFANT",
              moderators: "D Chello, S Ategbo, M Bouskraoui, L Boughamoura",
              sessions: [
                "Expérience pays : D Enyama (Cameroun), A Ndongo (Cameroun)",
                "Dr Mariem Sylla (Mali), Dr Rama Diagne (Sénégal), H Kébé (Mauritanie)"
              ]
            },
            {
              name: "Salle 2 - SESSION NÉONATOLOGIE 2",
              moderators: "M F Maoulainine, M Doagi, N Youssef, A Feil",
              sessions: [
                "Les infections nosocomiales - O Claris (France)",
                "Les infections néonatales précoces - O Claris (France)",
                "La fièvre du nouveau-né - M Sidatt (Mauritanie)"
              ]
            },
            {
              name: "Salle 3 - ATELIER 6",
              moderators: "H Afilal (Maroc), N E Abdellahi (Mauritanie)",
              sessions: ["Les chocs hémodynamiques pour les nuls"]
            }
          ]
        },
        {
          time: "11h00 - 11h30",
          title: "PAUSE CAFÉ",
          rooms: []
        },
        {
          time: "11h30 - 13h00",
          title: "SESSIONS PARALLÈLES",
          rooms: [
            {
              name: "Salle 1 - SESSION CARDIOLOGIE",
              moderators: "M S Aghrabat, A Hassani, Z Fitouri",
              sessions: [
                "Myocardites",
                "Place de l'évaluation cardiovasculaire dans le syndrome de Turner - R Aboura (Algerie)",
                "Dépistage des Cardiopathies congénitales - A Boye, F Gouhi"
              ]
            },
            {
              name: "Salle 2 - SESSION PÉDOPSYCHIATRIE",
              moderators: "A Elmedani, J M Pedespan, K Haddad",
              sessions: [
                "Spectre de l'autisme - A Oussedik (Algérie)",
                "TDAH - F Gouhi (Mauritanie)",
                "Toxicomanie chez l'adolescent - M Hamdy (Mauritanie)"
              ]
            },
            {
              name: "Salle 3 - ATELIER 7",
              moderators: "M Elkhorassani, L Hsissen, E Zein",
              sessions: ["Hémophilie/Oncopédiatrie"]
            }
          ]
        },
        {
          time: "13h00 - 14h30",
          title: "PAUSE-DÉJEUNER",
          rooms: []
        },
        {
          time: "15h00 - 16h00",
          title: "SYMPOSIUM",
          rooms: [
            {
              name: "Salle 1 - FONDATION CHIESI",
              moderators: "O Ndiaye",
              sessions: [
                "Fondation Paolo Chiesi : Innover et agir pour la santé périnatale",
                "Modèle NEST - F Cassera, F Bianco, O Mouhamadou, A Dogo"
              ]
            },
            {
              name: "Salle 2 - LABORATOIRE FRANCE LAIT",
              moderators: "M Telmoudi",
              sessions: [
                "Prise en charge des troubles digestifs fonctionnels du nourrisson - I Khalifa"
              ]
            }
          ]
        },
        {
          time: "15h30 - 17h00",
          title: "SESSIONS PARALLÈLES",
          rooms: [
            {
              name: "Salle 1 - SESSION NÉONATOLOGIE 3",
              moderators: "O Claris, E Benhamida, H Afilal, K Mekhalle",
              sessions: [
                "Entérocolites - M Mokhtari (Maroc)",
                "Membranes hyalines - O N'Diaye (Sénégal)",
                "Alimentation du prématuré - M Mokhtari (Maroc)"
              ]
            },
            {
              name: "Salle 2 - SESSION URGENCES/RÉANIMATION",
              moderators: "K Menif, M Sidatt, L Karboubi, A Ndiaye",
              sessions: [
                "Prise en charge du choc septique de l'enfant - K Menif (Tunisie)",
                "Intoxications - L Karboubi (Maroc)",
                "Prise en charge d'un état de mal convulsif - F Thabet (Tunisie)"
              ]
            },
            {
              name: "Salle 3 - ATELIER 8",
              moderators: "L Haddad (Algérie), M Hamdy (Mauritanie)",
              sessions: ["ECG de l'enfant"]
            }
          ]
        },
        {
          time: "17h00 - 17h30",
          title: "PAUSE CAFÉ",
          rooms: []
        },
        {
          time: "17h30 - 19h00",
          title: "SESSIONS PARALLÈLES",
          rooms: [
            {
              name: "Salle 1 - SESSION VACCINATION",
              moderators: "L Boughamoura, M S Afif, M Mohamed Ahmed",
              sessions: [
                "Coqueluche - R Boukari (Algerie)",
                "HPV, VRS - T Sfar (Tunisie), H Haas (France)",
                "Vaccinations complémentaires (HVA, Meningo, Varicelle, grippe) - M Bouskraoui"
              ]
            },
            {
              name: "Salle 2 - SESSION NEUROLOGIE",
              moderators: "P Tounian, M Diagana, Belbouab, M E Telmoudi",
              sessions: [
                "Épilepsies idiopathiques de l'enfant - K Haddad (Algérie)",
                "Aspects syndromiques - A El Medani (Maroc)",
                "Classification des épilepsies - S Daddah (Mauritanie)",
                "Quand débuter le traitement - J M Pedespan (France)"
              ]
            }
          ]
        },
        {
          time: "19h00 - 19h30",
          title: "CLÔTURE",
          rooms: []
        }
      ]
    }
  };

  return (
    <section id="agenda" className="agenda-section">
      <div className="agenda-hero">
        <div className="agenda-hero-overlay"></div>
        <h2 className="agenda-hero-title">PROGRAMME</h2>
        <p className="agenda-hero-subtitle">20-21-22 Novembre 2025</p>
      </div>
      <div className="agenda-container">

        <div className="agenda-tabs">
          <button 
            className={`agenda-tab ${activeDay === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveDay('day1')}
          >
            {agendaData.day1.title}
            <span className="tab-date">{agendaData.day1.subtitle}</span>
          </button>
          <button 
            className={`agenda-tab ${activeDay === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveDay('day2')}
          >
            {agendaData.day2.title}
            <span className="tab-date">{agendaData.day2.subtitle}</span>
          </button>
          <button 
            className={`agenda-tab ${activeDay === 'day3' ? 'active' : ''}`}
            onClick={() => setActiveDay('day3')}
          >
            {agendaData.day3.title}
            <span className="tab-date">{agendaData.day3.subtitle}</span>
          </button>
        </div>

        <div className="agenda-content">
          {agendaData[activeDay as keyof typeof agendaData].sessions.map((session, index) => (
            <div key={index} className="agenda-item-new">
              <div className="agenda-time">{session.time}</div>
              <div className="agenda-details-new">
                <h3 className="agenda-session-title">{session.title}</h3>
                {session.rooms && session.rooms.length > 0 && (
                  <div className="agenda-rooms">
                    {session.rooms.map((room, idx) => (
                      <div key={idx} className="room-card">
                        <h4 className="room-name">{room.name}</h4>
                        {room.moderators && (
                          <p className="room-moderators">
                            <strong>Modérateurs:</strong> {room.moderators}
                          </p>
                        )}
                        <ul className="room-sessions">
                          {room.sessions.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
