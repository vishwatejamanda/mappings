import { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EmpireMap from '../components/EmpireMap'
import TimelinePanel from '../components/TimelinePanel'
import EmpiresSidebar from '../components/EmpiresSidebar'
import EmpireInfoPanel from '../components/EmpireInfoPanel'
import { EMPIRES, getEmpiresAtYear, getEraForYear, formatYear } from '../data/empires'

export default function MapPage() {
    const [currentYear, setCurrentYear] = useState(-300) // Default to Mauryan Zenith
    const [selectedEmpire, setSelectedEmpire] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [playSpeed, setPlaySpeed] = useState(1)
    const [basemap, setBasemap] = useState('voyager')
    const [activeLayers, setActiveLayers] = useState({
        boundaries: true,
        cities: true,
        tradeRoutes: true,
        battles: true,
        capitals: true
    })
    const playIntervalRef = useRef(null)

    const activeEmpires = getEmpiresAtYear(currentYear)
    const currentEra = getEraForYear(currentYear)

    // Auto-play timer
    useEffect(() => {
        if (isPlaying) {
            const speeds = { 0.5: 140, 1: 70, 2: 35, 4: 18 }
            const interval = speeds[playSpeed] || 70

            playIntervalRef.current = setInterval(() => {
                setCurrentYear(prev => {
                    let step = 5
                    if (prev > 1500) step = 2
                    else if (prev > 500) step = 5
                    else if (prev > -500) step = 10
                    else step = 25

                    const next = prev + step
                    if (next > 2026) {
                        setIsPlaying(false)
                        return 2026
                    }
                    return next
                })
            }, interval)
        }

        return () => {
            if (playIntervalRef.current) {
                clearInterval(playIntervalRef.current)
            }
        }
    }, [isPlaying, playSpeed])

    const handleYearChange = useCallback((year) => {
        setCurrentYear(year)
        const empires = getEmpiresAtYear(year)
        if (empires.length === 1) {
            setSelectedEmpire(empires[0])
        }
    }, [])

    const handleSelectEmpire = useCallback((empire) => {
        setSelectedEmpire(prev => prev?.id === empire.id ? null : empire)
    }, [])

    const togglePlay = useCallback(() => {
        if (currentYear >= 2026) {
            setCurrentYear(-3300)
        }
        setIsPlaying(prev => !prev)
    }, [currentYear])

    const toggleLayer = (layerKey) => {
        setActiveLayers(prev => ({ ...prev, [layerKey]: !prev[layerKey] }))
    }

    return (
        <div className="map-page">
            {/* ── TOP MAP CONTROLS & FLOATING TOOLBAR ───────────────────── */}
            <div className="map-top-bar glass-panel">
                {/* Year & Era indicator */}
                <div className="map-era-badge" style={{ borderLeft: `3px solid ${currentEra.color}` }}>
                    <div className="map-era-year" style={{ color: currentEra.color }}>
                        {formatYear(currentYear)}
                    </div>
                    <div className="map-era-name">{currentEra.name}</div>
                </div>

                {/* Layer Toggles */}
                <div className="map-layer-toggles">
                    {[
                        { key: 'boundaries', label: 'Boundaries', icon: '🛡️' },
                        { key: 'cities', label: 'Ancient Cities', icon: '🏛️' },
                        { key: 'tradeRoutes', label: 'Trade & Sea Routes', icon: '⚓' },
                        { key: 'battles', label: 'Battles & Edicts', icon: '⚔️' },
                        { key: 'capitals', label: 'Capitals', icon: '👑' },
                    ].map(layer => (
                        <button
                            key={layer.key}
                            className={`map-layer-btn ${activeLayers[layer.key] ? 'active' : ''}`}
                            onClick={() => toggleLayer(layer.key)}
                            title={`Toggle ${layer.label}`}
                        >
                            <span>{layer.icon}</span>
                            <span className="map-layer-btn-label">{layer.label}</span>
                        </button>
                    ))}
                </div>

                {/* Basemap Switcher */}
                <div className="map-basemap-selector">
                    {[
                        { id: 'voyager', label: 'Parchment', icon: '📜' },
                        { id: 'dark', label: 'Dark', icon: '🌑' },
                        { id: 'topo', label: 'Topo', icon: '🏔️' },
                        { id: 'satellite', label: 'Satellite', icon: '🛰️' },
                    ].map(bm => (
                        <button
                            key={bm.id}
                            className={`map-basemap-btn ${basemap === bm.id ? 'active' : ''}`}
                            onClick={() => setBasemap(bm.id)}
                            title={`Switch to ${bm.label} Basemap`}
                        >
                            <span>{bm.icon}</span>
                            <span>{bm.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* ── LEAFLET MAP VIEWPORT CONTAINER ──────────────────────── */}
            <div className="map-container">
                <EmpireMap
                    empires={activeEmpires}
                    selectedEmpire={selectedEmpire}
                    onSelectEmpire={handleSelectEmpire}
                    currentYear={currentYear}
                    activeLayers={activeLayers}
                    basemap={basemap}
                />
            </div>

            {/* ── LEFT SIDEBAR: ACTIVE EMPIRES OF THIS YEAR ───────────── */}
            <AnimatePresence>
                {activeEmpires.length > 0 && (
                    <motion.div
                        className="map-sidebar-container"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.3 }}
                    >
                        <EmpiresSidebar
                            empires={activeEmpires}
                            selectedEmpire={selectedEmpire}
                            onSelectEmpire={handleSelectEmpire}
                            currentYear={currentYear}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── RIGHT PANEL: SELECTED EMPIRE DETAILS ─────────────────── */}
            <AnimatePresence>
                {selectedEmpire && (
                    <motion.div
                        key={selectedEmpire.id}
                        className="map-infopanel-container"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        transition={{ duration: 0.3 }}
                    >
                        <EmpireInfoPanel
                            empire={selectedEmpire}
                            onClose={() => setSelectedEmpire(null)}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── BOTTOM TIMELINE SCRUBBER & PLAYER ───────────────────── */}
            <TimelinePanel
                currentYear={currentYear}
                onYearChange={handleYearChange}
                isPlaying={isPlaying}
                onTogglePlay={togglePlay}
                playSpeed={playSpeed}
                onSpeedChange={setPlaySpeed}
                currentEra={currentEra}
            />
        </div>
    )
}
