import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ECONOMY_ERAS, GDP_MILESTONES, TRADE_ROUTES, ECONOMIC_REFORMERS } from '../data/economy'

const containerVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
}
const itemVar = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export default function EconomyPage() {
    const [activeEra, setActiveEra] = useState('ancient')
    const era = ECONOMY_ERAS.find(e => e.id === activeEra)

    return (
        <div className="economy-page">
            {/* ── CINEMATIC HERO WITH GENERATED ARTWORK ───────────────── */}
            <section className="page-hero-banner">
                <div className="page-hero-art" style={{ backgroundImage: `url('/images/economy_banner.jpg')` }} />
                <div className="page-hero-tint" />
                <motion.div className="page-hero-content"
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                    <div className="page-hero-badge">
                        <span>📊</span>
                        <span>UPSC Economics & Indian Economic History</span>
                    </div>
                    <h1 className="page-hero-title">
                        Indian Economy Through<br />
                        <span className="gold-shimmer-text">Five Millennia</span>
                    </h1>
                    <p className="page-hero-desc">
                        From leading global trade networks with 32% of world GDP to colonial wealth drainage,
                        the Green Revolution, 1991 LPG reforms, and contemporary fintech leadership.
                    </p>
                    <div className="page-hero-metrics">
                        <div className="metric-pill"><span className="metric-val">32%</span> Ancient World GDP Share</div>
                        <div className="metric-pill"><span className="metric-val">5th</span> Largest Global Economy Today</div>
                        <div className="metric-pill"><span className="metric-val">10B+</span> Monthly UPI Transactions</div>
                    </div>
                </motion.div>
            </section>

            {/* ── 2000-YEAR GDP SHARE VISUALIZER ──────────────────────── */}
            <section className="economy-gdp-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Macro-Economic Trajectory</span>
                    <h2 className="section-title">India's Share of World GDP (1 CE – 2026)</h2>
                    <p className="section-subtitle">Based on historical economic datasets by Angus Maddison & OECD economic history studies</p>
                </div>

                <div className="economy-gdp-chart-panel glass-panel">
                    <div className="economy-gdp-chart">
                        {GDP_MILESTONES.map((m, i) => (
                            <motion.div key={m.year} className="economy-gdp-bar-wrap"
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                                <div className="economy-gdp-bar-container">
                                    <motion.div className="economy-gdp-bar"
                                        style={{ 
                                            background: `linear-gradient(180deg, ${m.color}, ${m.color}80)`,
                                            boxShadow: `0 0 16px ${m.color}40`
                                        }}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${(m.gdpShare / 35) * 100}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                                        <span className="economy-gdp-value">{m.gdpShare}%</span>
                                    </motion.div>
                                </div>
                                <span className="economy-gdp-year">{m.year <= 0 ? `${Math.abs(m.year)} BCE` : `${m.year} CE`}</span>
                            </motion.div>
                        ))}
                    </div>
                    <div className="economy-gdp-footer">
                        <div className="gdp-legend-item"><span className="legend-dot" style={{ background: '#F59E0B' }} /> Ancient Dominance (1–1000 CE)</div>
                        <div className="gdp-legend-item"><span className="legend-dot" style={{ background: '#A855F7' }} /> Mughal Golden Age (1500–1700 CE)</div>
                        <div className="gdp-legend-item"><span className="legend-dot" style={{ background: '#EF4444' }} /> Colonial Drain (1820–1950 CE)</div>
                        <div className="gdp-legend-item"><span className="legend-dot" style={{ background: '#10B981' }} /> Modern Resurgence (1991–Present)</div>
                    </div>
                </div>
            </section>

            {/* ── ERA-BY-ERA ECONOMIC ANALYSIS ────────────────────────── */}
            <section className="economy-era-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Detailed Eras</span>
                    <h2 className="section-title">Economic Paradigms Across Epochs</h2>
                    <p className="section-subtitle">Coinage, guild systems (Shrenis), taxation models, agrarian systems & industrial policies</p>
                </div>

                <div className="economy-era-tabs">
                    {ECONOMY_ERAS.map(e => (
                        <motion.button key={e.id}
                            className={`economy-era-tab ${activeEra === e.id ? 'active' : ''}`}
                            onClick={() => setActiveEra(e.id)}
                            whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                            style={activeEra === e.id ? { borderColor: e.color, background: `linear-gradient(135deg, ${e.color}20, rgba(13,17,23,0.85))` } : {}}>
                            <span className="economy-era-tab-icon">{e.icon}</span>
                            <div className="economy-era-tab-meta">
                                <div className="economy-era-tab-title">{e.title}</div>
                                <div className="economy-era-tab-period">{e.period}</div>
                            </div>
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div key={activeEra} className="economy-era-content glass-panel"
                        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35 }}>
                        <div className="economy-era-header">
                            <div className="economy-era-icon-badge" style={{ background: `${era.color}25`, color: era.color, borderColor: `${era.color}50` }}>
                                {era.icon}
                            </div>
                            <div>
                                <h3 className="economy-era-title" style={{ color: era.color }}>{era.title}</h3>
                                <p className="economy-era-period">{era.period}</p>
                            </div>
                        </div>
                        <p className="economy-era-desc">{era.overview}</p>

                        <motion.div className="economy-highlights-grid"
                            variants={containerVar} initial="hidden" animate="visible">
                            {era.highlights.map((h) => (
                                <motion.div key={h.title} className="economy-highlight-card" variants={itemVar}
                                    whileHover={{ y: -4, borderColor: era.color }}
                                    style={{ borderLeft: `4px solid ${era.color}` }}>
                                    <span className="economy-highlight-icon">{h.icon}</span>
                                    <h4 className="economy-highlight-title">{h.title}</h4>
                                    <p className="economy-highlight-desc">{h.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* ── ANCIENT TRADE ARTERIES ──────────────────────────────── */}
            <section className="economy-trade-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Global Commerce</span>
                    <h2 className="section-title">Trade Routes & Maritime Hubs</h2>
                    <p className="section-subtitle">How Indian textiles, spices, metallurgy, and gems connected the ancient Mediterranean to East Asia</p>
                </div>

                <motion.div className="economy-trade-grid"
                    variants={containerVar} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {TRADE_ROUTES.map(route => (
                        <motion.div key={route.name} className="economy-trade-card glass-panel" variants={itemVar}
                            whileHover={{ y: -6, borderColor: route.color }}
                            style={{ borderTop: `4px solid ${route.color}` }}>
                            <h4 className="economy-trade-name" style={{ color: route.color }}>{route.name}</h4>
                            <p className="economy-trade-desc">{route.desc}</p>
                            <div className="economy-trade-destinations">
                                {route.destinations.map(d => (
                                    <span key={d} className="economy-trade-dest" 
                                        style={{ borderColor: `${route.color}50`, color: route.color, background: `${route.color}15` }}>
                                        ✦ {d}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── ECONOMIC VISIONARIES & REFORMERS ───────────────────── */}
            <section className="economy-reformers-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Economic Thought</span>
                    <h2 className="section-title">Architects of Indian Economic Destiny</h2>
                    <p className="section-subtitle">Pioneers who theorized, planned, and transformed India's economic structures</p>
                </div>

                <motion.div className="economy-reformers-grid"
                    variants={containerVar} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {ECONOMIC_REFORMERS.map(person => (
                        <motion.div key={person.name} className="economy-reformer-card glass-panel" variants={itemVar}
                            whileHover={{ y: -5, borderColor: person.color }}
                            style={{ borderLeft: `4px solid ${person.color}` }}>
                            <h4 className="economy-reformer-name">{person.name}</h4>
                            <span className="economy-reformer-title" style={{ color: person.color }}>{person.title}</span>
                            <p className="economy-reformer-desc">{person.contribution}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    )
}
