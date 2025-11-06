import Navbar from './Navbar'
import Hero from './Hero'
import Orateurs from './Orateurs'
import Speakers from './Speakers'
import Programme from './Programme'
import Agenda from './Agenda'
import Sponsors from './Sponsors'
import Members from './Members'
import Discover from './Discover'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Orateurs />
        <Speakers />
        <Programme />
        <Agenda />
        <Members />
        <Discover />
        <Sponsors />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
