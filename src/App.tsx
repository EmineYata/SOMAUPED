import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import AdherantsPage from './AdherantsPage'
import OrateursPage from './OrateursPage'
import DiscoverPage from './DiscoverPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adherants" element={<AdherantsPage />} />
        <Route path="/orateurs" element={<OrateursPage />} />
        <Route path="/decouvrir" element={<DiscoverPage />} />
      </Routes>
    </Router>
  )
}

export default App
