import { useState } from 'react';
import './Agenda.css';

const Agenda = () => {
  const [activeDay, setActiveDay] = useState('day1');

  const agendaData = {
    day1: {
      title: '1ER JOUR',
      subtitle: 'JEUDI 20 NOVEMBRE 2025',
      sessions: [
        { time: '08h00 - 09h00', title: 'ACCUEIL ET INSCRIPTION', rooms: [] },
        {
          time: '09h00 - 10h30',
          title: 'CONGRÈS MAGHRÉBIN',
          rooms: [
            { name: 'Salle 1 - COMMUNICATION ORALE 1', moderators: 'A Feil, W Messadi, K Bouayad', sessions: ['C1 à C7 : (8 min + 2 min de discussion)'] },
            { name: 'Salle 2 - COMMUNICATION ORALE 2', moderators: 'E B Zein, L Haddad, M khemiri', sessions: ['C8 à C14 : (8 min + 2 min de discussion)'] },
            { 
              name: 'Salle 3 - ATELIER 1', 
              moderators: 'H Maouche (Algérie), M Ely Telmoudi (Mauritanie), A Youssouf (Mauritanie)', 
              sessions: ['Aérosolthérapie'] 
            },
          ],
        },
        { time: '10h30 - 11h00', title: 'PAUSE CAFÉ', rooms: [] },
        {
          time: '11h00 - 12h30',
          title: 'SESSIONS PARALLÈLES',
          rooms: [
            {
              name: 'Salle 1 - SESSION RHUMATO/SYSTÈME',
              moderators: 'N Dini, R Abourra, M Khemiri, A Linglart',
              sessions: [
                "Arthrites juvéniles idiopathiques - K Bouayad (Maroc)",
                "Syndrome d'activation macrophagique - W Messadi (Algérie)",
                'La fièvre méditerranéenne familiale - Z Fitouri (Tunisie)',
                "Importance du diagnostic précoce en Oncologie - L Hsissen (Maroc)"
              ],
            },
            {
              name: 'Salle 2 - SESSION DERMATOLOGIE',
              moderators: 'M S Afif, E Samoud, A Oussedik, Y Mohamed Sghaier',
              sessions: [
                'La télédermatologie',
                'Dermatoses infectieuses',
                { title: 'Cas cliniques de dermatologie', speaker: 'E Mahé (France)' },
              ],
            },
            {
              name: 'Salle 3 - ATELIER 2',
              moderators: 'L Karboubi (Maroc), M Sidatt (Mauritanie)',
              sessions: ['Simulation/Urgences pédiatrie'],
            },
          ],
        },
        {
          time: '12h30 - 13h30',
          title: 'SYMPOSIUM',
          rooms: [
            { name: 'Salle 1 - LABORATOIRE PHARMALYS', moderators: 'I Khalifa', sessions: ["Prise en charge des mangeurs difficiles et des faibles poids - P Tounian"] },
            { name: 'Salle 2 - ETHICA/ORGANON', moderators: 'E Mahé', sessions: ["Prise en charge de la dermatite atopique chez l'enfant - M Kébé"] },
          ],
        },
        { time: '13h30 - 15h00', title: 'PAUSE-DÉJEUNER', rooms: [] },
        {
          time: '15h30 - 17h00',
          title: 'SESSIONS PARALLÈLES',
          rooms: [
            {
              name: 'Salle 1 - TR TUBERCULOSE',
              moderators: 'H Maouche, T Sfar, L Karboubi, M E Telmoudi',
              sessions: [
                "Aspects épidémiologiques - E Kane (Mauritanie)",
                "Nouveautés dans le diagnostic - M Bouskraoui (Maroc)",
                'Traitement actuel - M Khemiri (Tunisie)',
                "L'infection tuberculeuse latente - R Boukari (Algérie)",
              ],
            },
            {
              name: 'Salle 2 - SESSION PNEUMOLOGIE',
              moderators: 'L Smati, F Amon, F Albakoush, M Athié',
              sessions: [
                "Nouveautés dans l'asthme préscolaire - N Dini (Maroc)",
                "Asthme de l'enfant de plus de 6 ans - L Smati (Algérie)",
                'Pneumopathies interstitielles - S Hamouda (Tunisie)',
                "Approche diagnostique de la Mucoviscidose - A Hassani (Maroc)",
              ],
            },
            // { name: 'Salle 3', moderators: '', sessions: [] },
          ],
        },
        { time: '17h00 - 17h30', title: 'PAUSE CAFÉ', rooms: [] },
        { time: '17h30 - 18h30', title: "SÉANCE D'INAUGURATION OFFICIELLE", rooms: [] },
      ],
    },
    day2: {
      title: '2ÈME JOUR',
      subtitle: 'VENDREDI 21 NOVEMBRE 2025',
      sessions: [
        {
          time: '08h00 - 09h30',
          title: 'COMMUNICATIONS ORALES',
          rooms: [
            { name: 'Salle 1 - COMMUNICATION ORALE 3', moderators: 'M Sidatt, W Messadi, S Hamnouda', sessions: ['C15 à C21 : (8 min + 2 min de discussion)'] },
            { name: 'Salle 2 - COMMUNICATION ORALE 4', moderators: 'E B Zein, A Oulmaati, O Bouyahya', sessions: ['C22 à C28 : (8 min + 2 min de discussion)'] },
            { name: 'Salle 3 - ATELIER 3', moderators: 'O Benrabah (Algérie), M Mokhtari (Maroc), A Feil (Mauritanie), H Rabani (Mauritanie)', description: 'Réanimé en salle de naissance', note: '2 ateliers : 1 pour les médecins et 1 pour les sages femmes', sessions: [] },
          ],
        },
        {
          time: '09h30 - 11h00',
          title: 'SESSIONS PARALLÈLES',
          rooms: [
            {
              name: 'Salle 1 - SESSION PALUDISME',
              moderators: 'D Enyama, R Diagne, H Haas, M Bouskraoui',
              conference: 'Conférence : 20 min',
              discussion: 'Discussion globale : 10 min',
              sessions: [
                'Aspects épidémiologiques - S Ategbo (Gabon)',
                'Complications du paludisme - M Sidatt (Mauritanie)',
                "Paludisme du nouveau-né et du nourrisson de moins de 2 mois - M Amorassini Folguet (Cote d'Ivoire)",
                'Traitement actuel et nouveautés dans la prévention du paludisme - S Ategbo (Gabon)',
              ],
            },
            {
              name: 'Salle 2 - SESSION CAS CLINIQUES',
              moderators: 'R Boukari, J M Pedespan, N Siala, O Ndiaye',
              note: '(20 min par Orateur)',
              sessions: [
                'Pédiatrie générale - E Samoud (Tunisie)',
                'Pneumo/Allergo - N Dini (Maroc)',
                'Gastro-entérologie et nutrition - R Belbouab (Algérie)',
                'Néonatologie - M Abass (Mauritanie)',
              ],
            },
            { name: 'Salle 3 - ATELIER 4', moderators: '', description: "Cholestases de l'enfant : Pas à Pas", note: 'O Bouyahya (Tunisie)\nA Megueya (Mauritanie)', sessions: [] },
          ],
        },
        { time: '11h00 - 11h30', title: 'PAUSE CAFÉ', rooms: [] },
        {
          time: '11h30 - 13h00',
          title: 'SESSIONS PARALLÈLES',
          rooms: [
            {
              name: 'Salle 1 - SESSION ENDOCRINO/MÉTABOLIQUES',
              moderators: 'S Hamouda, B Al-Zoubi, L Hsissen, Y Khalef',
              conference: 'Conférence : 20 min',
              discussion: 'Discussion globale : 10 min',
              sessions: ['Retard de croissance', 'Urgences endocriniennes néonatales - A Linglart (France)', 'Les mucopolysaccharidoses - N Dini (Maroc)', 'CAT devant une élévation des transaminases - O Bouyahya (Tunisie)'],
            },
            {
              name: 'Salle 2 - SESSION GASTRO-ENTÉROLOGIE-NUTRITION',
              moderators: 'O Bouyahya, D Benlancene, R Belbouab, A Kane',
              conference: 'Conférence : 20 min',
              discussion: 'Discussion globale : 10 min',
              sessions: ['Diversification alimentaire', 'Allergie aux PLV - P Tounian (France)', "Les œsophagites à éosinophiles - N Siala (Tunisie)", 'Les gastrites à HP - L Beddi (Mauritanie)'],
            },
            // { name: 'Salle 3', moderators: '', sessions: [] },
          ],
        },
        { time: '13h00 - 15h00', title: 'PAUSE-DÉJEUNER (ET PRIÈRE)', rooms: [] },
        {
          time: '15h00 - 16h00',
          title: 'SYMPOSIUM',
          rooms: [
            { name: 'Salle 1 - SYMPOSIUM 3 BIOMÉRIEUX', moderators: 'M Bouskraoui', sessions: ["Impact de l'approche syndromique (PCR FilmArray) sur le diagnostic rapide des maladies infectieuses - I Khalifa (Mauritanie)"] },
            { name: 'Salle 2 - SYMPOSIUM 4 LABORATOIRE NESTLE', moderators: 'A Feil', sessions: ['Probiotiques et HMO - N E Abdellahi'] },
            // { name: 'Salle 3', moderators: '', sessions: [] },
          ],
        },
        {
          time: '16h00 - 17h30',
          title: 'SESSIONS PARALLÈLES',
          rooms: [
            {
              name: 'Salle 1 - SESSION INFECTIOLOGIE',
              moderators: 'M Amorassini, K Fla, Z Fitouri, M Sylla, S A Soufiane',
              conference: 'Conférence : 25 min',
              discussion: '+ 5 mn de discussion',
              sessions: [
                'Infections respiratoires virales - H Haas (France)',
                'Problématique des résistances aux antibiotiques - M Bouskraoui (Maroc)',
                'Bronchopneumopathies communautaires - F Amon (Cote d\'Ivoire)',
              ],
            },
            {
              name: 'Salle 2 - SESSION NÉPHROLOGIE',
              moderators: 'M Jellouli, M Boutaba, A Dahmoud, A Diakité',
              conference: 'Conférence : 20 min',
              discussion: 'Discussion globale : 10 min',
              sessions: [
                'Nouveautés dans la PEC du syndrome néphrotique - M Jellouli (Tunisie)',
                'HTA de l\'enfant - S Mabrouk (Tunisie)',
                'Syndrome hémolytique et urémique - N E Abdellahi(Mauritanie)',
                'La dialyse chez l\'enfant - M Boutaba(Algérie)',
              ],
            },
            // { name: 'Salle 3', moderators: '', sessions: [] },
          ],
        },
        { time: '17h30 - 18h00', title: 'PAUSE CAFÉ', rooms: [] },
        {
          time: '18h00 - 19h30',
          title: 'SESSIONS PARALLÈLES',
          rooms: [
            {
              name: 'Salle 1 - SESSION DRÉPANOCYTOSE',
              moderators: 'M Amorassini, S Ategbo, M Elkhorassani, M Boutaba',
              conference: 'Conférence : 20 min',
              discussion: 'Discussion globale : 10 min',
              sessions: [
                "Drépanocytose chez l'enfant en Mauritanie : Aspects cliniques et défi de prise en charge - A Biha (Mauritanie)",
                'Complications infectieuses - S A Soufiane (Mauritanie)',
                'Complications non infectieuses - A Diakite (Mali)',
                'Prise en charge du syndrome thoracique aigu - F Thabet (Tunisie)',
              ],
            },
            {
              name: 'Salle 2 - SESSION NÉONATOLOGIE 1',
              moderators: 'O Claris, M Mokhtari, M Sidatt, A Faraj',
              conference: 'Conférence : 20 min',
              discussion: 'Discussion globale : 10 min',
              sessions: [
                'Les défis de la Néonatologie dans les pays en développement - J Haddad (Liban)',
                "Le traitement de l'asphyxie par hypothermie - MF Maoulainine(Maroc)",
                'CAT devant une hypoglycémie néonatale - E Ben Hamida (Tunisie)',
                "Les anémies du nouveau-né - A Oulmaati (Maroc)",
              ],
            },
            // { name: 'Salle 3', moderators: '', sessions: [] },
          ],
        },
      ],
    },
    day3: {
      title: '3ÈME JOUR',
      subtitle: 'SAMEDI 22 NOVEMBRE 2025',
      sessions: [
        {
          time: '08h00 - 09h30',
          title: 'COMMUNICATIONS ORALES',
          rooms: [
            { name: 'Salle 1 - COMMUNICATION ORALE 5', moderators: 'M Bezeid, L Haddad, S Mabrouk', sessions: ['C29 à C35 : (8 min + 2 min de discussion)'] },
            { name: 'Salle 2 - COMMUNICATION ORALE 6', moderators: 'K Mekhalle, Z Fitouri, K Haddad', sessions: ['C36 à C41 : (8 min + 2 min de discussion)'] },
            { name: 'Salle 3 - ATELIER 5', moderators: '', description: 'Rattrapage vaccinal', note: 'T Sfar (Tunisie)\nL Boughamoura (Tunisie)\nM Bouskraoui (Maroc)\nL Beddi (Mauritanie)', sessions: [] },
          ],
        },
        {
          time: '09h30 - 11h00',
          title: 'SESSIONS PARALLÈLES',
          rooms: [
            {
              name: "Salle 1 - TR : STRATÉGIES DE PRISE EN CHARGE DU HIV DE L'ENFANT/EXPÉRIENCE PAYS",
              moderators: 'D Chello, S Ategbo, M Bouskraoui, L Boughamoura',
              conference: 'Conférence : 20 min',
              discussion: 'Discussion globale : 10 min',
              sessions: [
                { title: 'D Enyama (Cameroun)', speaker: 'A Ndongo (Cameroun)' },
                { title: 'Dr Mariem Sylla (Mali)', speaker: '' },
                { title: 'Dr Rama Diagne (Sénégal)', speaker: '' },
                { title: 'H Kébé (Mauritanie)', speaker: '' },
              ],
            },
            {
              name: 'Salle 2 - SESSION NÉONATOLOGIE 2',
              moderators: 'M F Maoulainine, M Doagi, O Ndiaye, A Feil',
              conference: 'Conférence : 25 min',
              discussion: '+ 5 min de discussion',
              sessions: [
                { title: 'Les infections nosocomiales', speaker: 'O Claris (France)' },
                { title: 'Les infections néonatales précoces', speaker: 'O Claris (France)' },
                { title: "La fièvre du nouveau-né", speaker: 'M Sidatt (Mauritanie)' },
              ],
            },
            { name: 'Salle 3 - ATELIER 6', moderators: '', description: 'Les chocs hémodynamiques pour les nuls', note: 'H Afilal (Maroc)\nN E Abdellahi (Mauritanie)', sessions: [] },
          ],
        },
        { time: '11h00 - 11h30', title: 'PAUSE CAFÉ', rooms: [] },
        {
          time: '11h30 - 13h00',
          title: 'SESSIONS PARALLÈLES',
          rooms: [
            {
              name: 'Salle 1 - SESSION CARDIOLOGIE',
              moderators: 'M S Aghrabat, A Hassani, Z Fitouri, M Kane',
              conference: 'Conférence : 25 min',
              discussion: 'Discussion globale : 15 min',
              sessions: [
                { title: "Place de l'évaluation cardiovasculaire dans le syndrome de Turner", speaker: 'R Aboura (Algérie)' },
                { title: 'Myocardites', speaker: 'M Hamdy (Mauritanie)' },
                { title: 'Dépistage des Cardiopathies congénitales', speaker: 'A Boye (Mauritanie)' },
              ],
            },
            {
              name: 'Salle 2 - SESSION PÉDOPSYCHIATRIE',
              moderators: 'A Elmedani, J M Pedespan, K Haddad, S Barro',
              conference: 'Conférence : 25 min',
              discussion: '+ 5 min de discussion',
              sessions: [
                { title: "Spectre de l'autisme", speaker: 'A Oussedik (Algérie)' },
                { title: 'TDAH', speaker: 'F Gouhi (Mauritanie)' },
                { title: 'Toxicomanie chez l\'adolescent', speaker: 'F Gouhi (Mauritanie)' },
              ],
            },
            { name: 'Salle 3 - ATELIER 7', moderators: '', description: "Hémophilie/Oncopédiatrie", note: 'M Elkhorassani (Maroc)\nL Hsissen (Maroc)\nE Zein (Mauritanie)', sessions: [] },
          ],
        },
        { time: '13h00 - 14h30', title: 'PAUSE-DÉJEUNER', rooms: [] },
        {
          time: '15h00 - 16h00',
          title: 'SYMPOSIUM',
          rooms: [
            { 
              name: 'Salle 1 - SYMPOSIUM 5 FONDATION CHIESI', 
              moderators: 'O Ndiaye', 
              sessions: [
                { title: 'Fondation Paolo Chiesi : Innover et agir pour la santé périnatale à travers le modèle NEST', speaker: 'F Cassera' },
                { title: '', speaker: 'F Bianco' },
                { title: '', speaker: 'O Mouhamadou' },
                { title: '', speaker: 'A Dago' },
              ] 
            },
            { 
              name: 'Salle 2 - SYMPOSIUM 6 LABORATOIRE FRANCE LAIT', 
              moderators: 'M Telmoudi', 
              sessions: [
                { title: 'Prise en charge des troubles digestifs fonctionnels du nourrisson', speaker: 'I Khalifa' }
              ] 
            },
            // { name: 'Salle 3', moderators: '', sessions: [] },
          ],
        },
        {
          time: '15h30 - 17h00',
          title: 'SESSIONS PARALLÈLES',
          rooms: [
            {
              name: 'Salle 1 - SESSION NÉONATOLOGIE 3',
              moderators: 'O Claris, E Benhamida, H Afilal, K Mekhalle',
              conference: 'Conférence : 25 min',
              discussion: '+ 5 min de discussion',
              sessions: [
                { title: 'Entérocolites', speaker: 'M Mokhtari (Maroc)' },
                { title: 'Membranes hyalines', speaker: "O N'Diaye (Sénégal)" },
                { title: 'Alimentation du prématuré', speaker: 'M Mokhtari (Maroc)' },
              ],
            },
            {
              name: 'Salle 2 - SESSION URGENCES/RÉANIMATION',
              moderators: 'K Menif, M Sidatt, L Karboubi, A Ndiaye',
              conference: 'Conférence : 25 min',
              discussion: '+ 5 min de discussion',
              sessions: [
                { title: 'Prise en charge aux urgences du choc septique de l\'enfant', speaker: 'K Menif (Tunisie)' },
                { title: 'Intoxications', speaker: 'L Karboubi (Maroc )' },
                { title: "Prise en charge d'un état de mal convulsif", speaker: 'F Thabet (Tunisie)' },
              ],
            },
            { name: 'Salle 3 - ATELIER 8', moderators: '', description: "ECG de l'enfant", note: 'L Haddad (Algérie)\nM Hamdy (Mauritanie)', sessions: [] },
          ],
        },
        { time: '17h00 - 17h30', title: 'PAUSE CAFÉ', rooms: [] },
        {
          time: '17h30 - 19h00',
          title: 'SESSIONS PARALLÈLES',
          rooms: [
            {
              name: 'Salle 1 - SESSION VACCINATION',
              moderators: 'I Boughamoura, M S Afif, M Mohamed Ahmed, A Ba',
              conference: 'Conférence : 20 min',
              discussion: 'Discussion globale : 10 min',
              sessions: [
                { title: 'Coqueluche', speaker: 'R Boukari (Algerie)' },
                { title: 'Vaccinations complémentaires (HVA, Meningo, Varicelle, grippe)', speaker: 'M Bouskraoui (Maroc)' },
                { title: 'HPV', speaker: 'T Sfar (Tunisie)' },
                { title: 'VRS', speaker: 'H Haas (France)' },
              ],
            },
            {
              name: 'Salle 2 - SESSION NEUROLOGIE',
              moderators: 'P Tounian, M Diagana, Belbouab, M E Telmoudi',
              conference: 'Conférence : 20 min',
              discussion: 'Discussion globale : 10 min',
              sessions: [
                { title: "Épilepsies idiopathiques de l'enfant", speaker: 'K Haddad (Algérie)' },
                { title: 'Aspects syndromiques', speaker: 'A El Medani (Maroc)' },
                { title: 'Classification des épilepsies', speaker: 'S Daddah (Mauritanie)' },
                { title: 'Quand débuter le traitement', speaker: 'J M Pedespan (France)' },
              ],
            },
            // { name: 'Salle 3', moderators: '', sessions: [] },
          ],
        },
        { time: '19h00 - 19h30', title: 'CLÔTURE', rooms: [] },
      ],
    },
  } as const;

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
                    {session.rooms.map((room: any, idx: number) => (
                      <div key={idx} className="room-card">
                        <h4 className="room-name">{room.name}</h4>
                        {room.moderators && (
                          <p className="room-moderators">
                            <strong>Modérateurs:</strong> {room.moderators}
                          </p>
                        )}
                        {room.conference && (
                          <p className="room-conference">
                            <strong>{room.conference}</strong>
                          </p>
                        )}
                        {room.discussion && (
                          <p className="room-discussion">
                            <strong>{room.discussion}</strong>
                          </p>
                        )}
                        {room.description && (
                          <p className="room-description">
                            <strong>{room.description}</strong>
                          </p>
                        )}
                        {room.note && (
                          <p className="room-note">
                            <em>{room.note}</em>
                          </p>
                        )}
                        {room.sessions && room.sessions.length > 0 && (
                          <ul className="room-sessions">
                            {room.sessions.map((s: any, i: number) => (
                              <li key={i}>
                                {typeof s === 'string' ? s : (
                                  <>
                                    {s.title}
                                    {s.speaker && (
                                      <span className="session-speaker">
                                        <svg className="speaker-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3498db" strokeWidth="2">
                                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                          <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        {s.speaker}
                                      </span>
                                    )}
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
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
