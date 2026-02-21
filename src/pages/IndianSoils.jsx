import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOILS } from '../data/geography'
import GeoBackNav from '../components/GeoBackNav'
import GeoNavFooter from '../components/GeoNavFooter'

export default function IndianSoils() {
    const [activeSoil, setActiveSoil] = useState(0)
    const soil = SOILS[activeSoil]

    return (
        <div className="geo-page">
            <GeoBackNav current="Soil Types" color="#65A30D" />
            <section className="geo-sub-hero" style={{ background: `linear-gradient(135deg, #ffffff 60%, ${soil.color}22)` }}>
                <motion.div className="geo-sub-hero-content"
                    key={activeSoil} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="geo-hero-eyebrow">Indian Geography › Soil Types</p>
                    <h1 className="geo-sub-hero-title">🌱 Soils of India</h1>
                    <p className="geo-sub-hero-subtitle" style={{ color: '#65A30D' }}>8 Major Soil Types — ICAR Classification — UPSC Level</p>
                </motion.div>
            </section>

            {/* Soil Palette Selector */}
            <div className="geo-content-section" style={{ paddingBottom: 0 }}>
                <div className="geo-section-label">🎨 Select Soil Type</div>
                <div className="geo-soil-palette">
                    {SOILS.map((s, i) => (
                        <motion.button key={i} className={`geo-soil-swatch ${activeSoil === i ? 'active' : ''}`}
                            onClick={() => setActiveSoil(i)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                            <div className="geo-soil-color-blob" style={{ background: s.hex, boxShadow: activeSoil === i ? `0 0 0 3px ${s.color}, 0 0 16px ${s.color}60` : undefined }} />
                            <span className="geo-soil-swatch-name">{s.icon}</span>
                            <span className="geo-soil-swatch-label">{s.name.split(' ').slice(0, 2).join(' ')}</span>
                            <span className="geo-soil-coverage" style={{ color: s.color }}>{s.coverage}</span>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Selected Soil Detail */}
            <AnimatePresence mode="wait">
                <motion.section key={activeSoil} className="geo-content-section"
                    initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}>

                    <div className="geo-soil-detail-layout">
                        {/* Left: color + basic info */}
                        <div className="geo-soil-visual-panel">
                            <motion.div className="geo-soil-big-sample"
                                style={{ background: `linear-gradient(145deg, ${soil.hex}cc, ${soil.hex})` }}
                                whileHover={{ scale: 1.02 }}>
                                <span className="geo-soil-big-icon">{soil.icon}</span>
                                <span className="geo-soil-big-coverage" style={{ color: '#fff' }}>{soil.coverage} of India</span>
                            </motion.div>
                            <div className="geo-soil-origin-box">
                                <h4 style={{ color: '#65A30D', marginBottom: 8 }}>🔬 Origin</h4>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{soil.origin}</p>
                            </div>
                            <div className="geo-soil-states">
                                <h4 style={{ color: '#65A30D', marginBottom: 8 }}>📍 Found In</h4>
                                <div className="geo-soil-state-tags">
                                    {soil.states.map(st => <span key={st} className="geo-soil-state-tag">{st}</span>)}
                                </div>
                            </div>
                        </div>

                        {/* Right: details */}
                        <div className="geo-soil-info-panel">
                            <h2 className="geo-soil-detail-title">{soil.name}</h2>

                            <div className="geo-soil-section">
                                <h4>⚙️ Properties</h4>
                                <ul className="geo-soil-list">
                                    {soil.properties.map((p, i) => <li key={i}><span style={{ color: '#65A30D' }}>◆</span> {p}</li>)}
                                </ul>
                            </div>

                            <div className="geo-soil-section">
                                <h4>🌾 Crops Best Grown</h4>
                                <div className="geo-crop-tags">
                                    {soil.crops.map(c => <span key={c} className="geo-crop-tag">{c}</span>)}
                                </div>
                            </div>

                            {soil.types.length > 0 && (
                                <div className="geo-soil-section">
                                    <h4>🔀 Sub-types</h4>
                                    {soil.types.map((t, i) => (
                                        <div key={i} className="geo-soil-subtype">
                                            <strong style={{ color: '#65A30D' }}>{t.name}:</strong> {t.desc}
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="geo-upsc-callout" style={{ borderColor: '#65A30D40', background: '#65A30D0c' }}>
                                <span style={{ color: '#65A30D' }}>📌 UPSC Key Points</span>
                                {soil.upsc_points.map((pt, i) => <p key={i}>{i + 1}. {pt}</p>)}
                            </div>
                        </div>
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* Soil Coverage Chart */}
            <section className="geo-content-section">
                <div className="geo-section-label">📊 Soil Coverage Comparison</div>
                <h2 className="geo-section-title">Area Distribution of Soil Types</h2>
                <div className="geo-soil-bar-chart">
                    {[...SOILS].sort((a, b) => parseFloat(b.coverage) - parseFloat(a.coverage)).map((s, i) => (
                        <div key={i} className="geo-soil-bar-row">
                            <div className="geo-soil-bar-label">
                                <span>{s.icon} {s.name}</span>
                                <span style={{ color: s.color }}>{s.coverage}</span>
                            </div>
                            <div className="geo-soil-bar-track">
                                <motion.div className="geo-soil-bar-fill"
                                    style={{ background: s.hex }}
                                    initial={{ width: 0 }} whileInView={{ width: s.coverage }}
                                    viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* UPSC Quick Revision */}
            <section className="geo-upsc-section" style={{ margin: '0 40px 60px', borderColor: '#65A30D40', background: '#65A30D08' }}>
                <h3 className="geo-upsc-section-title" style={{ color: '#65A30D' }}>📌 Soils — UPSC Quick Revision</h3>
                <div className="geo-upsc-points-grid">
                    {[
                        'Alluvial soil - most extensive (43%), most fertile; Khadar (new) & Bangar (old) types',
                        'Black/Regur soil = "Cotton Soil" — self-ploughing (swells when wet, shrinks/cracks when dry)',
                        'Laterite soil: from Latin "later" = brick; used as building material literally in Kerala',
                        'Arid/Desert soils have UNUSUALLY HIGH phosphate content — surprising for UPSC',
                        'Kuttanad in Kerala = farming BELOW sea level on peaty soil — UNESCO heritage system',
                        'Saline soils reclaimed by gypsum (CaSO₄) — replaces Na⁺ ions with Ca²⁺',
                        'Red soil gets color from Fe₂O₃ (iron oxide); turns yellow when hydrated (Fe₂O₃·H₂O)',
                        'ICAR (Indian Council of Agricultural Research) classifies India\'s soils into 8 types',
                    ].map((pt, i) => (
                        <div key={i} className="geo-upsc-point-card">
                            <span className="geo-upsc-point-num" style={{ background: '#65A30D' }}>{i + 1}</span>
                            <span>{pt}</span>
                        </div>
                    ))}
                </div>
            </section>
            <GeoNavFooter currentPath="/geography/indian-soils" />
        </div>
    )
}
