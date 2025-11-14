import Navbar from './Navbar';
import Hero from './Hero';

import Programme from './Programme';
import Agenda from './Agenda';
import Sponsors from './Sponsors';
import Members from './Members';
import Discover from './Discover';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const HomePage = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
      
        <Programme />
        <Agenda />
        <Members />
        <Discover />
        <Sponsors />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
