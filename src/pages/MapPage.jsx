import { useState, useCallback, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EmpireMap from '../components/EmpireMap'
import TimelinePanel from '../components/TimelinePanel'
import EmpiresSidebar from '../components/EmpiresSidebar'
import EmpireInfoPanel from '../components/EmpireInfoPanel'
import { EMPIRES, getEmpiresAtYear, getEraForYear, formatYear } from '../data/empires'

function MapPage() {
    const [currentYear, setCurrentYear] = useState(-1500)
    const [selectedEmpire, setSelectedEmpire] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [playSpeed, setPlaySpeed] = useState(1)
    const playIntervalRef = useRef(null)

    const activeEmpires = getEmpiresAtYear(currentYear)
    const currentEra = getEraForYear(currentYear)

    // Auto-play functionality
    useEffect(() => {
        if (isPlaying) {
            const speeds = { 0.5: 120, 1: 60, 2: 30, 4: 15 }
            const interval = speeds[playSpeed] || 60

            playIntervalRef.current = setInterval(() => {
                setCurrentYear(prev => {
                    let step = 5
                    if (prev > 1500) step = 2
                    else if (prev > 500) step = 5
                    else if (prev > -500) step = 10
                    else step = 15

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
        // Auto-select the first empire if only one is active
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
            setCurrentYear(-1500)
        }
        setIsPlaying(prev => !prev)
    }, [currentYear])

    return (
        <div className="map-page">
            {/* Map */}
            <div className="map-container">
                <EmpireMap
                    empires={activeEmpires}
                    selectedEmpire={selectedEmpire}
                    onSelectEmpire={handleSelectEmpire}
                    currentYear={currentYear}
                />
            </div>

            {/* Left sidebar - active empires list */}
            <AnimatePresence>
                {activeEmpires.length > 0 && (
                    <motion.div
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

            {/* Right panel - selected empire details */}
            <AnimatePresence>
                {selectedEmpire && (
                    <motion.div
                        key={selectedEmpire.id}
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

            {/* Year overlay */}
            <motion.div
                key={currentEra.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    position: 'absolute',
                    top: 80,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 800,
                    textAlign: 'center',
                    pointerEvents: 'none'
                }}
            >
                <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                    fontWeight: 700,
                    color: currentEra.color,
                    textShadow: `0 0 30px ${currentEra.color}40`,
                    lineHeight: 1.2
                }}>
                    {formatYear(currentYear)}
                </div>
                <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    marginTop: 4,
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                }}>
                    {currentEra.name}
                </div>
            </motion.div>

            {/* Timeline controls */}
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

export default MapPage
