import Navbar from './Navbar';
import Hero from './Hero';

import Programme from './Programme';
import Agenda from './Agenda';
import Sponsors from './Sponsors';
import Members from './Members';
import Announcement from './Announcement';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const HomePage = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Announcement />
        <Programme />
        <Agenda />
        <Members />
        <Sponsors />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
