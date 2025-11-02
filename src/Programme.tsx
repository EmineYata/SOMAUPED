import './Programme.css';

const Programme = () => {
  return (
    <section id="programme" className="programme-section">
      <div className="programme-overlay"></div>
      <div className="programme-content">
        <h2 className="programme-title">PROGRAMME</h2>
        <a 
          href="/src/images/programme.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="programme-button"
        >
          Télécharger le Programme
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Programme;
