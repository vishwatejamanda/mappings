import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PHYSICAL_DIVISIONS } from '../data/geography'
import ConceptCard from '../components/ConceptCard'
import { FactGrid } from '../components/FactGrid'
import GeoBackNav from '../components/GeoBackNav'
import GeoNavFooter from '../components/GeoNavFooter'

const PAGE_STATS = [
    { icon: '🏔️', label: 'Highest Peak (India)', value: 'K2 — 8,611m', sub: 'In PoK', color: '#8B5CF6' },
    { icon: '🏛️', label: 'Oldest Landmass', value: 'Peninsular Plateau', sub: 'Precambrian >540 My', color: '#EF4444' },
    { icon: '🌊', label: 'Coastline', value: '7,516 km', sub: 'Including Islands', color: '#3B82F6' },
    { icon: '🏝️', label: 'Total Islands', value: '~1,382', sub: 'A&N: 572; Lakshadweep: 36', color: '#10B981' },
]

export default function IndianPhysical() {
    const [activeDiv, setActiveDiv] = useState(0)
    const division = PHYSICAL_DIVISIONS[activeDiv]

    return (
        <div className="geo-page">
            <GeoBackNav current="Physical Features" color={division.color} />
            {/* Hero */}
            <section className="geo-sub-hero" style={{ background: `linear-gradient(135deg, #0a0a1a 60%, ${division.color}22)` }}>
                <motion.div className="geo-sub-hero-content"
                    key={activeDiv} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <p className="geo-hero-eyebrow">Indian Geography › Physical Features</p>
                    <h1 className="geo-sub-hero-title">{division.icon} {division.title}</h1>
                    <p className="geo-sub-hero-subtitle" style={{ color: division.color }}>{division.subtitle}</p>
                </motion.div>
            </section>

            {/* Tab Nav */}
            <div className="geo-tab-bar">
                {PHYSICAL_DIVISIONS.map((d, i) => (
                    <motion.button key={d.id} className={`geo-tab ${activeDiv === i ? 'active' : ''}`}
                        onClick={() => setActiveDiv(i)}
                        whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                        style={activeDiv === i ? { borderColor: d.color, color: d.color, background: `${d.color}12` } : {}}>
                        {d.icon} {d.title.split(' ').slice(0, 2).join(' ')}
                    </motion.button>
                ))}
            </div>

            {/* Quick Stats */}
            <FactGrid items={PAGE_STATS} columns={4} />

            {/* Division Overview */}
            <AnimatePresence mode="wait">
                <motion.section key={activeDiv} className="geo-content-section"
                    initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.45 }}>

                    {/* Header info */}
                    <div className="geo-division-header">
                        <div className="geo-division-meta-grid">
                            {[
                                division.area && { icon: '📐', label: 'Area', val: division.area },
                                division.length && { icon: '📏', label: 'Length', val: division.length },
                                division.width && { icon: '↔️', label: 'Width', val: division.width },
                                division.age && { icon: '🕰️', label: 'Geological Age', val: division.age },
                                division.height && { icon: '⬆️', label: 'Height', val: division.height },
                            ].filter(Boolean).map((m, i) => (
                                <div key={i} className="geo-meta-chip" style={{ borderColor: `${division.color}30` }}>
                                    <span className="geo-meta-icon">{m.icon}</span>
                                    <div>
                                        <div className="geo-meta-label">{m.label}</div>
                                        <div className="geo-meta-val" style={{ color: division.color }}>{m.val}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="geo-overview-text">{division.overview}</p>
                        {division.origin && (
                            <div className="geo-origin-box" style={{ borderColor: `${division.color}40` }}>
                                <span style={{ color: division.color }}>🔬 Origin:</span> {division.origin}
                            </div>
                        )}
                    </div>

                    {/* Sub-divisions */}
                    <div className="geo-section-label" style={{ color: division.color }}>Sub-Divisions</div>
                    <div className="geo-divisions-grid">
                        {division.divisions?.map((sub, i) => (
                            <ConceptCard key={i} icon={sub.icon} title={sub.name}
                                subtitle={sub.altitude || `${sub.width || ''} ${sub.count || ''}`}
                                color={division.color}
                                facts={[sub.desc]}
                                upscPoints={[sub.upsc]}
                                delay={i * 0.07} />
                        ))}
                    </div>

                    {/* Sub-features (plains only) */}
                    {division.sub_features && (
                        <>
                            <div className="geo-section-label" style={{ color: division.color }}>Alluvial Sub-features</div>
                            <div className="geo-features-row">
                                {division.sub_features.map((sf, i) => (
                                    <motion.div key={i} className="geo-feature-badge"
                                        initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        style={{ borderColor: `${division.color}40`, background: `${division.color}0a` }}>
                                        <span className="geo-feature-badge-icon">{sf.icon}</span>
                                        <div>
                                            <strong style={{ color: division.color }}>{sf.name}</strong>
                                            <p>{sf.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Special features (coastal) */}
                    {division.special_features && (
                        <>
                            <div className="geo-section-label" style={{ color: division.color }}>Special Features</div>
                            <div className="geo-features-row">
                                {division.special_features.map((sf, i) => (
                                    <motion.div key={i} className="geo-feature-badge"
                                        initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        style={{ borderColor: `${division.color}40`, background: `${division.color}0a` }}>
                                        <span className="geo-feature-badge-icon">{sf.icon}</span>
                                        <div>
                                            <strong style={{ color: division.color }}>{sf.name}</strong>
                                            <p>{sf.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* UPSC Points */}
                    <div className="geo-upsc-section" style={{ borderColor: `${division.color}40`, background: `${division.color}08` }}>
                        <h3 className="geo-upsc-section-title" style={{ color: division.color }}>📌 UPSC Key Points — {division.title}</h3>
                        <div className="geo-upsc-points-grid">
                            {division.upsc_points?.map((pt, i) => (
                                <motion.div key={i} className="geo-upsc-point-card"
                                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                                    <span className="geo-upsc-point-num" style={{ background: division.color }}>{i + 1}</span>
                                    <span>{pt}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* Physical Divisions Overview */}
            <section className="geo-content-section">
                <div className="geo-section-label">📊 Comparative Overview — All 5 Divisions</div>
                <div className="geo-comparison-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Division</th><th>Area</th><th>Age</th><th>Rock Type</th><th>Relief</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['🏔️ Himalayas', '5 Lakh km²', 'Young (~40 Ma)', 'Sedimentary (folded)', 'Lofty, gorges, fold mountains'],
                                ['🌾 Northern Plains', '7 Lakh km²', 'Recent (Quaternary)', 'Alluvial deposits', 'Flat, fertile, river meanders'],
                                ['🏛️ Peninsular Plateau', '16 Lakh km²', 'Old (Precambrian)', 'Igneous & metamorphic', 'Block plateau, gentle E slope'],
                                ['🌊 Coastal Plains', 'Varies', 'Recent', 'Alluvial & marine', 'Low, flat, lagoonal features'],
                                ['🏝️ Islands', 'A&N: 8,249 km²', 'Varied origin', 'Volcanic & Coral', 'Hilly to flat coral'],
                            ].map((row, i) => (
                                <tr key={i}>
                                    {row.map((cell, j) => <td key={j}>{cell}</td>)}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <GeoNavFooter currentPath="/geography/indian-physical" />
        </div>
    )
}
