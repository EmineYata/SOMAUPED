import './Discover.css';

const Discover = () => {
  // Charge dynamiquement toutes les images/vidéos du dossier decouvrir (sous-dossiers inclus)
  const imageModules = import.meta.glob('./images/decouvrir/**/*.{png,jpg,jpeg,webp,gif,svg}', { eager: true, import: 'default' });
  const videoModules = import.meta.glob('./images/decouvrir/**/*.{mp4,webm,mov}', { eager: true, import: 'default' });

  const images = Object.values(imageModules) as string[];
  const videos = Object.values(videoModules) as string[];
  const items = [
    ...images.map((src) => ({ type: 'image' as const, src })),
    ...videos.map((src) => ({ type: 'video' as const, src })),
  ];

  // Ordonner pour alterner visuellement (images/vidéos mélangées)
  items.sort((a, b) => a.src.localeCompare(b.src));

  return (
    <section id="decouvrir" className="discover-section">
      <div className="discover-container">
        <div className="discover-header">
          <h2 className="discover-title">Mauritanie : un pays  à découvrir</h2>
          <p className="discover-subtitle">Images et vidéos sélectionnées</p>
        </div>

        {items.length === 0 ? (
          <div className="discover-empty">
            Aucun média trouvé dans <code>src/images/decouvrir</code>.
            Ajoutez vos images (.jpg, .png, .webp, .svg) et vidéos (.mp4, .webm, .mov) puis rechargez.
          </div>
        ) : (
          <div className="discover-grid">
            {items.map((item, idx) => (
              <div key={idx} className={`discover-card ${idx % 7 === 0 ? 'card-large' : ''}`}>
                {item.type === 'image' ? (
                  <img className="discover-media" src={item.src} alt={`Découvrir ${idx + 1}`} loading="lazy" />
                ) : (
                  <video className="discover-media" src={item.src} controls preload="metadata" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Discover;
