import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CLIMATE_SEASONS, MONSOON_MECHANISM, CLIMATE_TYPES } from '../data/geography'
import GeoBackNav from '../components/GeoBackNav'
import GeoNavFooter from '../components/GeoNavFooter'

export default function IndianClimate() {
    const [activeSeason, setActiveSeason] = useState(0)
    const season = CLIMATE_SEASONS[activeSeason]

    return (
        <div className="geo-page">
            <GeoBackNav current="Climate & Monsoon" color={season.color} />
            <section className="geo-sub-hero" style={{ background: `linear-gradient(135deg, #0a0a1a 60%, ${season.color}22)` }}>
                <motion.div className="geo-sub-hero-content"
                    key={activeSeason} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="geo-hero-eyebrow">Indian Geography › Climate & Monsoon</p>
                    <h1 className="geo-sub-hero-title">🌧️ Climate of India</h1>
                    <p className="geo-sub-hero-subtitle" style={{ color: season.color }}>
                        Seasons, Monsoon Mechanism & Climate Types — UPSC Level
                    </p>
                </motion.div>
            </section>

            {/* Climate Type Quick Badges */}
            <div className="geo-climate-badge-row">
                <span className="geo-section-label">India's Climate Classification:</span>
                {['Tropical Monsoon (dominant)', 'Sub-tropical', 'Arid', 'Alpine', 'Temperate (NE)'].map(c => (
                    <span key={c} className="geo-climate-badge">{c}</span>
                ))}
            </div>

            {/* Seasons */}
            <section className="geo-content-section">
                <div className="geo-section-label">🗓️ The Four Seasons of India</div>
                <div className="geo-season-tab-bar">
                    {CLIMATE_SEASONS.map((s, i) => (
                        <motion.button key={s.id} className={`geo-season-tab ${activeSeason === i ? 'active' : ''}`}
                            onClick={() => setActiveSeason(i)} whileHover={{ y: -2 }}
                            style={activeSeason === i ? { borderColor: s.color, color: s.color, background: `${s.color}12` } : {}}>
                            <span className="geo-season-tab-icon">{s.icon}</span>
                            <span>{s.name}</span>
                            <span className="geo-season-tab-months" style={{ color: s.color }}>{s.months}</span>
                        </motion.button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div key={activeSeason} className="geo-season-detail"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.4 }}
                        style={{ borderTop: `3px solid ${season.color}`, background: `${season.color}06` }}>
                        <div className="geo-season-header">
                            <span className="geo-season-icon-big">{season.icon}</span>
                            <div>
                                <h2 style={{ color: season.color, fontFamily: 'var(--font-display)', marginBottom: 4 }}>{season.name}</h2>
                                <p className="geo-season-months-big" style={{ color: season.color }}>{season.months}</p>
                            </div>
                            <div className="geo-season-meta">
                                <div><span>🌡️ </span><strong>Temp:</strong> {season.temp}</div>
                                <div><span>🌧️ </span><strong>Rainfall:</strong> {season.rainfall}</div>
                                {season.crops && <div><span>🌾 </span><strong>Crops:</strong> {season.crops}</div>}
                            </div>
                        </div>
                        <div className="geo-season-features">
                            {season.key_features.map((f, i) => (
                                <motion.div key={i} className="geo-season-feature-item"
                                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}>
                                    <span className="geo-season-feature-dot" style={{ background: season.color }} />
                                    {f}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* Monsoon Mechanism */}
            <section className="geo-content-section">
                <div className="geo-section-label" style={{ color: '#3B82F6' }}>⚙️ Monsoon Mechanism</div>
                <h2 className="geo-section-title" style={{ color: '#3B82F6' }}>How SW Monsoon Develops — Step by Step</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 32, padding: '0 40px' }}>
                    The Indian SW Monsoon drives ~75% of India's annual rainfall in just 4 months (June–September).
                    Here's the scientific mechanism:
                </p>
                <div className="geo-monsoon-steps">
                    {MONSOON_MECHANISM.map((step, i) => (
                        <motion.div key={i} className="geo-monsoon-step"
                            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                            <div className="geo-monsoon-step-num" style={{ background: '#3B82F6' }}>{step.step}</div>
                            <div className="geo-monsoon-step-icon">{step.icon}</div>
                            <div className="geo-monsoon-step-content">
                                <h4 style={{ color: '#3B82F6' }}>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                            {i < MONSOON_MECHANISM.length - 1 && <div className="geo-monsoon-arrow">→</div>}
                        </motion.div>
                    ))}
                </div>

                {/* El Nino / La Nina */}
                <div className="geo-el-nino-grid">
                    <motion.div className="geo-el-nino-card" style={{ borderColor: '#EF444440', background: '#EF44440a' }}
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 style={{ color: '#EF4444' }}>🔴 El Niño Effect</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                            Warming of central-eastern Pacific Ocean. Weakens Indian SW Monsoon → below normal rainfall, drought risk.
                        </p>
                        <div className="geo-el-nino-impacts">
                            {['Weak Indian Monsoon', 'Drought in India', 'Floods in Peru', 'Drought in Australia', 'Weak Walker Circulation'].map(e => (
                                <span key={e} className="geo-impact-tag" style={{ background: '#EF44440f', color: '#EF4444' }}>{e}</span>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div className="geo-el-nino-card" style={{ borderColor: '#3B82F640', background: '#3B82F60a' }}
                        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h3 style={{ color: '#3B82F6' }}>🔵 La Niña Effect</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                            Cooling of central-eastern Pacific Ocean (opposite of El Niño). Strengthens Indian Monsoon → above-normal rainfall.
                        </p>
                        <div className="geo-el-nino-impacts">
                            {['Strong Indian Monsoon', 'Floods in India', 'Drought in Peru', 'Floods in Australia', 'Strong Walker Circulation'].map(e => (
                                <span key={e} className="geo-impact-tag" style={{ background: '#3B82F60f', color: '#3B82F6' }}>{e}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Climate Types */}
            <section className="geo-content-section">
                <div className="geo-section-label">🗺️ Climate Type Classification (Modified Koppen)</div>
                <h2 className="geo-section-title">India's Climate Zones</h2>
                <div className="geo-climate-types-grid">
                    {CLIMATE_TYPES.map((ct, i) => (
                        <motion.div key={i} className="geo-climate-type-card"
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                            style={{ borderLeft: `4px solid ${ct.color}`, background: `${ct.color}08` }}>
                            <div className="geo-climate-type-header">
                                <span style={{ fontSize: '1.5rem' }}>{ct.icon}</span>
                                <span className="geo-climate-code" style={{ background: `${ct.color}20`, color: ct.color }}>{ct.type.split(' ')[0]}</span>
                                <h4 style={{ color: ct.color }}>{ct.type}</h4>
                            </div>
                            <div className="geo-climate-type-meta">
                                <span>🌧️ {ct.rainfall}</span>
                                <span>📍 {ct.location}</span>
                            </div>
                            <p className="geo-climate-type-features">{ct.features}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* UPSC Monsoon Facts */}
            <section className="geo-upsc-section" style={{ margin: '0 40px 60px', borderColor: '#3B82F640', background: '#3B82F608' }}>
                <h3 className="geo-upsc-section-title" style={{ color: '#3B82F6' }}>📌 UPSC Climate — Key Points</h3>
                <div className="geo-upsc-points-grid">
                    {[
                        'India\'s climate is "Tropical Monsoon" (Koppen: Am) — dominated by SW monsoon',
                        'Western Disturbances (Mediterranean cyclones) bring crucial winter rains to N India for Rabi crops',
                        'Cherrapunji: average 11,777 mm; Mawsynram: ~11,873 mm — wettest on Earth (orographic rain from Bay of Bengal branch)',
                        'Leh–Ladakh (Cold Desert): <100mm rain; yet Rajasthan (Thar): <25mm — two different dry zones',
                        'October Heat: retreating monsoon season — high temp + high humidity combination',
                        'ITCZ (Inter-Tropical Convergence Zone) — its northward migration triggers SW monsoon onset over Kerala (June 1 avg)',
                        'Loo winds blow in UP–Bihar; Kalbaisakhi in West Bengal; Mango showers in Kerala/Karnataka',
                        'Monsoon trough (equatorial trough) migrates north in summer, triggering rainfall further inland',
                    ].map((pt, i) => (
                        <div key={i} className="geo-upsc-point-card">
                            <span className="geo-upsc-point-num" style={{ background: '#3B82F6' }}>{i + 1}</span>
                            <span>{pt}</span>
                        </div>
                    ))}
                </div>
            </section>
            <GeoNavFooter currentPath="/geography/indian-climate" />
        </div>
    )
}
