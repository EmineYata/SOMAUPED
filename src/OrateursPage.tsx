import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import './OrateursPage.css';

// Import dynamique des images d'orateurs depuis src/images/orateur
const orateurImages = import.meta.glob('./images/orateur/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '');

// Noms pour lesquels la photo doit être masquée même si un fichier existe
const blockedPhotoNames = new Set<string>([
  normalize('FOLQUET F'),
  normalize('KARIMA HADDAD'),
]);

const resolveOrateurImage = (name: string) => {
  // Nettoyer les titres courants et retirer la partie pays entre parenthèses en fin de chaîne
  const raw = name
    .replace(/^(\s*)(dr|pr|prof|professeur|mr|mme|ms)\.?\s+/i, '')
    .replace(/\([^)]*\)\s*$/, '');
  const targetNorm = normalize(raw);

  // Découper en tokens (après normalisation non-destructive pour les initiales)
  const plain = raw
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
  const tokens = plain.split(/[^a-z0-9]+/).filter(Boolean);

  // Construire des candidats: prenomnom, nomprenom, initialenom, nom, tous tokens concaténés
  const first = tokens[0] || '';
  const last = tokens.length > 1 ? tokens[tokens.length - 1] : '';
  const firstInitial = first ? first[0] : '';

  const candidates = new Set<string>([
    targetNorm,
    normalize(`${first}${last}`),
    normalize(`${last}${first}`),
    normalize(`${firstInitial}${last}`),
    normalize(last),
    normalize(tokens.join(' ')),
  ]);

  for (const [path, url] of Object.entries(orateurImages)) {
    const base = path.split('/').pop() || path;
    const baseNorm = normalize(base.replace(/\.[^.]+$/, ''));
    for (const cand of candidates) {
      if (!cand) continue;
      if (baseNorm.includes(cand) || cand.includes(baseNorm)) {
        return url;
      }
    }
  }
  return undefined;
};

const organisateurs = [
  
  'ISSELMOU KHALIFA (Mauritanie)',
  'AHMED FEIL (Mauritanie)',
  'OUKHT ELBENINA ZEIN (Mauritanie)',
  'A LINGLART (France)',
  'HAMDY ELMOUSTAPHA (Mauritanie)',
  'NASSER DINE ABDELLAHI (Mauritanie)',
  'AICHA BIHA (Mauritanie)',
  'H MAOUCHE (Algerie)',
   'S HAMOUDA (Tunisie)',
  'O BOUYAHYA (Tunisie)',
  'M KHEMIRI (Tunisie)',
  'S MABROUK (Tunisie)',
  'E BEN HAMIDA (Tunisie)',
  'R BOUKARI (Algerie)',
  'L SMATI (Algerie)',
  'R ABOURA (Algerie)',
  'AHMED YOUSSEF (Mauritanie)',
  'O BENRABAH (Algerie)',
  'R BELBOUAB (Algerie)'
  ,'P TOUNIAN (France)',
  'AMINA BOYE (Mauritanie)',
  'Dominique Enyama (Cameroun)',
  'MARIEM SIDATT (Mauritanie)',
  'E MAHE (France) ','JM PEDESPAN (France)','O CLARIS (France)',
  'HOUDA RABANI (Mauritanie)',
  'K BOUAYED (Maroc)',
  'M BOUTABA  (Algerie)',
  'A OUSSEDIK (Algerie)',
  'YACOUB KHALEF (Mauritanie)',
  'W MESSADI (Algerie)',
  'J HADDAD  (Liban) ',
  'HADAD LAHLOU (Algerie) '
  ,'Abass Mohamed  (Mauritanie)',
  'KARIMA HADDAD (Algerie) ',
  'Amale Hassani (Maroc) ',
  'S A SOUFIANE (Mauritanie) ',
  'M E TELMOUDI (Mauritanie)',
  'ABIDA MEGUEYA  (Mauritanie)',
  'KHATRI MEKHALLE (Mauritanie)',
  'H KEBE (Mauritanie)',
  'Mouna Zouine (Maroc)',
  'LEMRABOTT BEDDI (Mauritanie)',
  'Kane Elhadj Malick (Mauritanie)',
  'F GOUHI (Mauritanie)',
  'SAMY DADDAH (Mauritanie)',
  'Azza Sammoud (Tunisie)',
  'Hassan Afilal (Maroc)',
  'M S AFIF (Maroc)',
  'Manel Jallouli (Tunisie)',
  'M BOUSKRAOUI (Maroc)',
  'L KARBOUBI (Maroc)',
  'N DINI (Maroc)',
  'AMON TANOH DICK (Côte d\'ivoire)',
  'S ATEGBO (Gabon)',
  'D ENYAMA (Cameroun)',
  'D CHELO (Cameroun)',
  'B AL-ZOUBI (Jordanie)',
  'A ELMEDANI (Maroc)',
  'O MOUTI (Maroc)',
  'A OULMAATI (Maroc)',
  'D BENLAHCENE (Maroc)',
  'L HSISSEN (Maroc)',
  'Hervé Haas (France)',
  'M ELKHOURASSANI (Maroc)',
  'M R F MAOULAININE (Maroc)',
  'M MOKHTARI (Maroc)',
  'K MENIF (Tunisie)',
  'M DOUAGI (Tunisie)',
  'T SFAR (Tunisie)',
  'L BOUGHAMOURA (Tunisie)',
  'N SIALA (Tunisie)',
  'Farah Thabet (Tunisie)',
 
  'Z FITOURI (Tunisie)',
  'F AL BAKOUSH (Libye)',
  'ALI FARAJ (Libye)',
  'O NDIAYE (Sénégal)',
  'R DIAGNE (Sénégal)',
  'M SYLLA (Mali)',
  'A DIAKITE (Mali)',
  'M AMORASSINI (Côte d\'ivoire)',
  'FOLQUET F  (Côte d\'ivoire)',
  

 
];

// const conferenciers = [
//   'H MAOUCHE','R BOUKHARI','L SMATI','R ABOURA','AHMED YOUSSEF','O BENRABAH','R BELBOUAB','AMINA BOYE','MOUNA SIDATT','HOUDA RABANI','M BOUTABA','A OUSSEDIK','YACOUB KHALEF','W MESSADI','L HADDAD','K HADDAD','S A SOUFIANE','KHATRI MEKHALLE','H KEBE','F GOUHI','SAMY DADDAH','H AFILAL','M S AFIFI','M BOUSKRAOUI','L KARBOUBI','N DINI','A ELMEDANI','O MOUTI','A OULMAATI','K OUAYA','D BENLAHCENE','L HSISSEN','M ELKHOURASSANI','M R F MAOULAININE','M MOKHTARI','K BEHAMOU','H NJIMA','M DADOUN','J ELOUDGHIRI','F Z NIANE','FATIMA O BENNANI','K SEBAA','CH DAISSAOUI','A KHATTABI','H KAICER','R ELARCHI','A ROUISSI','A ZAHOUANI','K MENIF','M DOUAGI','T SFAR','L BOUGHAMOURA','N SIALA','F THABET','T GARGAH','S HAMOUDA','O BOUYAHYA','M KHEMIRI','S MABROUK','E BEN HAMIDA','Z FITOURI','F B ALBOUKOUSH','N ALI FARAJ','O NDIAYE','R DIAGNE','M SYLLA','A DIAKHITE','M AMORASSINI','FOLQUET F','AMON TANOH DICK','S ATEGBO','D ENYAMA','D CHELO','B AL-ZOUBI','P TOUNIAN','A LINGLART','H HAAS','E MAHE','JM PEDESPAN','O CLARIS'
// ];

// const participants = [
//   'ABDELLAHI WEDDIH','CHEIKH ABDELLAHI','SIDI BRAHIM SID OUMAR','ZEINABOU HAIDY','SIDI MOHAMED SIDI MAHMOUD','AHMED DAHMOUD','MARIEM SIDI BRAHIM','HAMDINOU','SDBOUH AMAR BEBATT','BEZEID MOHAMEDEN','MOHAMED LEMINE CHERIF ELVAGHIH','CHEIKHNA MEYABA','EBIBECRINE LEMRABETT','MOHAMED LEMINE TALEB AHMED','SID’AHMED EL WAVI','MAIMOUNA SEPTI','MOHAMED TALEB','NOUMA LEBATT','MOULAYE ZEINE MOHAMED MAHMOUD','TEWFIGH GHADOUR','SIDI MOHAMED ELHACENE','VAYZE AHMED ELBECHIR','AHMED SALEM HMETY','AHMED BEZEID','MOHAMED DIAGANA','ABDELLAHI ELWELY','EMMANETOULLAH MAMMINE','MOHAMED KANE','LEMRABET SID’AHMED HABIB','MOHAMED TIYIB ELIDI','MLOHAMEDOU AHMED GUEDDAR','MOHAMED MENE','MARIEME ABDELLAHI','CHEIKH ELMOUSTAINE BOUBY','DIANGO MAMADOU WAGUE','TAHER BAMINE','ZEINE EL ABIDINE MOHAMED MOUSTAPHA','ABDI BOUKHAIR','MOHAMED LEINE KEBAD','MAMADOU ATHIE','JAFAR TANDIA','MOUNINA SID’EL MOKHTAR','ROKIA MAGUIRAGA','ELBAR BABA CHEIKH','CHEIKH TIDANI RABANI','MANA M’HAMED','TFEIL MARIEM','MOHAMED MAHMOUD EL HADA','ZAHRA MOHAMED MALAININE','VATIMETOU MOHAMED','ABDOU MOHAMED ELHADJ','MOHAMEDOU MOHAMEDEN VALY','KHADOU BAH','EMIRA LEMRABOTT','ABDERRAHMAN MOHAMEDOU','ABAH MOUHAMED CHEIKH','YEMBE AHMED LEBATT','MAHFOUDH MOHAMED LEMINE LEFDHAL','CHOUAYB MOHAMED','YAHYA TAIBA','CHEIKH N’TAGHRI','SALKA MOHAMED','MOUKAH MOUSSA','TAHER ELY MAHMOUD','SELMA MOHAMEDEN','AHMEDOU VALL','AMINETOU CHEIKHNA','NOUR DINE MOHAMED YAHYA','NAH AHMED HABIB','AHMED LEMBAREK','MOHAMED SALEM MOHAMED','ABDELLAHI BAH','MAH YOUGHOUB EL ATTIGH','EBOUHA MOHAMED ABDELLAHI','SIDI MOHAMED ABDERRAHMAN','SAMBA NIANG','NOUR MOHAMED LEMINE','EL HAYCE M','BEN GUEDIRA M','JRAD J','KENZARI M','LADHAR S','ABDELMOULA TOUIR W','BARBARIA','BEN ELHENI R','BEN RABEH','TRABELSI R','THABTI S','MABROUK A','ABDENNADHER','CHTOUROU K','FEHRI H','MEHERZI R','DZIRI C','CHENNOUF C','DJEMAOUI H','BENSEYOUB Z','MEBARKI K','SAOULI ML','SADEG H','ABDELKADER S','SMAILI','SEMROUNI A','DAHMANI N','KELLAL C','OUNIS O','DAGHMOUS A','SOUIDI M S','BOUGUESSA B','BOULARIAH F','CHOUBAN','ADOU LEIOH','ROMEO J','SAHI GNANTIN','TAHOU AMANI','EHI ALEXISE A','DOMINIQUE BROU V','ASSE KOUADIO','FATIME TALL','J B NIOKHOR DIOUF','NASSIRA BELAROUSSI','BOUCHAREB ABDELOUAHID','PLANTAD CHEKROUN','FRANCOISE FAVRE','TOUIL LAHOURIA','HAMEDI DJAMEL','BARRE GENEVIEVE','RANC NATHALIE'
// ];

const OrateursPage = () => {
  const renderGrid = (items: string[]) => (
    <div className="orateurs-grid">
      {items.map((name, idx) => {
        const cleanedForBlock = name
          .replace(/^(\s*)(dr|pr|prof|professeur|mr|mme|ms)\.?\s+/i, '')
          .replace(/\([^)]*\)\s*$/, '');
        const isBlocked = blockedPhotoNames.has(normalize(cleanedForBlock));
        const img = isBlocked ? undefined : resolveOrateurImage(name);
        return (
          <div key={idx} className="orateur-card">
            <div className={`orateur-icon ${img ? 'no-bg' : ''}`}>
              {img ? (
                <img className="orateur-photo" src={img} alt={name} />
              ) : (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="8" r="4" fill="currentColor"/>
                  <path d="M20 21C20 17.134 16.418 14 12 14C7.582 14 4 17.134 4 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </div>
            <div className="orateur-name">{name}</div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="app">
      <Navbar />
      <main>
        <section className="orateurs-page">
          <div className="orateurs-container">
            <div className="section-header">
              <h2 className="section-title">ORATEURS</h2>
              <div className="title-underline"></div>
            </div>

            {/* <h3 className="orateurs-section-title">Orateurs</h3> */}
            {renderGrid(organisateurs)}

            {/* <h3 className="orateurs-section-title">Conférenciers</h3>
            {renderGrid(conferenciers)}

            <h3 className="orateurs-section-title">Participants</h3>
            {renderGrid(participants)} */}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default OrateursPage;
