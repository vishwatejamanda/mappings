import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getDynastyById } from '../data/dynasties'

function RulerPage() {
    const { dynastyId, rulerIndex } = useParams()
    const navigate = useNavigate()
    const dynasty = getDynastyById(dynastyId)
    const idx = parseInt(rulerIndex)

    if (!dynasty || isNaN(idx) || !dynasty.rulers[idx]) {
        return (
            <div className="ruler-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: 16 }}>Ruler not found</h2>
                    <button className="btn btn-primary" onClick={() => navigate('/history')}>← Back</button>
                </div>
            </div>
        )
    }

    const ruler = dynasty.rulers[idx]
    const prev = idx > 0 ? dynasty.rulers[idx - 1] : null
    const next = idx < dynasty.rulers.length - 1 ? dynasty.rulers[idx + 1] : null

    return (
        <div className="ruler-page">
            {/* Hero */}
            <section className="ruler-hero" style={{ borderBottom: `3px solid ${dynasty.color}20` }}>
                <div className="ruler-hero-bg" style={{ background: `radial-gradient(ellipse at 30% 20%, ${dynasty.color}12 0%, transparent 60%)` }} />
                <motion.div className="ruler-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <div className="ruler-breadcrumb">
                        <button className="dynasty-back-btn" onClick={() => navigate(`/dynasty/${dynastyId}`)}>← {dynasty.name}</button>
                        <span className="ruler-bc-sep">›</span>
                        <span className="ruler-bc-current" style={{ color: dynasty.color }}>Ruler {idx + 1} of {dynasty.rulers.length}</span>
                    </div>
                    <div className="ruler-hero-number" style={{ background: dynasty.color }}>{idx + 1}</div>
                    <h1 className="ruler-hero-name" style={{ color: dynasty.color }}>{ruler.name}</h1>
                    <p className="ruler-hero-title">{ruler.title}</p>
                    <p className="ruler-hero-period">{ruler.period}</p>
                    <p className="ruler-hero-dynasty">{dynasty.name} · {dynasty.capital}</p>
                </motion.div>
            </section>

            {/* Coronation */}
            {ruler.coronation && (
                <motion.section className="ruler-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="ruler-sec-title"><span className="ruler-sec-icon" style={{ background: `${dynasty.color}15`, color: dynasty.color }}>👑</span>Rise to Power</h2>
                    <p className="ruler-sec-text">{ruler.coronation}</p>
                </motion.section>
            )}

            {/* Full Biography */}
            <motion.section className="ruler-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h2 className="ruler-sec-title"><span className="ruler-sec-icon" style={{ background: `${dynasty.color}15`, color: dynasty.color }}>📖</span>Biography</h2>
                <p className="ruler-sec-text">{ruler.bio}</p>
            </motion.section>

            {/* Conquests */}
            {ruler.conquests && ruler.conquests.length > 0 && (
                <motion.section className="ruler-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="ruler-sec-title"><span className="ruler-sec-icon" style={{ background: 'rgba(239,68,68,0.1)', color: '#EF4444' }}>⚔️</span>Conquests & Wars</h2>
                    <div className="ruler-conquests">
                        {ruler.conquests.map((c, i) => (
                            <motion.div key={i} className="ruler-conquest-card" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                                <span className="ruler-conquest-num" style={{ color: dynasty.color }}>{i + 1}</span>
                                <div>
                                    <h4 className="ruler-conquest-title">{c.title}</h4>
                                    <p className="ruler-conquest-desc">{c.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* Important Events */}
            {ruler.events && ruler.events.length > 0 && (
                <motion.section className="ruler-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="ruler-sec-title"><span className="ruler-sec-icon" style={{ background: 'rgba(59,130,246,0.1)', color: '#3B82F6' }}>📅</span>Important Events During Reign</h2>
                    <div className="ruler-events-tl">
                        <div className="ruler-events-line" style={{ background: `${dynasty.color}20` }} />
                        {ruler.events.map((ev, i) => (
                            <motion.div key={i} className="ruler-event-item" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                                <div className="ruler-event-dot" style={{ background: dynasty.color }} />
                                <div className="ruler-event-content">
                                    {ev.year && <span className="ruler-event-year" style={{ color: dynasty.color }}>{ev.year}</span>}
                                    <p className="ruler-event-text">{ev.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* Achievements */}
            {ruler.achievements && ruler.achievements.length > 0 && (
                <motion.section className="ruler-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="ruler-sec-title"><span className="ruler-sec-icon" style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981' }}>🏆</span>Key Achievements</h2>
                    <div className="ruler-achievements-grid">
                        {ruler.achievements.map((a, i) => (
                            <motion.div key={a} className="ruler-achievement" style={{ borderLeft: `3px solid ${dynasty.color}` }} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                                {a}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* Death / End */}
            {ruler.death && (
                <motion.section className="ruler-section ruler-death-section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="ruler-sec-title"><span className="ruler-sec-icon" style={{ background: 'rgba(239,68,68,0.08)', color: '#F87171' }}>💀</span>Death & Succession</h2>
                    <p className="ruler-sec-text">{ruler.death}</p>
                </motion.section>
            )}

            {/* Prev / Next navigation */}
            <div className="ruler-nav-bar">
                {prev ? (
                    <motion.button className="ruler-nav-btn" onClick={() => { navigate(`/dynasty/${dynastyId}/ruler/${idx - 1}`); window.scrollTo(0, 0) }} whileHover={{ x: -4 }}>
                        <span className="ruler-nav-arrow">←</span>
                        <div>
                            <span className="ruler-nav-label">Previous Ruler</span>
                            <span className="ruler-nav-name" style={{ color: dynasty.color }}>{prev.name}</span>
                        </div>
                    </motion.button>
                ) : <div />}
                {next ? (
                    <motion.button className="ruler-nav-btn right" onClick={() => { navigate(`/dynasty/${dynastyId}/ruler/${idx + 1}`); window.scrollTo(0, 0) }} whileHover={{ x: 4 }}>
                        <div style={{ textAlign: 'right' }}>
                            <span className="ruler-nav-label">Next Ruler</span>
                            <span className="ruler-nav-name" style={{ color: dynasty.color }}>{next.name}</span>
                        </div>
                        <span className="ruler-nav-arrow">→</span>
                    </motion.button>
                ) : <div />}
            </div>
        </div>
    )
}

export default RulerPage
