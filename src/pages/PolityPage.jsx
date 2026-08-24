import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { POLITY_ERAS, KEY_ARTICLES, KEY_AMENDMENTS, GOVERNANCE_COMPARISON, CONSTITUTIONAL_BODIES } from '../data/polity'

const containerVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
}
const itemVar = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export default function PolityPage() {
    const navigate = useNavigate()
    const [activeEra, setActiveEra] = useState('ancient')
    const [expandedSystem, setExpandedSystem] = useState(null)
    const [articleFilter, setArticleFilter] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')

    const era = POLITY_ERAS.find(e => e.id === activeEra)
    const articleCategories = [...new Set(KEY_ARTICLES.map(a => a.category))]

    const filteredArticles = KEY_ARTICLES.filter(a => {
        const matchesCat = !articleFilter || a.category === articleFilter
        const matchesQuery = !searchQuery || 
            a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.article.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCat && matchesQuery
    })

    return (
        <div className="polity-page">
            {/* ── CINEMATIC HERO WITH GENERATED ARTWORK ───────────────── */}
            <section className="page-hero-banner">
                <div className="page-hero-art" style={{ backgroundImage: `url('/images/polity_banner.jpg')` }} />
                <div className="page-hero-tint" />
                <motion.div className="page-hero-content"
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                    <div className="page-hero-badge">
                        <span>⚖️</span>
                        <span>UPSC Polity & Constitutional Governance</span>
                    </div>
                    <h1 className="page-hero-title">
                        Indian Polity &<br />
                        <span className="gold-shimmer-text">Constitutional Matrix</span>
                    </h1>
                    <p className="page-hero-desc">
                        From the democratic Sabhas & Samitis of the Vedic Janapadas to Kautilya's Arthashastra
                        and the world's most comprehensive sovereign Constitution.
                    </p>
                    <div className="page-hero-metrics">
                        <div className="metric-pill"><span className="metric-val">395+</span> Articles Framework</div>
                        <div className="metric-pill"><span className="metric-val">105+</span> Landmark Amendments</div>
                        <div className="metric-pill"><span className="metric-val">5000 Yrs</span> Evolution of Statecraft</div>
                    </div>
                </motion.div>
            </section>

            {/* ── ERA-BY-ERA GOVERNANCE SYSTEMS ──────────────────────── */}
            <section className="polity-era-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Historical Epochs</span>
                    <h2 className="section-title">Evolution of Statecraft</h2>
                    <p className="section-subtitle">Select an era to explore its administrative institutions, councils, and legal traditions</p>
                </div>

                <div className="polity-era-tabs">
                    {POLITY_ERAS.map(e => (
                        <motion.button key={e.id}
                            className={`polity-era-tab ${activeEra === e.id ? 'active' : ''}`}
                            onClick={() => { setActiveEra(e.id); setExpandedSystem(null) }}
                            whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                            style={activeEra === e.id ? { borderColor: e.color, background: `linear-gradient(135deg, ${e.color}20, rgba(13,17,23,0.85))` } : {}}>
                            <span className="polity-era-tab-icon">{e.icon}</span>
                            <div className="polity-era-tab-meta">
                                <div className="polity-era-tab-title">{e.title}</div>
                                <div className="polity-era-tab-period">{e.period}</div>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Active Era Detail Box */}
                <AnimatePresence mode="wait">
                    <motion.div key={activeEra} className="polity-era-overview glass-panel"
                        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35 }}>
                        <div className="polity-era-header">
                            <div className="polity-era-icon-badge" style={{ background: `${era.color}25`, color: era.color, borderColor: `${era.color}50` }}>
                                {era.icon}
                            </div>
                            <div>
                                <h3 className="polity-era-title" style={{ color: era.color }}>{era.title}</h3>
                                <p className="polity-era-period">{era.period}</p>
                            </div>
                        </div>
                        <p className="polity-era-desc">{era.overview}</p>

                        {/* Systems Grid */}
                        <div className="polity-systems-grid">
                            {era.systems.map((sys) => (
                                <motion.div key={sys.name} 
                                    className={`polity-system-card ${expandedSystem === sys.name ? 'expanded' : ''}`}
                                    variants={itemVar}
                                    onClick={() => setExpandedSystem(expandedSystem === sys.name ? null : sys.name)}
                                    style={expandedSystem === sys.name ? { borderColor: era.color, boxShadow: `0 8px 30px ${era.color}25` } : {}}>
                                    <div className="polity-system-header">
                                        <div>
                                            <h4 className="polity-system-name">{sys.name}</h4>
                                            <span className="polity-system-period" style={{ color: era.color }}>{sys.period}</span>
                                        </div>
                                        <span className="polity-system-toggle">{expandedSystem === sys.name ? '▲' : '▼'}</span>
                                    </div>
                                    <p className="polity-system-desc">{sys.desc}</p>

                                    <AnimatePresence>
                                        {expandedSystem === sys.name && (
                                            <motion.div className="polity-system-detail"
                                                initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                                                <ul className="polity-system-points">
                                                    {sys.keyPoints.map((pt, j) => (
                                                        <li key={j}><span style={{ color: era.color }}>✦</span> {pt}</li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* ── KEY CONSTITUTIONAL ARTICLES ────────────────────────── */}
            <section className="polity-articles-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Constitutional Core</span>
                    <h2 className="section-title">Essential Articles at a Glance</h2>
                    <p className="section-subtitle">High-yield articles for UPSC Prelims & Mains examination analysis</p>
                </div>

                <div className="polity-search-bar-wrap">
                    <input 
                        type="text" 
                        placeholder="🔍 Search article by number (e.g. 21, 32) or keywords (e.g. Equality, Emergency)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="polity-search-input"
                    />
                </div>

                <div className="polity-article-filters">
                    <button className={`polity-filter-btn ${!articleFilter ? 'active' : ''}`}
                        onClick={() => setArticleFilter(null)}>
                        All Articles ({KEY_ARTICLES.length})
                    </button>
                    {articleCategories.map(cat => (
                        <button key={cat}
                            className={`polity-filter-btn ${articleFilter === cat ? 'active' : ''}`}
                            onClick={() => setArticleFilter(articleFilter === cat ? null : cat)}>
                            {cat.toUpperCase()} ({KEY_ARTICLES.filter(a => a.category === cat).length})
                        </button>
                    ))}
                </div>

                <motion.div className="polity-articles-grid"
                    variants={containerVar} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {filteredArticles.map(art => (
                        <motion.div key={art.article} className="polity-article-card" variants={itemVar}
                            whileHover={{ y: -4, borderColor: art.color }}
                            style={{ borderLeft: `4px solid ${art.color}` }}>
                            <div className="polity-article-head">
                                <span className="polity-article-number" style={{ color: art.color, background: `${art.color}15` }}>
                                    Art. {art.article}
                                </span>
                                <span className="polity-article-tag">{art.category}</span>
                            </div>
                            <h4 className="polity-article-title">{art.title}</h4>
                            <p className="polity-article-desc">{art.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── LANDMARK CONSTITUTIONAL AMENDMENTS ──────────────────── */}
            <section className="polity-amendments-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Constitutional Evolution</span>
                    <h2 className="section-title">Landmark Amendments Timeline</h2>
                    <p className="section-subtitle">Decisive modifications that adapted the Constitution to modern governance</p>
                </div>

                <div className="polity-amendments-timeline">
                    <div className="polity-amend-line" />
                    {KEY_AMENDMENTS.map((amend, i) => (
                        <motion.div key={amend.number} className={`polity-amend-row ${i % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.06 }}>
                            <div className="polity-amend-dot" style={{ background: amend.color, boxShadow: `0 0 16px ${amend.color}60` }}>
                                <span className="polity-amend-year">{amend.year}</span>
                            </div>
                            <div className="polity-amend-card glass-panel" style={{ borderLeft: `4px solid ${amend.color}` }}>
                                <span className="polity-amend-number" style={{ color: amend.color }}>{amend.number} Constitutional Amendment</span>
                                <h4 className="polity-amend-title">{amend.title}</h4>
                                <p className="polity-amend-desc">{amend.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── GOVERNANCE MATRIX COMPARISON TABLE ──────────────────── */}
            <section className="polity-comparison-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Comparative Matrix</span>
                    <h2 className="section-title">Governance Through the Ages</h2>
                    <p className="section-subtitle">Cross-era comparison of constitutional roles, taxation, judiciary, and local administration</p>
                </div>

                <div className="polity-comparison-table-wrap glass-panel">
                    <table className="polity-comparison-table">
                        <thead>
                            <tr>
                                <th>Institutional Aspect</th>
                                <th style={{ color: '#F59E0B' }}>Ancient Bharat</th>
                                <th style={{ color: '#A855F7' }}>Medieval Era</th>
                                <th style={{ color: '#EC4899' }}>Mughal Empire</th>
                                <th style={{ color: '#EF4444' }}>British Colonial</th>
                                <th style={{ color: '#38BDF8' }}>Modern Republic</th>
                            </tr>
                        </thead>
                        <tbody>
                            {GOVERNANCE_COMPARISON.map(row => (
                                <tr key={row.aspect}>
                                    <td className="polity-compare-aspect">{row.aspect}</td>
                                    <td>{row.ancient}</td>
                                    <td>{row.medieval}</td>
                                    <td>{row.mughal}</td>
                                    <td>{row.british}</td>
                                    <td style={{ color: '#38BDF8', fontWeight: 500 }}>{row.modern}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ── CONSTITUTIONAL BODIES ───────────────────────────────── */}
            <section className="polity-bodies-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Pillars of Republic</span>
                    <h2 className="section-title">Constitutional Bodies</h2>
                    <p className="section-subtitle">Autonomous institutions guaranteeing the rule of law and democratic accountability</p>
                </div>

                <motion.div className="polity-bodies-grid"
                    variants={containerVar} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {CONSTITUTIONAL_BODIES.map(body => (
                        <motion.div key={body.name} className="polity-body-card glass-panel" variants={itemVar}
                            whileHover={{ y: -6, borderColor: body.color }}
                            style={{ borderTop: `4px solid ${body.color}` }}>
                            <span className="polity-body-icon">{body.icon}</span>
                            <h4 className="polity-body-name">{body.name}</h4>
                            <span className="polity-body-article" style={{ color: body.color }}>Article {body.article}</span>
                            <p className="polity-body-desc">{body.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    )
}
