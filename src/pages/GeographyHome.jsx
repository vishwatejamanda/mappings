import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { INDIA_STATS, INDIA_GEO_SECTIONS, WORLD_GEO_SECTIONS, UPSC_MINDMAP } from '../data/geography'
import MindMapView from '../components/MindMapView'

const containerVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
}
const itemVar = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

export default function GeographyHome() {
    const navigate = useNavigate()

    return (
        <div className="geo-page">
            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="geo-hero">
                <div className="geo-hero-bg" />
                <motion.div className="geo-hero-content"
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                    <motion.div className="geo-hero-globe"
                        animate={{ rotate: [0, 360] }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}>
                        🌍
                    </motion.div>
                    <p className="geo-hero-eyebrow">UPSC Geography — Complete Syllabus</p>
                    <h1 className="geo-hero-title">
                        Geography<br />
                        <span className="geo-hero-accent">Through Knowledge</span>
                    </h1>
                    <p className="geo-hero-desc">
                        Comprehensive Indian & World Geography — Physical features, Rivers, Climate, Soils,
                        Natural Vegetation, Geomorphology, Climatology, Oceanography & Biomes. Learn through
                        visualizations, mindmaps, and UPSC-focused content.
                    </p>
                    <div className="geo-hero-badges">
                        {['Indian Geography', 'World Geography', 'UPSC Level', 'Visual Learning'].map(b => (
                            <span key={b} className="geo-badge">{b}</span>
                        ))}
                    </div>
                </motion.div>
                <div className="geo-hero-scroll-hint">
                    <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>↓</motion.span>
                </div>
            </section>

            {/* ── INDIA STATS STRIP ────────────────────────────── */}
            <section className="geo-stats-strip">
                <div className="geo-section-label">🇮🇳 India at a Glance</div>
                <motion.div className="geo-stats-scroll"
                    variants={containerVar} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {INDIA_STATS.map((s, i) => (
                        <motion.div key={i} className="geo-stat-chip" variants={itemVar}
                            style={{ borderColor: `${s.color}35`, background: `${s.color}0a` }}>
                            <span className="geo-stat-chip-icon" style={{ color: s.color }}>{s.icon}</span>
                            <div>
                                <div className="geo-stat-chip-value" style={{ color: s.color }}>{s.value}</div>
                                <div className="geo-stat-chip-label">{s.label}</div>
                                <div className="geo-stat-chip-sub">{s.sub}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── UPSC MINDMAP ─────────────────────────────────── */}
            <section className="geo-mindmap-section">
                <div className="geo-section-label">🗺️ UPSC Geography Syllabus — Mindmap</div>
                <h2 className="geo-section-title">Complete Geography at a Glance</h2>
                <p className="geo-section-sub">All major topics of UPSC Prelims + Mains Geography in one visual overview</p>
                <div className="geo-mindmap-container">
                    <MindMapView data={UPSC_MINDMAP} width={720} height={540} />
                </div>
            </section>

            {/* ── INDIAN GEOGRAPHY MODULES ─────────────────────── */}
            <section className="geo-modules-section">
                <div className="geo-section-label">🇮🇳 Indian Geography</div>
                <h2 className="geo-section-title" style={{ color: '#F59E0B' }}>India — Physical to Cultural</h2>
                <p className="geo-section-sub">From the Himalayas to the Coral Islands — explore every facet of India's diverse geography</p>
                <motion.div className="geo-modules-grid"
                    variants={containerVar} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
                    {INDIA_GEO_SECTIONS.map((sec, i) => (
                        <motion.button key={sec.id} className="geo-module-card" variants={itemVar}
                            onClick={() => navigate(sec.link)}
                            whileHover={{ y: -6, borderColor: sec.color, boxShadow: `0 8px 32px ${sec.color}25` }}>
                            <div className="geo-module-icon" style={{ background: `${sec.color}18`, color: sec.color }}>
                                {sec.icon}
                            </div>
                            <h3 className="geo-module-title" style={{ color: sec.color }}>{sec.title}</h3>
                            <p className="geo-module-desc">{sec.desc}</p>
                            <span className="geo-module-arrow" style={{ color: sec.color }}>Explore →</span>
                        </motion.button>
                    ))}
                </motion.div>
            </section>

            {/* ── WORLD GEOGRAPHY MODULES ──────────────────────── */}
            <section className="geo-modules-section" style={{ background: 'rgba(16,185,129,0.03)' }}>
                <div className="geo-section-label">🌍 World Geography</div>
                <h2 className="geo-section-title" style={{ color: '#10B981' }}>World — Concepts to Landscapes</h2>
                <p className="geo-section-sub">UPSC-level World Geography: Earth interior, climate systems, oceanography, and global biomes</p>
                <motion.div className="geo-modules-grid"
                    variants={containerVar} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
                    {WORLD_GEO_SECTIONS.map((sec, i) => (
                        <motion.button key={sec.id} className="geo-module-card" variants={itemVar}
                            onClick={() => navigate(sec.link)}
                            whileHover={{ y: -6, borderColor: sec.color, boxShadow: `0 8px 32px ${sec.color}25` }}>
                            <div className="geo-module-icon" style={{ background: `${sec.color}18`, color: sec.color }}>
                                {sec.icon}
                            </div>
                            <h3 className="geo-module-title" style={{ color: sec.color }}>{sec.title}</h3>
                            <p className="geo-module-desc">{sec.desc}</p>
                            <span className="geo-module-arrow" style={{ color: sec.color }}>Explore →</span>
                        </motion.button>
                    ))}
                </motion.div>
            </section>

            {/* ── UPSC STRATEGY ────────────────────────────────── */}
            <section className="geo-strategy-section">
                <div className="geo-section-label">📋 UPSC Strategy</div>
                <h2 className="geo-section-title">How Geography Appears in UPSC</h2>
                <div className="geo-strategy-grid">
                    {[
                        { exam: 'Prelims (GS-1)', icon: '📝', color: '#F59E0B', points: ['15–20 questions from Geography', 'Physical, Economic, World Geography', 'Maps, locations, current events geo', 'Atlas practice is essential'] },
                        { exam: 'Mains (GS-1)', icon: '📚', color: '#8B5CF6', points: ['Physical geography of world/India', 'Geophysical phenomena (earthquakes, tides, cyclones)', 'World geography — natural resources, human settlements', 'Indian geography with economic links'] },
                        { exam: 'Optional: Geography', icon: '🗺️', color: '#3B82F6', points: ['Paper 1: Physical Geography (systemic)', 'Paper 2: Human & Economic Geography', 'India-specific topics in Paper 2', 'Most scientific optional — scoring if conceptual'] },
                    ].map((item, i) => (
                        <motion.div key={i} className="geo-strategy-card"
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
                            style={{ borderLeft: `3px solid ${item.color}` }}>
                            <div className="geo-strategy-header">
                                <span className="geo-strategy-icon">{item.icon}</span>
                                <h3 className="geo-strategy-exam" style={{ color: item.color }}>{item.exam}</h3>
                            </div>
                            <ul className="geo-strategy-points">
                                {item.points.map((pt, j) => <li key={j}><span style={{ color: item.color }}>▸</span> {pt}</li>)}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}
