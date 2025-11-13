import { useEffect, useState } from 'react';
import './Agenda.css';
// Recherche du PDF dans src/images (préférence pour un nom contenant 'programme')
const pdfModules = import.meta.glob('./images/*.pdf', { eager: true, as: 'url' }) as Record<string, string>;
const pdfEntries = Object.entries(pdfModules);
const preferred = pdfEntries.find(([path]) => /programme/i.test(path));
const programmePdf = (preferred?.[1] || pdfEntries[0]?.[1]) as string | undefined;

const Agenda = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsMobile((e as MediaQueryList).matches);
    handler(mql);
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', handler as (e: MediaQueryListEvent) => void);
      return () => mql.removeEventListener('change', handler as (e: MediaQueryListEvent) => void);
    } else {
      // @ts-ignore
      mql.addListener(handler);
      return () => {
        // @ts-ignore
        mql.removeListener(handler);
      };
    }
  }, []);
  return (
    <section id="agenda" className="agenda-section">
      <div className="agenda-hero">
        <div className="agenda-hero-overlay"></div>
        <h2 className="agenda-hero-title">PROGRAMME</h2>
        <p className="agenda-hero-subtitle">20-21-22 Novembre 2025</p>
      </div>
      <div className="agenda-container">
        <div className="agenda-pdf">
          {programmePdf ? (
            isMobile ? (
              <div style={{ textAlign: 'center' }}>
                <a href={programmePdf} target="_blank" rel="noopener noreferrer" className="programme-button">Ouvrir le Programme</a>
                <div style={{ height: 12 }}></div>
                <a href={programmePdf} download className="programme-button">Télécharger le Programme</a>
              </div>
            ) : (
              <>
                <object data={programmePdf} type="application/pdf" width="100%" height="900px">
                  <iframe src={programmePdf} title="Programme PDF" width="100%" height="900px"></iframe>
                </object>
                <div style={{ marginTop: 16, textAlign: 'center' }}>
                  <a href={programmePdf} target="_blank" rel="noopener noreferrer" className="programme-button">Ouvrir le Programme dans un onglet</a>
                </div>
              </>
            )
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              Programme PDF introuvable dans src/images.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Agenda;
