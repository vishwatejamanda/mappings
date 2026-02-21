import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { getDynastyById, getAllDynastyIds, DYNASTIES } from '../data/dynasties'

function DynastyPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const dynasty = getDynastyById(id)
    const [selectedRuler, setSelectedRuler] = useState(null)
    const [showTimeline, setShowTimeline] = useState(true)

    if (!dynasty) {
        return (
            <div className="dynasty-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>Dynasty not found</h2>
                    <button className="btn btn-primary" onClick={() => navigate('/history')}>← Back to History</button>
                </div>
            </div>
        )
    }

    const eraLabel = { ancient: '🏛️ Ancient India', medieval: '⚔️ Medieval India', modern: '🇮🇳 Modern India' }

    return (
        <div className="dynasty-page">
            {/* Hero Header */}
            <section className="dynasty-hero" style={{ borderBottom: `3px solid ${dynasty.color}20` }}>
                <div className="dynasty-hero-bg" style={{ background: `radial-gradient(circle at 40% 30%, ${dynasty.color}15 0%, transparent 60%)` }} />
                <motion.div
                    className="dynasty-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <button className="dynasty-back-btn" onClick={() => navigate('/history')}>← Back to History</button>
                    <span className="dynasty-era-badge" style={{ background: `${dynasty.color}15`, color: dynasty.color }}>
                        {eraLabel[dynasty.era] || dynasty.era}
                    </span>
                    <h1 className="dynasty-hero-title" style={{ color: dynasty.color }}>{dynasty.name}</h1>
                    <p className="dynasty-hero-period">{dynasty.period}</p>
                    <p className="dynasty-hero-founded"><b>Founded by:</b> {dynasty.founded}</p>
                    <p className="dynasty-hero-capital"><b>Capital:</b> {dynasty.capital}</p>
                </motion.div>
            </section>

            {/* Overview */}
            <motion.section className="dynasty-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 className="dynasty-section-title">
                    <span className="dynasty-section-line" style={{ background: dynasty.color }} />
                    Overview
                </h2>
                <p className="dynasty-overview-text">{dynasty.overview}</p>
            </motion.section>

            {/* Legacy */}
            <motion.section className="dynasty-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 className="dynasty-section-title">
                    <span className="dynasty-section-line" style={{ background: dynasty.color }} />
                    Legacy & Contributions
                </h2>
                <div className="dynasty-legacy-grid">
                    {dynasty.legacy.map((item, i) => (
                        <motion.div
                            key={item}
                            className="dynasty-legacy-item"
                            style={{ borderLeft: `3px solid ${dynasty.color}` }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Toggle */}
            <div className="dynasty-toggle-bar">
                <button className={`dynasty-toggle-btn ${showTimeline ? 'active' : ''}`} style={showTimeline ? { borderColor: dynasty.color, color: dynasty.color } : {}} onClick={() => setShowTimeline(true)}>
                    📅 Chronological Timeline
                </button>
                <button className={`dynasty-toggle-btn ${!showTimeline ? 'active' : ''}`} style={!showTimeline ? { borderColor: dynasty.color, color: dynasty.color } : {}} onClick={() => setShowTimeline(false)}>
                    👑 Ruler Cards
                </button>
            </div>

            {/* Rulers — Timeline View */}
            {showTimeline ? (
                <section className="dynasty-section">
                    <div className="dynasty-rulers-timeline">
                        <div className="dynasty-tl-line" style={{ background: `${dynasty.color}25` }} />
                        {dynasty.rulers.map((ruler, i) => (
                            <motion.div
                                key={ruler.name}
                                className={`dynasty-ruler-row ${i % 2 === 0 ? 'left' : 'right'}`}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: 0.08 }}
                            >
                                <div className="dynasty-tl-dot" style={{ background: dynasty.color, boxShadow: `0 0 12px ${dynasty.color}40` }}>
                                    <span className="dynasty-tl-number">{i + 1}</span>
                                </div>
                                <div
                                    className={`dynasty-ruler-card ${selectedRuler === ruler ? 'expanded' : ''}`}
                                    onClick={() => setSelectedRuler(selectedRuler === ruler ? null : ruler)}
                                    style={selectedRuler === ruler ? { borderColor: dynasty.color, boxShadow: `0 0 25px ${dynasty.color}15` } : {}}
                                >
                                    <div className="dynasty-ruler-header">
                                        <div>
                                            <span className="dynasty-ruler-period" style={{ color: dynasty.color }}>{ruler.period}</span>
                                            <h3 className="dynasty-ruler-name">{ruler.name}</h3>
                                            <span className="dynasty-ruler-title">{ruler.title}</span>
                                        </div>
                                        <span className="dynasty-ruler-expand">{selectedRuler === ruler ? '▲' : '▼'}</span>
                                    </div>

                                    <AnimatePresence>
                                        {selectedRuler === ruler && (
                                            <motion.div
                                                className="dynasty-ruler-detail"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35 }}
                                            >
                                                <p className="dynasty-ruler-bio">{ruler.bio}</p>

                                                {ruler.achievements.length > 0 && (
                                                    <div className="dynasty-ruler-block">
                                                        <h4 style={{ color: dynasty.color }}>🏆 Key Achievements</h4>
                                                        <ul className="dynasty-ruler-list">
                                                            {ruler.achievements.map(a => <li key={a}>{a}</li>)}
                                                        </ul>
                                                    </div>
                                                )}

                                                {ruler.wars.length > 0 && (
                                                    <div className="dynasty-ruler-block">
                                                        <h4 style={{ color: '#EF4444' }}>⚔️ Wars & Battles</h4>
                                                        <ul className="dynasty-ruler-list wars">
                                                            {ruler.wars.map(w => <li key={w}>{w}</li>)}
                                                        </ul>
                                                    </div>
                                                )}
                                                <button className="dynasty-viewfull-btn" style={{ color: dynasty.color, borderColor: `${dynasty.color}40` }} onClick={(e) => { e.stopPropagation(); navigate(`/dynasty/${id}/ruler/${i}`); window.scrollTo(0, 0) }}>
                                                    📖 View Full Page →
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            ) : (
                /* Ruler Cards Grid View */
                <section className="dynasty-section">
                    <div className="dynasty-ruler-grid">
                        {dynasty.rulers.map((ruler, i) => (
                            <motion.div
                                key={ruler.name}
                                className="dynasty-ruler-gridcard"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -4, borderColor: dynasty.color }}
                                onClick={() => { navigate(`/dynasty/${id}/ruler/${i}`); window.scrollTo(0, 0) }}
                                style={selectedRuler === ruler ? { borderColor: dynasty.color } : {}}
                            >
                                <div className="dynasty-gridcard-number" style={{ background: dynasty.color }}>{i + 1}</div>
                                <span className="dynasty-ruler-period" style={{ color: dynasty.color }}>{ruler.period}</span>
                                <h3 className="dynasty-ruler-name">{ruler.name}</h3>
                                <span className="dynasty-ruler-title">{ruler.title}</span>
                                <p className="dynasty-gridcard-bio">{ruler.bio.substring(0, 120)}...</p>
                                <div className="dynasty-gridcard-stats">
                                    <span>🏆 {ruler.achievements.length}</span>
                                    <span>⚔️ {ruler.wars.length}</span>
                                </div>
                                <span className="dynasty-viewfull-btn" style={{ color: dynasty.color, marginTop: 8 }}>View Full Page →</span>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Decline */}
            <motion.section className="dynasty-section dynasty-decline-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 className="dynasty-section-title">
                    <span className="dynasty-section-line" style={{ background: '#EF4444' }} />
                    Decline & Fall
                </h2>
                <p className="dynasty-overview-text">{dynasty.decline}</p>
            </motion.section>

            {/* Navigation to other dynasties */}
            <section className="dynasty-section dynasty-nav-section">
                <h2 className="dynasty-section-title">
                    <span className="dynasty-section-line" style={{ background: dynasty.color }} />
                    Explore Other Dynasties
                </h2>
                <div className="dynasty-nav-grid">
                    {Object.values(DYNASTIES).filter(d => d.id !== dynasty.id).map(d => (
                        <motion.button
                            key={d.id}
                            className="dynasty-nav-card"
                            onClick={() => { navigate(`/dynasty/${d.id}`); setSelectedRuler(null); window.scrollTo(0, 0) }}
                            whileHover={{ y: -3, borderColor: d.color }}
                            style={{ borderLeft: `3px solid ${d.color}` }}
                        >
                            <span className="dynasty-nav-period" style={{ color: d.color }}>{d.period}</span>
                            <span className="dynasty-nav-name">{d.name}</span>
                            <span className="dynasty-nav-rulers">{d.rulers.length} rulers</span>
                        </motion.button>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default DynastyPage
