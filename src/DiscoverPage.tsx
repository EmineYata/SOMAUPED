import Navbar from './Navbar';
import Discover from './Discover';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const DiscoverPage = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Discover />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default DiscoverPage;
