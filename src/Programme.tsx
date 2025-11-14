import './Programme.css';
const pdfModules = import.meta.glob('./images/*.pdf', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const pdfEntries = Object.entries(pdfModules);
const preferred = pdfEntries.find(([path]) => /programme/i.test(path));
const programmePdf = (preferred?.[1] || pdfEntries[0]?.[1]) as string | undefined;
const livreEntry = pdfEntries.find(([path]) => /(livre|book|guide)/i.test(path));
const livrePdf = (livreEntry?.[1]) as string | undefined;

const Programme = () => {
  return (
    <section id="programme" className="programme-section">
      <div className="programme-overlay"></div>
      <div className="programme-content">
        <h2 className="programme-title">CONGRÈS</h2>
        <a 
          href={programmePdf || '#'} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="programme-button"
        >
          Programme
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </a>

        {livrePdf && (
          <a 
            href={livrePdf} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="programme-button secondary"
            download
          >
             Livre du Congrès
            <img src="/book.png" alt="Icône livre" width={20} height={20} />
          </a>
        )}

        <a href="/orateurs" className="programme-button secondary">
          Orateurs
        </a>
      </div>
    </section>
  );
};

export default Programme;
