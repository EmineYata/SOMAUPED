import { useState } from 'react';
import './Agenda.css';

const Agenda = () => {
  const [activeDay, setActiveDay] = useState('day1');

  const agendaData = {
    day1: {
      title: "PREMIER JOUR",
      subtitle: "13 OCT 2023",
      sessions: [
        {
          time: "08:00 - 09:00",
          title: "ACCUEIL & ENREGISTREMENT",
          speakers: []
        },
        {
          time: "09:00 - 09:30",
          title: "SÉANCE D'OUVERTURE",
          subtitle: "Cérémonie officielle - Allocutions",
          speakers: []
        },
        {
          time: "09:30",
          title: "PAUSE CAFÉ",
          speakers: []
        },
        {
          time: "10:00 - 13:00",
          title: "CONFÉRENCES PLÉNIÈRES",
          speakers: [
            { name: "Pr I Khalifa", avatar: "/src/images/author1.jpg" },
            { name: "Pr M Bouskraoui", avatar: "/src/images/author2.jpg" }
          ]
        },
        {
          time: "13:00 - 14:30",
          title: "PAUSE DÉJEUNER",
          speakers: []
        },
        {
          time: "14:30 - 17:00",
          title: "ATELIERS & COMMUNICATIONS ORALES",
          subtitle: "Sessions parallèles",
          speakers: [
            { name: "Dr BENINA", avatar: "/src/images/author3.jpg" },
            { name: "Dr M SIDATT", avatar: "/src/images/author4.jpg" }
          ]
        },
        {
          time: "17:00 - 17:30",
          title: "TABLE RONDE: RÉANIMATION NÉONATALE",
          speakers: [
            { name: "Pr A Fell", avatar: "/src/images/author2.jpg" }
          ]
        },
        {
          time: "17:30",
          title: "VISITE DES STANDS",
          speakers: []
        }
      ]
    },
    day2: {
      title: "DEUXIÈME JOUR",
      subtitle: "14 OCT 2023",
      sessions: [
        {
          time: "08:00 - 08:30",
          title: "ACCUEIL",
          speakers: []
        },
        {
          time: "08:30 - 10:30",
          title: "SESSIONS DE COMMUNICATIONS ORALES",
          speakers: [
            { name: "Dr N ABDALLAHI", avatar: "/src/images/author5.jpg" },
            { name: "Dr A NDIAY", avatar: "/src/images/author6.jpg" }
          ]
        },
        {
          time: "10:30",
          title: "PAUSE CAFÉ",
          speakers: []
        },
        {
          time: "11:00 - 13:00",
          title: "SYMPOSIUM SATELLITE",
          subtitle: "Nutrition pédiatrique",
          speakers: [
            { name: "Pr M Bouskraoui", avatar: "/src/images/author2.jpg" }
          ]
        },
        {
          time: "13:00 - 14:30",
          title: "PAUSE DÉJEUNER",
          speakers: []
        },
        {
          time: "14:30 - 17:00",
          title: "ATELIERS PRATIQUES",
          subtitle: "Gestes d'urgence en pédiatrie",
          speakers: [
            { name: "Pr I Khalifa", avatar: "/src/images/author1.jpg" },
            { name: "Dr BENINA", avatar: "/src/images/author3.jpg" }
          ]
        },
        {
          time: "17:00 - 18:00",
          title: "TABLE RONDE: VACCINATIONS",
          speakers: [
            { name: "Dr M SIDATT", avatar: "/src/images/author4.jpg" }
          ]
        },
        {
          time: "20:00",
          title: "DÎNER DE GALA",
          speakers: []
        }
      ]
    },
    day3: {
      title: "TROISIÈME JOUR",
      subtitle: "15 OCT 2023",
      sessions: [
        {
          time: "08:00 - 08:30",
          title: "ACCUEIL",
          speakers: []
        },
        {
          time: "08:30 - 10:30",
          title: "CONFÉRENCES: PÉDIATRIE SOCIALE",
          speakers: [
            { name: "Pr A Fell", avatar: "/src/images/author2.jpg" }
          ]
        },
        {
          time: "10:30",
          title: "PAUSE CAFÉ",
          speakers: []
        },
        {
          time: "11:00 - 12:30",
          title: "PRÉSENTATION DES POSTERS",
          subtitle: "Session interactive",
          speakers: []
        },
        {
          time: "12:30 - 13:00",
          title: "REMISE DES PRIX ET CLÔTURE",
          speakers: [
            { name: "Pr I Khalifa", avatar: "/src/images/author1.jpg" }
          ]
        },
        {
          time: "13:00",
          title: "COCKTAIL DE CLÔTURE",
          speakers: []
        }
      ]
    }
  };

  return (
    <section id="agenda" className="agenda-section">
      <div className="agenda-hero">
        <div className="agenda-hero-overlay"></div>
        <h2 className="agenda-hero-title">AGENDA</h2>
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
            <div key={index} className="agenda-item">
              <div className="agenda-time">{session.time}</div>
              <div className="agenda-details">
                <h3 className="agenda-session-title">{session.title}</h3>
                {session.subtitle && (
                  <p className="agenda-subtitle">{session.subtitle}</p>
                )}
                {session.speakers.length > 0 && (
                  <div className="agenda-speakers">
                    {session.speakers.map((speaker, idx) => (
                      <div key={idx} className="agenda-speaker">
                        <img src={speaker.avatar} alt={speaker.name} />
                        <span>{speaker.name}</span>
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
