import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getDynastyById } from '../data/dynasties'

export default function KingDetailPage() {
    const { id, rulerIndex } = useParams()
    const navigate = useNavigate()
    const dynasty = getDynastyById(id)
    const idx = parseInt(rulerIndex)

    if (!dynasty || isNaN(idx) || !dynasty.rulers[idx]) {
        return (
            <div className="king-detail-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>Ruler not found</h2>
                    <button className="btn btn-primary" onClick={() => navigate('/empires')}>← Back to Empires</button>
                </div>
            </div>
        )
    }

    const ruler = dynasty.rulers[idx]
    const prev = idx > 0 ? dynasty.rulers[idx - 1] : null
    const next = idx < dynasty.rulers.length - 1 ? dynasty.rulers[idx + 1] : null

    return (
        <div className="king-detail-page">
            {/* ── HERO ──────────────────────────────────────────────────── */}
            <section className="king-hero" style={{ borderBottom: `3px solid ${dynasty.color}20` }}>
                <div className="king-hero-bg" style={{ background: `radial-gradient(ellipse at 30% 20%, ${dynasty.color}15 0%, transparent 60%)` }} />
                <motion.div className="king-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    {/* Breadcrumb */}
                    <div className="king-breadcrumb">
                        <button className="king-back-btn" onClick={() => navigate('/empires')}>All Empires</button>
                        <span className="king-bc-sep">›</span>
                        <button className="king-back-btn" onClick={() => navigate(`/empires/${id}`)}>{dynasty.name}</button>
                        <span className="king-bc-sep">›</span>
                        <span className="king-bc-current" style={{ color: dynasty.color }}>Ruler {idx + 1} of {dynasty.rulers.length}</span>
                    </div>

                    <div className="king-hero-layout">
                        {/* Portrait */}
                        <div className="king-portrait" style={{ background: `linear-gradient(135deg, ${dynasty.color}30, ${dynasty.color}10)`, borderColor: `${dynasty.color}40` }}>
                            <span className="king-portrait-initial" style={{ color: dynasty.color }}>{ruler.name.charAt(0)}</span>
                            <span className="king-portrait-number" style={{ background: dynasty.color }}>{idx + 1}</span>
                        </div>

                        <div className="king-hero-text">
                            <h1 className="king-hero-name" style={{ color: dynasty.color }}>{ruler.name}</h1>
                            <p className="king-hero-title">{ruler.title}</p>
                            <p className="king-hero-period">{ruler.period}</p>
                            <p className="king-hero-dynasty">{dynasty.name} · {dynasty.capital}</p>

                            {/* Quick stats */}
                            <div className="king-quick-stats">
                                {ruler.achievements?.length > 0 && <span className="king-qstat">🏆 {ruler.achievements.length} Achievements</span>}
                                {ruler.wars?.length > 0 && <span className="king-qstat">⚔️ {ruler.wars.length} Wars</span>}
                                {ruler.conquests?.length > 0 && <span className="king-qstat">🗡️ {ruler.conquests.length} Conquests</span>}
                                {ruler.constructions?.length > 0 && <span className="king-qstat">🏗️ {ruler.constructions.length} Constructions</span>}
                                {ruler.coins?.length > 0 && <span className="king-qstat">🪙 {ruler.coins.length} Coins</span>}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── RISE TO POWER ──────────────────────────────────────────── */}
            {ruler.coronation && (
                <motion.section className="king-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="king-sec-title">
                        <span className="king-sec-icon" style={{ background: `${dynasty.color}15`, color: dynasty.color }}>👑</span>
                        Rise to Power
                    </h2>
                    <p className="king-sec-text">{ruler.coronation}</p>
                </motion.section>
            )}

            {/* ── BIOGRAPHY ─────────────────────────────────────────────── */}
            <motion.section className="king-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 className="king-sec-title">
                    <span className="king-sec-icon" style={{ background: `${dynasty.color}15`, color: dynasty.color }}>📖</span>
                    Biography
                </h2>
                <p className="king-sec-text">{ruler.bio}</p>
            </motion.section>

            {/* ── CONQUESTS & WARS ───────────────────────────────────────── */}
            {ruler.conquests && ruler.conquests.length > 0 && (
                <motion.section className="king-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="king-sec-title">
                        <span className="king-sec-icon" style={{ background: 'rgba(239,68,68,0.1)', color: '#EF4444' }}>⚔️</span>
                        Conquests & Wars
                    </h2>
                    <div className="king-conquests">
                        {ruler.conquests.map((c, i) => (
                            <motion.div key={i} className="king-conquest-card" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                                <span className="king-conquest-num" style={{ color: dynasty.color }}>{i + 1}</span>
                                <div>
                                    <h4 className="king-conquest-title">{c.title}</h4>
                                    <p className="king-conquest-desc">{c.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* ── CONSTRUCTIONS & ARCHITECTURE ──────────────────────────── */}
            {ruler.constructions && ruler.constructions.length > 0 && (
                <motion.section className="king-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="king-sec-title">
                        <span className="king-sec-icon" style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981' }}>🏗️</span>
                        Constructions & Architecture
                    </h2>
                    <div className="king-constructions-grid">
                        {ruler.constructions.map((con, i) => (
                            <motion.div
                                key={con.name}
                                className="king-construction-card"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                style={{ borderLeft: `3px solid ${dynasty.color}` }}
                            >
                                <div className="king-construction-icon">🏛️</div>
                                <div>
                                    <h4 className="king-construction-name">{con.name}</h4>
                                    <p className="king-construction-desc">{con.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* ── COINS & CURRENCY ──────────────────────────────────────── */}
            {ruler.coins && ruler.coins.length > 0 && (
                <motion.section className="king-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="king-sec-title">
                        <span className="king-sec-icon" style={{ background: 'rgba(245,158,11,0.1)', color: '#F59E0B' }}>🪙</span>
                        Coins & Currency
                    </h2>
                    <div className="king-coins-grid">
                        {ruler.coins.map((coin, i) => (
                            <motion.div
                                key={coin.name}
                                className="king-coin-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                            >
                                <div className="king-coin-icon">🪙</div>
                                <h4 className="king-coin-name">{coin.name}</h4>
                                <p className="king-coin-desc">{coin.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* ── IMPORTANT EVENTS ──────────────────────────────────────── */}
            {ruler.events && ruler.events.length > 0 && (
                <motion.section className="king-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="king-sec-title">
                        <span className="king-sec-icon" style={{ background: 'rgba(59,130,246,0.1)', color: '#3B82F6' }}>📅</span>
                        Important Events During Reign
                    </h2>
                    <div className="king-events-tl">
                        <div className="king-events-line" style={{ background: `${dynasty.color}20` }} />
                        {ruler.events.map((ev, i) => (
                            <motion.div key={i} className="king-event-item" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                                <div className="king-event-dot" style={{ background: dynasty.color }} />
                                <div className="king-event-content">
                                    {ev.year && <span className="king-event-year" style={{ color: dynasty.color }}>{ev.year}</span>}
                                    <p className="king-event-text">{ev.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* ── KEY ACHIEVEMENTS ───────────────────────────────────────── */}
            {ruler.achievements && ruler.achievements.length > 0 && (
                <motion.section className="king-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="king-sec-title">
                        <span className="king-sec-icon" style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981' }}>🏆</span>
                        Key Achievements
                    </h2>
                    <div className="king-achievements-grid">
                        {ruler.achievements.map((a, i) => (
                            <motion.div key={a} className="king-achievement" style={{ borderLeft: `3px solid ${dynasty.color}` }} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                                ✦ {a}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* ── DEATH & SUCCESSION ────────────────────────────────────── */}
            {ruler.death && (
                <motion.section className="king-section king-death-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="king-sec-title">
                        <span className="king-sec-icon" style={{ background: 'rgba(239,68,68,0.08)', color: '#F87171' }}>💀</span>
                        Death & Succession
                    </h2>
                    <p className="king-sec-text">{ruler.death}</p>
                </motion.section>
            )}

            {/* ── PREV / NEXT NAVIGATION ─────────────────────────────────── */}
            <div className="king-nav-bar">
                {prev ? (
                    <motion.button className="king-nav-btn" onClick={() => { navigate(`/empires/${id}/king/${idx - 1}`); window.scrollTo(0, 0) }} whileHover={{ x: -4 }}>
                        <span className="king-nav-arrow">←</span>
                        <div>
                            <span className="king-nav-label">Previous Ruler</span>
                            <span className="king-nav-name" style={{ color: dynasty.color }}>{prev.name}</span>
                        </div>
                    </motion.button>
                ) : <div />}
                {next ? (
                    <motion.button className="king-nav-btn right" onClick={() => { navigate(`/empires/${id}/king/${idx + 1}`); window.scrollTo(0, 0) }} whileHover={{ x: 4 }}>
                        <div style={{ textAlign: 'right' }}>
                            <span className="king-nav-label">Next Ruler</span>
                            <span className="king-nav-name" style={{ color: dynasty.color }}>{next.name}</span>
                        </div>
                        <span className="king-nav-arrow">→</span>
                    </motion.button>
                ) : <div />}
            </div>
        </div>
    )
}
