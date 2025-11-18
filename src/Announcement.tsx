import { useState } from 'react';
import './Announcement.css';

const Announcement = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="announcement-section">
      <button
        type="button"
        className="announcement-button"
        onClick={() => setOpen((v) => !v)}
      >
        Annonce !
      </button>

      {open && (
        <div className="announcement-content">
          <p className="announcement-item">
            Une sortie au musée de Nouakchott le jeudi 20/11 à 18 h et le vendredi 21/11 à 18 h
          </p>
          <p className="announcement-item">
            Une visite au port de pêche le jeudi 20/11 et le samedi 22/11 à 17 h
          </p>
          <p className="announcement-text">
            Pour s'inscrire sur la liste s'adresser aux membres du comité des activités sociales :
          </p>
          <p className="announcement-text">
            Dr Aicha Biha (wtp : 0022243010240)
          </p>
          <p className="announcement-text">
            Dr Lemrabott Beddi (wtp : 0022226005095)
          </p>
          <p className="announcement-text announcement-warning">
            Les places sont limitées
          </p>
        </div>
      )}
    </section>
  );
};

export default Announcement;
