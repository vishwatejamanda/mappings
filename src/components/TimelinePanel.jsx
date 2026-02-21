import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { ERAS, TIMELINE_MARKERS, formatYear } from '../data/empires'

function TimelinePanel({ currentYear, onYearChange, isPlaying, onTogglePlay, playSpeed, onSpeedChange, currentEra }) {

    const totalRange = 2026 - (-1500) // 3526 years total

    const eraWidths = useMemo(() => {
        return ERAS.map(era => ({
            ...era,
            width: ((era.endYear - era.startYear) / totalRange) * 100
        }))
    }, [])

    const handleSliderChange = (e) => {
        onYearChange(parseInt(e.target.value))
    }

    const jumpToYear = (year) => {
        onYearChange(year)
    }

    return (
        <div className="timeline-panel">
            <motion.div
                className="timeline-wrapper"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {/* Era color bar */}
                <div className="timeline-era-bar">
                    {eraWidths.map(era => (
                        <div
                            key={era.id}
                            className={`timeline-era-segment ${currentEra.id === era.id ? 'active' : ''}`}
                            style={{
                                width: `${era.width}%`,
                                backgroundColor: era.color,
                                color: era.color
                            }}
                            onClick={() => jumpToYear(era.startYear)}
                            title={`${era.name} (${formatYear(era.startYear)} - ${formatYear(era.endYear)})`}
                        />
                    ))}
                </div>

                {/* Controls row */}
                <div className="timeline-controls">
                    {/* Play/Pause button */}
                    <motion.button
                        className={`timeline-play-btn ${isPlaying ? 'playing' : ''}`}
                        onClick={onTogglePlay}
                        whileTap={{ scale: 0.9 }}
                        title={isPlaying ? 'Pause' : 'Play timeline'}
                    >
                        {isPlaying ? '⏸' : '▶'}
                    </motion.button>

                    {/* Slider */}
                    <div className="timeline-slider-container">
                        <input
                            type="range"
                            className="timeline-slider"
                            min={-1500}
                            max={2026}
                            value={currentYear}
                            onChange={handleSliderChange}
                            style={{
                                background: `linear-gradient(90deg, ${currentEra.color} 0%, ${currentEra.color} ${((currentYear - (-1500)) / totalRange) * 100}%, rgba(30, 30, 60, 0.8) ${((currentYear - (-1500)) / totalRange) * 100}%, rgba(30, 30, 60, 0.8) 100%)`
                            }}
                        />
                        <div className="timeline-markers">
                            {TIMELINE_MARKERS.filter((_, i) => i % 2 === 0).map(marker => (
                                <span
                                    key={marker.year}
                                    className="timeline-marker"
                                    onClick={() => jumpToYear(marker.year)}
                                >
                                    {marker.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Year display */}
                    <div className="timeline-year-display">
                        <motion.span
                            key={currentYear}
                            className="timeline-current-year"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            {formatYear(currentYear)}
                        </motion.span>
                        <span className="timeline-current-era" style={{ color: currentEra.color }}>
                            {currentEra.name}
                        </span>
                    </div>

                    {/* Speed controls */}
                    <div className="timeline-speed-controls">
                        {[0.5, 1, 2, 4].map(speed => (
                            <button
                                key={speed}
                                className={`speed-btn ${playSpeed === speed ? 'active' : ''}`}
                                onClick={() => onSpeedChange(speed)}
                            >
                                {speed}×
                            </button>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default TimelinePanel
