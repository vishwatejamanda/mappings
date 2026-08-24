import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CULTURE_SECTIONS, UNESCO_SITES, FESTIVALS } from '../data/culture'

const containerVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
}
const itemVar = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export default function CulturePage() {
    const [activeSection, setActiveSection] = useState('architecture')
    const [expandedItem, setExpandedItem] = useState(null)
    const [unescoFilter, setUnescoFilter] = useState(null)

    const section = CULTURE_SECTIONS.find(s => s.id === activeSection)
    const filteredUnesco = unescoFilter ? UNESCO_SITES.filter(s => s.type === unescoFilter) : UNESCO_SITES

    return (
        <div className="culture-page">
            {/* ── CINEMATIC HERO WITH GENERATED ARTWORK ───────────────── */}
            <section className="page-hero-banner">
                <div className="page-hero-art" style={{ backgroundImage: `url('/images/culture_banner.jpg')` }} />
                <div className="page-hero-tint" />
                <motion.div className="page-hero-content"
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
                    <div className="page-hero-badge">
                        <span>🎭</span>
                        <span>UPSC Art & Heritage of India</span>
                    </div>
                    <h1 className="page-hero-title">
                        Indian Art &<br />
                        <span className="gold-shimmer-text">Cultural Heritage</span>
                    </h1>
                    <p className="page-hero-desc">
                        Explore monumental rock-cut cave temples, classical Nagara and Dravidian architecture,
                        Ajanta murals, miniature painting traditions, Natya Shastra dance forms, and UNESCO World Heritage treasures.
                    </p>
                    <div className="page-hero-metrics">
                        <div className="metric-pill"><span className="metric-val">42+</span> UNESCO World Heritage Sites</div>
                        <div className="metric-pill"><span className="metric-val">8</span> Classical Dance Traditions</div>
                        <div className="metric-pill"><span className="metric-val">3</span> Great Temple Architectures</div>
                    </div>
                </motion.div>
            </section>

            {/* ── CULTURE DOMAIN TABS ─────────────────────────────────── */}
            <section className="culture-tabs-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Artistic Disciplines</span>
                    <h2 className="section-title">Domains of Classical Expression</h2>
                    <p className="section-subtitle">Deep dive into Architecture, Visual Arts, Music & Dance, and Canonical Literature</p>
                </div>

                <div className="culture-tabs">
                    {CULTURE_SECTIONS.map(s => (
                        <motion.button key={s.id}
                            className={`culture-tab ${activeSection === s.id ? 'active' : ''}`}
                            onClick={() => { setActiveSection(s.id); setExpandedItem(null) }}
                            whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                            style={activeSection === s.id ? { borderColor: s.color, background: `linear-gradient(135deg, ${s.color}20, rgba(13,17,23,0.85))` } : {}}>
                            <span className="culture-tab-icon">{s.icon}</span>
                            <span className="culture-tab-title">{s.title}</span>
                        </motion.button>
                    ))}
                </div>

                {/* Section Content */}
                <AnimatePresence mode="wait">
                    <motion.div key={activeSection} className="culture-section-content glass-panel"
                        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35 }}>
                        <div className="culture-section-header">
                            <div className="culture-icon-badge" style={{ background: `${section.color}25`, color: section.color, borderColor: `${section.color}50` }}>
                                {section.icon}
                            </div>
                            <div>
                                <h3 className="culture-section-title" style={{ color: section.color }}>{section.title}</h3>
                                <p className="culture-section-desc">{section.desc}</p>
                            </div>
                        </div>

                        <motion.div className="culture-items-grid"
                            variants={containerVar} initial="hidden" animate="visible">
                            {section.items.map((item) => (
                                <motion.div key={item.name}
                                    className={`culture-item-card ${expandedItem === item.name ? 'expanded' : ''}`}
                                    variants={itemVar}
                                    onClick={() => setExpandedItem(expandedItem === item.name ? null : item.name)}
                                    style={expandedItem === item.name ? { borderColor: item.color || section.color, boxShadow: `0 8px 30px ${(item.color || section.color)}25` } : {}}>

                                    <div className="culture-item-header">
                                        <div>
                                            <h4 className="culture-item-name">{item.name}</h4>
                                            <span className="culture-item-period" style={{ color: item.color || section.color }}>{item.period}</span>
                                        </div>
                                        <span className="culture-item-toggle">{expandedItem === item.name ? '▲' : '▼'}</span>
                                    </div>
                                    <p className="culture-item-desc">{item.desc}</p>

                                    <AnimatePresence>
                                        {expandedItem === item.name && (
                                            <motion.div className="culture-item-detail"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}>

                                                {item.examples && (
                                                    <div className="culture-detail-block">
                                                        <h5 style={{ color: item.color || section.color }}>🏛️ Canonical Examples</h5>
                                                        <div className="culture-examples">
                                                            {item.examples.map(ex => (
                                                                <span key={ex} className="culture-example-tag"
                                                                    style={{ borderColor: `${item.color || section.color}40`, color: item.color || section.color, background: `${item.color || section.color}15` }}>
                                                                    ✦ {ex}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {item.keyFeatures && (
                                                    <div className="culture-detail-block">
                                                        <h5 style={{ color: item.color || section.color }}>📌 Key Architectural & Stylistic Traits</h5>
                                                        <ul className="culture-features-list">
                                                            {item.keyFeatures.map(f => (
                                                                <li key={f}><span style={{ color: item.color || section.color }}>✦</span> {f}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* ── UNESCO WORLD HERITAGE SITES ─────────────────────────── */}
            <section className="culture-unesco-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Global Recognition</span>
                    <h2 className="section-title">UNESCO World Heritage Treasures</h2>
                    <p className="section-subtitle">Monuments and natural wonders of outstanding universal value across India</p>
                </div>

                <div className="culture-unesco-filters">
                    <button className={`unesco-filter-btn ${!unescoFilter ? 'active' : ''}`}
                        onClick={() => setUnescoFilter(null)}>
                        All Sites ({UNESCO_SITES.length})
                    </button>
                    <button className={`unesco-filter-btn ${unescoFilter === 'Cultural' ? 'active' : ''}`}
                        onClick={() => setUnescoFilter(unescoFilter === 'Cultural' ? null : 'Cultural')}>
                        Cultural Sites ({UNESCO_SITES.filter(s => s.type === 'Cultural').length})
                    </button>
                    <button className={`unesco-filter-btn ${unescoFilter === 'Natural' ? 'active' : ''}`}
                        onClick={() => setUnescoFilter(unescoFilter === 'Natural' ? null : 'Natural')}>
                        Natural Wonders ({UNESCO_SITES.filter(s => s.type === 'Natural').length})
                    </button>
                </div>

                <motion.div className="culture-unesco-grid"
                    variants={containerVar} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {filteredUnesco.map(site => (
                        <motion.div key={site.name} className="culture-unesco-card glass-panel" variants={itemVar}
                            whileHover={{ y: -6, borderColor: site.color }}
                            style={{ borderTop: `4px solid ${site.color}` }}>
                            <div className="unesco-card-head">
                                <span className="culture-unesco-type" style={{ color: site.color, background: `${site.color}20` }}>
                                    {site.type} · {site.year}
                                </span>
                                <span className="culture-unesco-loc">📍 {site.location}</span>
                            </div>
                            <h4 className="culture-unesco-name">{site.name}</h4>
                            <p className="culture-unesco-desc">{site.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── PAN-INDIAN FESTIVAL HERITAGE ────────────────────────── */}
            <section className="culture-festivals-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Living Traditions</span>
                    <h2 className="section-title">Festivals of Bharat</h2>
                    <p className="section-subtitle">The rhythm of seasonal, harvest, and devotional celebrations across states</p>
                </div>

                <motion.div className="culture-festivals-grid"
                    variants={containerVar} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {FESTIVALS.map(fest => (
                        <motion.div key={fest.name} className="culture-festival-card glass-panel" variants={itemVar}
                            whileHover={{ y: -5, borderColor: fest.color }}
                            style={{ borderLeft: `4px solid ${fest.color}` }}>
                            <span className="culture-festival-icon">{fest.icon}</span>
                            <div className="festival-info">
                                <div className="festival-title-row">
                                    <h4 className="culture-festival-name">{fest.name}</h4>
                                    <span className="culture-festival-region" style={{ color: fest.color, background: `${fest.color}15` }}>{fest.region}</span>
                                </div>
                                <p className="culture-festival-desc">{fest.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    )
}
