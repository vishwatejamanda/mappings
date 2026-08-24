import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import MapPage from './pages/MapPage'
import HistoryPage from './pages/HistoryPage'
import DynastyPage from './pages/DynastyPage'
import RulerPage from './pages/RulerPage'
import GeographyHome from './pages/GeographyHome'
import IndianPhysical from './pages/IndianPhysical'
import IndianRivers from './pages/IndianRivers'
import IndianClimate from './pages/IndianClimate'
import IndianSoils from './pages/IndianSoils'
import IndianVegetation from './pages/IndianVegetation'
import WorldGeomorphology from './pages/WorldGeomorphology'
import WorldClimatology from './pages/WorldClimatology'
import WorldOceanography from './pages/WorldOceanography'
import WorldBiomes from './pages/WorldBiomes'
import PolityPage from './pages/PolityPage'
import EconomyPage from './pages/EconomyPage'
import CulturePage from './pages/CulturePage'
import EmpireListPage from './pages/EmpireListPage'
import EmpireDetailPage from './pages/EmpireDetailPage'
import KingDetailPage from './pages/KingDetailPage'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-chakra" />
        <div className="loading-text">भारत Through Ages</div>
      </div>
    )
  }

  return (
    <div className="app-layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/maps" element={<MapPage />} />
        <Route path="/maps/empires" element={<MapPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/dynasty/:id" element={<DynastyPage />} />
        <Route path="/dynasty/:dynastyId/ruler/:rulerIndex" element={<RulerPage />} />
        {/* Empire Detail Pages */}
        <Route path="/empires" element={<EmpireListPage />} />
        <Route path="/empires/:id" element={<EmpireDetailPage />} />
        <Route path="/empires/:id/king/:rulerIndex" element={<KingDetailPage />} />
        {/* Geography Routes */}
        <Route path="/geography" element={<GeographyHome />} />
        <Route path="/geography/indian-physical" element={<IndianPhysical />} />
        <Route path="/geography/indian-rivers" element={<IndianRivers />} />
        <Route path="/geography/indian-climate" element={<IndianClimate />} />
        <Route path="/geography/indian-soils" element={<IndianSoils />} />
        <Route path="/geography/indian-vegetation" element={<IndianVegetation />} />
        <Route path="/geography/world-geomorphology" element={<WorldGeomorphology />} />
        <Route path="/geography/world-climatology" element={<WorldClimatology />} />
        <Route path="/geography/world-oceanography" element={<WorldOceanography />} />
        <Route path="/geography/world-biomes" element={<WorldBiomes />} />
        {/* New Sections */}
        <Route path="/polity" element={<PolityPage />} />
        <Route path="/economy" element={<EconomyPage />} />
        <Route path="/culture" element={<CulturePage />} />
      </Routes>
    </div>
  )
}

export default App
