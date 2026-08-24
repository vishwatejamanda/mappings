import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { getDynastyById, DYNASTIES } from '../data/dynasties'

const eraLabel = { ancient: '🏛️ Ancient India', medieval: '⚔️ Medieval India', modern: '🇮🇳 Modern India' }

export default function EmpireDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const dynasty = getDynastyById(id)
    const [showTimeline, setShowTimeline] = useState(false)

    if (!dynasty) {
        return (
            <div className="empire-detail-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>Dynasty not found</h2>
                    <button className="btn btn-primary" onClick={() => navigate('/empires')}>← Back to Empires</button>
                </div>
            </div>
        )
    }

    // Collect all coins and constructions across all rulers
    const allCoins = dynasty.rulers.flatMap(r => (r.coins || []).map(c => ({ ...c, ruler: r.name })))
    const allConstructions = dynasty.rulers.flatMap(r => (r.constructions || []).map(c => ({ ...c, ruler: r.name })))

    return (
        <div className="empire-detail-page">
            {/* ── HERO ──────────────────────────────────────────────────── */}
            <section className="ed-hero" style={{ borderBottom: `3px solid ${dynasty.color}20` }}>
                <div className="ed-hero-bg" style={{ background: `radial-gradient(ellipse at 40% 30%, ${dynasty.color}18 0%, transparent 60%)` }} />
                <motion.div
                    className="ed-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="ed-hero-nav">
                        <button className="ed-back-btn" onClick={() => navigate('/empires')}>← All Empires</button>
                        <span className="ed-era-badge" style={{ background: `${dynasty.color}15`, color: dynasty.color }}>
                            {eraLabel[dynasty.era] || dynasty.era}
                        </span>
                    </div>
                    <h1 className="ed-hero-title" style={{ color: dynasty.color }}>{dynasty.name}</h1>
                    <p className="ed-hero-period">{dynasty.period}</p>
                    <div className="ed-hero-meta">
                        <span>👑 Founded by: <b>{dynasty.founded}</b></span>
                        <span>📍 Capital: <b>{dynasty.capital}</b></span>
                        <span>🏰 {dynasty.rulers.length} Rulers</span>
                    </div>
                </motion.div>
            </section>

            {/* ── OVERVIEW ──────────────────────────────────────────────── */}
            <motion.section className="ed-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 className="ed-sec-title">
                    <span className="ed-sec-line" style={{ background: dynasty.color }} />
                    Overview
                </h2>
                <p className="ed-sec-text">{dynasty.overview}</p>
            </motion.section>

            {/* ── LEGACY ────────────────────────────────────────────────── */}
            <motion.section className="ed-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 className="ed-sec-title">
                    <span className="ed-sec-line" style={{ background: dynasty.color }} />
                    Legacy & Contributions
                </h2>
                <div className="ed-legacy-grid">
                    {dynasty.legacy.map((item, i) => (
                        <motion.div
                            key={item}
                            className="ed-legacy-item"
                            style={{ borderLeft: `3px solid ${dynasty.color}` }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.04 }}
                        >
                            ✦ {item}
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ── RULERS GALLERY ─────────────────────────────────────────── */}
            <section className="ed-section">
                <div className="ed-sec-header-row">
                    <h2 className="ed-sec-title">
                        <span className="ed-sec-line" style={{ background: dynasty.color }} />
                        Imperial Rulers ({dynasty.rulers.length})
                    </h2>
                    <div className="ed-view-toggle">
                        <button className={`ed-toggle-btn ${!showTimeline ? 'active' : ''}`} style={!showTimeline ? { borderColor: dynasty.color, color: dynasty.color } : {}} onClick={() => setShowTimeline(false)}>
                            👑 Gallery
                        </button>
                        <button className={`ed-toggle-btn ${showTimeline ? 'active' : ''}`} style={showTimeline ? { borderColor: dynasty.color, color: dynasty.color } : {}} onClick={() => setShowTimeline(true)}>
                            📅 Timeline
                        </button>
                    </div>
                </div>

                {!showTimeline ? (
                    <div className="ed-rulers-grid">
                        {dynasty.rulers.map((ruler, i) => (
                            <motion.div
                                key={ruler.name}
                                className="ed-ruler-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                whileHover={{ y: -6, borderColor: dynasty.color }}
                                onClick={() => { navigate(`/empires/${id}/king/${i}`); window.scrollTo(0, 0) }}
                            >
                                {/* Portrait placeholder with initial */}
                                <div className="ed-ruler-portrait" style={{ background: `linear-gradient(135deg, ${dynasty.color}30, ${dynasty.color}10)` }}>
                                    <span className="ed-ruler-initial" style={{ color: dynasty.color }}>{ruler.name.charAt(0)}</span>
                                    <span className="ed-ruler-number" style={{ background: dynasty.color }}>{i + 1}</span>
                                </div>

                                <div className="ed-ruler-info">
                                    <span className="ed-ruler-period" style={{ color: dynasty.color }}>{ruler.period}</span>
                                    <h3 className="ed-ruler-name">{ruler.name}</h3>
                                    <span className="ed-ruler-title">{ruler.title}</span>
                                    <p className="ed-ruler-bio">{ruler.bio.substring(0, 120)}...</p>

                                    <div className="ed-ruler-stats">
                                        {ruler.achievements?.length > 0 && <span>🏆 {ruler.achievements.length}</span>}
                                        {ruler.wars?.length > 0 && <span>⚔️ {ruler.wars.length}</span>}
                                        {ruler.constructions?.length > 0 && <span>🏗️ {ruler.constructions.length}</span>}
                                        {ruler.coins?.length > 0 && <span>🪙 {ruler.coins.length}</span>}
                                    </div>

                                    <span className="ed-ruler-explore" style={{ color: dynasty.color }}>View Full Profile →</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="ed-rulers-timeline">
                        <div className="ed-tl-line" style={{ background: `${dynasty.color}25` }} />
                        {dynasty.rulers.map((ruler, i) => (
                            <motion.div
                                key={ruler.name}
                                className={`ed-tl-row ${i % 2 === 0 ? 'left' : 'right'}`}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="ed-tl-dot" style={{ background: dynasty.color, boxShadow: `0 0 12px ${dynasty.color}60` }}>
                                    <span>{i + 1}</span>
                                </div>
                                <div
                                    className="ed-tl-card"
                                    onClick={() => { navigate(`/empires/${id}/king/${i}`); window.scrollTo(0, 0) }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <span className="ed-ruler-period" style={{ color: dynasty.color }}>{ruler.period}</span>
                                    <h3 className="ed-ruler-name">{ruler.name}</h3>
                                    <span className="ed-ruler-title">{ruler.title}</span>
                                    <p className="ed-ruler-bio">{ruler.bio.substring(0, 160)}...</p>
                                    <span className="ed-ruler-explore" style={{ color: dynasty.color }}>View Full Profile →</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </section>

            {/* ── COINS OF THE DYNASTY ──────────────────────────────────── */}
            {allCoins.length > 0 && (
                <motion.section className="ed-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="ed-sec-title">
                        <span className="ed-sec-line" style={{ background: '#F59E0B' }} />
                        🪙 Coins & Currency ({allCoins.length})
                    </h2>
                    <div className="ed-coins-grid">
                        {allCoins.map((coin, i) => (
                            <motion.div
                                key={coin.name + i}
                                className="ed-coin-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                            >
                                <div className="ed-coin-icon">🪙</div>
                                <h4 className="ed-coin-name">{coin.name}</h4>
                                <p className="ed-coin-desc">{coin.desc}</p>
                                <span className="ed-coin-ruler" style={{ color: dynasty.color }}>— {coin.ruler}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* ── CONSTRUCTIONS & ARCHITECTURE ─────────────────────────── */}
            {allConstructions.length > 0 && (
                <motion.section className="ed-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="ed-sec-title">
                        <span className="ed-sec-line" style={{ background: '#10B981' }} />
                        🏗️ Architectural Marvels ({allConstructions.length})
                    </h2>
                    <div className="ed-constructions-grid">
                        {allConstructions.map((con, i) => (
                            <motion.div
                                key={con.name + i}
                                className="ed-construction-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                style={{ borderLeft: `3px solid ${dynasty.color}` }}
                            >
                                <div className="ed-construction-icon">🏛️</div>
                                <div>
                                    <h4 className="ed-construction-name">{con.name}</h4>
                                    <p className="ed-construction-desc">{con.desc}</p>
                                    <span className="ed-construction-ruler" style={{ color: dynasty.color }}>Built by: {con.ruler}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* ── DECLINE ───────────────────────────────────────────────── */}
            <motion.section className="ed-section ed-decline" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 className="ed-sec-title">
                    <span className="ed-sec-line" style={{ background: '#EF4444' }} />
                    Decline & Fall
                </h2>
                <p className="ed-sec-text">{dynasty.decline}</p>
            </motion.section>

            {/* ── EXPLORE OTHER DYNASTIES ────────────────────────────────── */}
            <section className="ed-section ed-nav-section">
                <h2 className="ed-sec-title">
                    <span className="ed-sec-line" style={{ background: dynasty.color }} />
                    Explore Other Dynasties
                </h2>
                <div className="ed-nav-grid">
                    {Object.values(DYNASTIES).filter(d => d.id !== dynasty.id).slice(0, 8).map(d => (
                        <motion.button
                            key={d.id}
                            className="ed-nav-card"
                            onClick={() => { navigate(`/empires/${d.id}`); window.scrollTo(0, 0) }}
                            whileHover={{ y: -3, borderColor: d.color }}
                            style={{ borderLeft: `3px solid ${d.color}` }}
                        >
                            <span className="ed-nav-period" style={{ color: d.color }}>{d.period}</span>
                            <span className="ed-nav-name">{d.name}</span>
                            <span className="ed-nav-rulers">{d.rulers.length} rulers — Click to explore →</span>
                        </motion.button>
                    ))}
                    <motion.button
                        className="ed-nav-card ed-nav-viewall"
                        onClick={() => { navigate('/empires'); window.scrollTo(0, 0) }}
                        whileHover={{ y: -3 }}
                    >
                        <span className="ed-nav-name">View All Dynasties →</span>
                    </motion.button>
                </div>
            </section>
        </div>
    )
}
