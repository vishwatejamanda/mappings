import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HISTORY_DIVISIONS, HISTORY_EVENTS, CATEGORY_CONFIG } from '../data/history'
import { getDynastiesByEra } from '../data/dynasties'
import HistoryEventCard from '../components/HistoryEventCard'
import HistoryMiniMap from '../components/HistoryMiniMap'

export default function HistoryPage() {
    const navigate = useNavigate()
    const [activeDivision, setActiveDivision] = useState('ancient')
    const [selectedEvent, setSelectedEvent] = useState(null)
    const [filterCategory, setFilterCategory] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const timelineRef = useRef(null)

    const division = HISTORY_DIVISIONS.find(d => d.id === activeDivision) || HISTORY_DIVISIONS[0]
    const events = HISTORY_EVENTS[activeDivision] || []

    const filtered = events.filter(e => {
        const matchesCategory = !filterCategory || e.category === filterCategory
        const matchesSearch = !searchQuery ||
            e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            e.yearLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (e.location && e.location.toLowerCase().includes(searchQuery.toLowerCase()))
        return matchesCategory && matchesSearch
    })

    return (
        <div className="history-page">
            {/* ── CINEMATIC HERO ─────────────────────────────────────── */}
            <section className="history-hero">
                <div className="history-hero-bg-art" style={{ backgroundImage: `url('${division.image || '/images/ancient_era.jpg'}')` }} />
                <div className="history-hero-tint" />
                <motion.div
                    className="history-hero-content"
                    key={activeDivision}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="history-hero-icon">{division.icon}</span>
                    <h1 className="history-hero-title" style={{ color: division.color }}>{division.title}</h1>
                    <p className="history-hero-period">{division.period}</p>
                    <p className="history-hero-subtitle">{division.subtitle}</p>
                </motion.div>
            </section>

            {/* ── DIVISION TABS ───────────────────────────────────────── */}
            <div className="history-tabs-bar">
                {HISTORY_DIVISIONS.map(div => (
                    <motion.button
                        key={div.id}
                        className={`history-tab ${activeDivision === div.id ? 'active' : ''}`}
                        onClick={() => {
                            setActiveDivision(div.id)
                            setSelectedEvent(null)
                            setFilterCategory(null)
                            setSearchQuery('')
                        }}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        style={activeDivision === div.id ? { borderColor: div.color, color: div.color, background: `linear-gradient(135deg, ${div.color}20, rgba(13,17,23,0.9))` } : {}}
                    >
                        <span className="history-tab-icon">{div.icon}</span>
                        <div>
                            <div className="history-tab-title">{div.title}</div>
                            <div className="history-tab-period">{div.period}</div>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* ── OVERVIEW & SYNCHRONIZED INTERACTIVE MINI MAP ───────── */}
            <AnimatePresence mode="wait">
                <motion.section
                    key={activeDivision + '-overview'}
                    className="history-overview glass-panel"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="history-overview-text">
                        <h2 className="history-section-title">
                            <span className="history-section-line" style={{ background: division.gradient }} />
                            Era Overview & Civilizational Scope
                        </h2>
                        <p className="history-overview-desc">{division.overview}</p>
                        <div className="history-themes">
                            {division.keyThemes.map((theme, i) => (
                                <motion.span
                                    key={theme}
                                    className="history-theme-tag"
                                    style={{ borderColor: `${division.color}50`, color: division.color, background: `${division.color}12` }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    ✦ {theme}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                    <div className="history-overview-map">
                        <HistoryMiniMap
                            events={events}
                            color={division.color}
                            selectedEvent={selectedEvent}
                            onSelectEvent={setSelectedEvent}
                        />
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* ── SEARCH & CATEGORY FILTERS ───────────────────────────── */}
            <div className="history-controls-container">
                <div className="history-search-wrap">
                    <input
                        type="text"
                        placeholder="🔍 Search historical events, battles, figures or locations (e.g. Ashoka, Kalinga, Panipat)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="history-search-input"
                    />
                </div>

                <div className="history-filters">
                    <button
                        className={`history-filter-btn ${!filterCategory ? 'active' : ''}`}
                        onClick={() => setFilterCategory(null)}
                        style={!filterCategory ? { borderColor: division.color, color: division.color } : {}}
                    >
                        All Events ({events.length})
                    </button>
                    {Object.entries(CATEGORY_CONFIG).map(([key, cfg]) => {
                        const count = events.filter(e => e.category === key).length
                        if (count === 0) return null
                        return (
                            <button
                                key={key}
                                className={`history-filter-btn ${filterCategory === key ? 'active' : ''}`}
                                onClick={() => setFilterCategory(filterCategory === key ? null : key)}
                                style={filterCategory === key ? { borderColor: cfg.color, color: cfg.color, background: `${cfg.color}15` } : {}}
                            >
                                {cfg.icon} {cfg.label} ({count})
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* ── TIMELINE + EVENTS ───────────────────────────────────── */}
            <section className="history-timeline-section" ref={timelineRef}>
                <div className="section-header-center">
                    <span className="section-eyebrow">Chronology of Bharat</span>
                    <h2 className="section-title">Timeline of Major Events</h2>
                    <p className="section-subtitle">Pivotal milestones that changed the trajectory of the subcontinent</p>
                </div>

                <div className="history-timeline-layout">
                    <div className="history-vline" style={{ background: `linear-gradient(180deg, ${division.color}60, transparent)` }} />

                    {filtered.map((event, index) => (
                        <motion.div
                            key={event.yearLabel + event.title}
                            className={`history-event-row ${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                        >
                            <div className="history-event-dot" style={{ background: division.color, boxShadow: `0 0 16px ${division.color}60` }}>
                                <span className="history-event-dot-year">{event.yearLabel}</span>
                            </div>

                            <HistoryEventCard
                                event={event}
                                color={division.color}
                                isSelected={selectedEvent?.title === event.title}
                                onSelect={() => setSelectedEvent(selectedEvent?.title === event.title ? null : event)}
                                index={index}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── DYNASTIES IN DETAIL ─────────────────────────────────── */}
            <section className="dynasty-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Imperial Lineages</span>
                    <h2 className="section-title">Dynasties of this Era</h2>
                    <p className="section-subtitle">Select any ruling dynasty to inspect its rulers, conquests, and architectural legacy</p>
                </div>

                <div className="dynasty-nav-grid">
                    {getDynastiesByEra(activeDivision === 'ancient' ? 'ancient' : activeDivision === 'medieval' ? 'medieval' : 'modern').map(d => (
                        <motion.button
                            key={d.id}
                            className="dynasty-nav-card glass-panel"
                            onClick={() => navigate(`/dynasty/${d.id}`)}
                            whileHover={{ y: -5, borderColor: d.color }}
                            style={{ borderLeft: `4px solid ${d.color}` }}
                        >
                            <span className="dynasty-nav-period" style={{ color: d.color }}>{d.period}</span>
                            <span className="dynasty-nav-name">{d.name}</span>
                            <span className="dynasty-nav-rulers">{d.rulers?.length || 0} imperial rulers — Click to explore →</span>
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* ── SELECTED EVENT DETAIL MODAL ─────────────────────────── */}
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
                            className="history-detail-modal glass-panel"
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
                                    <span className="history-detail-badge" style={{ background: `${CATEGORY_CONFIG[selectedEvent.category]?.color}20`, color: CATEGORY_CONFIG[selectedEvent.category]?.color }}>
                                        {CATEGORY_CONFIG[selectedEvent.category]?.icon} {CATEGORY_CONFIG[selectedEvent.category]?.label}
                                    </span>
                                    <h2 className="history-detail-title">{selectedEvent.title}</h2>
                                    <p className="history-detail-year" style={{ color: division.color }}>{selectedEvent.yearLabel} · 📍 {selectedEvent.location}</p>
                                </div>
                            </div>

                            <div className="history-detail-body">
                                <p className="history-detail-desc">{selectedEvent.description}</p>

                                <div className="history-detail-block">
                                    <h4 className="history-detail-block-title" style={{ color: division.color }}>📌 Civilizational Significance</h4>
                                    <p>{selectedEvent.significance}</p>
                                </div>

                                {selectedEvent.keyFigures && selectedEvent.keyFigures.length > 0 && (
                                    <div className="history-detail-block">
                                        <h4 className="history-detail-block-title" style={{ color: division.color }}>👤 Key Historical Figures</h4>
                                        <div className="history-detail-figures">
                                            {selectedEvent.keyFigures.map(f => (
                                                <span key={f} className="history-detail-figure-tag">✦ {f}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {selectedEvent.contemporary && (
                                    <div className="history-detail-block history-detail-contemporary">
                                        <h4 className="history-detail-block-title" style={{ color: '#F59E0B' }}>🌍 Meanwhile in the Contemporary World...</h4>
                                        <p>{selectedEvent.contemporary}</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
