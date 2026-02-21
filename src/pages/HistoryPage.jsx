import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HISTORY_DIVISIONS, HISTORY_EVENTS, CATEGORY_CONFIG } from '../data/history'
import { getDynastiesByEra } from '../data/dynasties'
import HistoryTimeline from '../components/HistoryTimeline'
import HistoryEventCard from '../components/HistoryEventCard'
import HistoryMiniMap from '../components/HistoryMiniMap'

function HistoryPage() {
    const navigate = useNavigate()
    const [activeDivision, setActiveDivision] = useState('ancient')
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [filterCategory, setFilterCategory] = useState(null)
    const timelineRef = useRef(null)

    const division = HISTORY_DIVISIONS.find(d => d.id === activeDivision)
    const events = HISTORY_EVENTS[activeDivision] || []
    const filtered = filterCategory ? events.filter(e => e.category === filterCategory) : events

    return (
        <div className="history-page">
            {/* Hero */}
            <section className="history-hero">
                <div className="history-hero-bg" style={{ background: division.bgImage }} />
                <motion.div
                    className="history-hero-content"
                    key={activeDivision}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="history-hero-icon">{division.icon}</span>
                    <h1 className="history-hero-title" style={{ color: division.color }}>{division.title}</h1>
                    <p className="history-hero-period">{division.period}</p>
                    <p className="history-hero-subtitle">{division.subtitle}</p>
                </motion.div>
            </section>

            {/* Division Tabs */}
            <div className="history-tabs-bar">
                {HISTORY_DIVISIONS.map(div => (
                    <motion.button
                        key={div.id}
                        className={`history-tab ${activeDivision === div.id ? 'active' : ''}`}
                        onClick={() => { setActiveDivision(div.id); setSelectedEvent(null); setFilterCategory(null) }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        style={activeDivision === div.id ? { borderColor: div.color, color: div.color, background: `${div.color}12` } : {}}
                    >
                        <span className="history-tab-icon">{div.icon}</span>
                        <div>
                            <div className="history-tab-title">{div.title}</div>
                            <div className="history-tab-period">{div.period}</div>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* Overview */}
            <AnimatePresence mode="wait">
                <motion.section
                    key={activeDivision + '-overview'}
                    className="history-overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="history-overview-text">
                        <h2 className="history-section-title">
                            <span className="history-section-line" style={{ background: division.gradient }} />
                            Overview
                        </h2>
                        <p className="history-overview-desc">{division.overview}</p>
                        <div className="history-themes">
                            {division.keyThemes.map((theme, i) => (
                                <motion.span
                                    key={theme}
                                    className="history-theme-tag"
                                    style={{ borderColor: `${division.color}40`, color: division.color }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.06 }}
                                >
                                    {theme}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                    <div className="history-overview-map">
                        <HistoryMiniMap events={events} color={division.color} selectedEvent={selectedEvent} onSelectEvent={setSelectedEvent} />
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* Category filters */}
            <div className="history-filters">
                <button className={`history-filter-btn ${!filterCategory ? 'active' : ''}`} onClick={() => setFilterCategory(null)} style={!filterCategory ? { borderColor: division.color, color: division.color } : {}}>
                    All Events ({events.length})
                </button>
                {Object.entries(CATEGORY_CONFIG).map(([key, cfg]) => {
                    const count = events.filter(e => e.category === key).length
                    if (count === 0) return null
                    return (
                        <button key={key} className={`history-filter-btn ${filterCategory === key ? 'active' : ''}`}
                            onClick={() => setFilterCategory(filterCategory === key ? null : key)}
                            style={filterCategory === key ? { borderColor: cfg.color, color: cfg.color } : {}}>
                            {cfg.icon} {cfg.label} ({count})
                        </button>
                    )
                })}
            </div>

            {/* Timeline + Events */}
            <section className="history-timeline-section" ref={timelineRef}>
                <h2 className="history-section-title" style={{ padding: '0 40px' }}>
                    <span className="history-section-line" style={{ background: division.gradient }} />
                    Chronological Timeline
                </h2>

                <div className="history-timeline-layout">
                    {/* Vertical timeline line */}
                    <div className="history-vline" style={{ background: `${division.color}30` }} />

                    {filtered.map((event, index) => (
                        <motion.div
                            key={event.yearLabel + event.title}
                            className={`history-event-row ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            {/* Timeline dot */}
                            <div className="history-event-dot" style={{ background: division.color, boxShadow: `0 0 12px ${division.color}50` }}>
                                <span className="history-event-dot-year">{event.yearLabel}</span>
                            </div>

                            {/* Event card */}
                            <HistoryEventCard
                                event={event}
                                color={division.color}
                                isSelected={selectedEvent === event}
                                onSelect={() => setSelectedEvent(selectedEvent === event ? null : event)}
                                index={index}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Explore Dynasties */}
            <section className="dynasty-section" style={{ maxWidth: 1300, margin: '0 auto' }}>
                <h2 className="history-section-title" style={{ padding: '0 40px' }}>
                    <span className="history-section-line" style={{ background: division.gradient }} />
                    Explore Dynasties in Detail
                </h2>
                <div className="dynasty-nav-grid" style={{ padding: '0 40px' }}>
                    {getDynastiesByEra(activeDivision === 'ancient' ? 'ancient' : activeDivision === 'medieval' ? 'medieval' : 'modern').map(d => (
                        <motion.button
                            key={d.id}
                            className="dynasty-nav-card"
                            onClick={() => navigate(`/dynasty/${d.id}`)}
                            whileHover={{ y: -3, borderColor: d.color }}
                            style={{ borderLeft: `3px solid ${d.color}` }}
                        >
                            <span className="dynasty-nav-period" style={{ color: d.color }}>{d.period}</span>
                            <span className="dynasty-nav-name">{d.name}</span>
                            <span className="dynasty-nav-rulers">{d.rulers.length} rulers — Click to explore →</span>
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* Selected event detail modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <motion.div
                        className="history-detail-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedEvent(null)}
                    >
                        <motion.div
                            className="history-detail-modal"
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ type: 'spring', damping: 25 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="history-detail-close" onClick={() => setSelectedEvent(null)}>✕</button>

                            <div className="history-detail-header" style={{ borderBottom: `2px solid ${division.color}20` }}>
                                <span className="history-detail-icon">{selectedEvent.image}</span>
                                <div>
                                    <span className="history-detail-badge" style={{ background: `${CATEGORY_CONFIG[selectedEvent.category]?.color}18`, color: CATEGORY_CONFIG[selectedEvent.category]?.color }}>
                                        {CATEGORY_CONFIG[selectedEvent.category]?.icon} {CATEGORY_CONFIG[selectedEvent.category]?.label}
                                    </span>
                                    <h2 className="history-detail-title">{selectedEvent.title}</h2>
                                    <p className="history-detail-year" style={{ color: division.color }}>{selectedEvent.yearLabel} · {selectedEvent.location}</p>
                                </div>
                            </div>

                            <div className="history-detail-body">
                                <p className="history-detail-desc">{selectedEvent.description}</p>

                                <div className="history-detail-block">
                                    <h4 className="history-detail-block-title" style={{ color: division.color }}>📌 Significance</h4>
                                    <p>{selectedEvent.significance}</p>
                                </div>

                                {selectedEvent.keyFigures.length > 0 && (
                                    <div className="history-detail-block">
                                        <h4 className="history-detail-block-title" style={{ color: division.color }}>👤 Key Figures</h4>
                                        <div className="history-detail-figures">
                                            {selectedEvent.keyFigures.map(f => (
                                                <span key={f} className="history-detail-figure-tag">{f}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="history-detail-block history-detail-contemporary">
                                    <h4 className="history-detail-block-title" style={{ color: '#F59E0B' }}>🌍 Meanwhile in the World...</h4>
                                    <p>{selectedEvent.contemporary}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default HistoryPage
