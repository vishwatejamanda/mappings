import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PRESSURE_BELTS, WIND_SYSTEMS, LOCAL_WINDS, KOPPEN_CLIMATE } from '../data/worldGeography'
import GeoBackNav from '../components/GeoBackNav'
import GeoNavFooter from '../components/GeoNavFooter'

const TABS = ['⬇️ Pressure Belts', '🌬️ Wind Systems', '🌡️ Local Winds', '🗺️ Koppen Classification']

export default function WorldClimatology() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="geo-page">
            <GeoBackNav current="Climatology" color="#3B82F6" />
            <section className="geo-sub-hero" style={{ background: 'linear-gradient(135deg, #0a0a1a 60%, #3B82F622)' }}>
                <motion.div className="geo-sub-hero-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="geo-hero-eyebrow">World Geography › Climatology</p>
                    <h1 className="geo-sub-hero-title">🌡️ World Climatology</h1>
                    <p className="geo-sub-hero-subtitle" style={{ color: '#3B82F6' }}>Pressure Belts, Winds, Koppen Classification — UPSC Level</p>
                </motion.div>
            </section>

            <div className="geo-tab-bar">
                {TABS.map((t, i) => (
                    <motion.button key={i} className={`geo-tab ${activeTab === i ? 'active' : ''}`}
                        onClick={() => setActiveTab(i)} whileHover={{ y: -2 }}
                        style={activeTab === i ? { borderColor: '#3B82F6', color: '#3B82F6', background: '#3B82F61a' } : {}}>
                        {t}
                    </motion.button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {/* PRESSURE BELTS */}
                {activeTab === 0 && (
                    <motion.section key="pressure" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label">⬇️ Pressure Belts of the World</div>
                        <h2 className="geo-section-title">Global Atmospheric Pressure Distribution</h2>

                        {/* Visual latitudinal bar */}
                        <div className="geo-lat-visual">
                            <div className="geo-lat-pole geo-lat-top">
                                <span>🧊 90°N — Polar High</span>
                            </div>
                            <div className="geo-lat-zone" style={{ background: '#3B82F615', borderColor: '#3B82F640' }}>
                                <span style={{ color: '#3B82F6' }}>💙 60°N — Sub-polar Low (Cyclonic storms)</span>
                            </div>
                            <div className="geo-lat-zone" style={{ background: '#F9731615', borderColor: '#F9731640' }}>
                                <span style={{ color: '#F97316' }}>🟠 30°N — Subtropical High (Desert belt)</span>
                            </div>
                            <div className="geo-lat-zone geo-lat-equator" style={{ background: '#EF444415', borderColor: '#EF444440' }}>
                                <span style={{ color: '#EF4444' }}>🔴 0° — Equatorial Low (ITCZ — Doldrums)</span>
                            </div>
                            <div className="geo-lat-zone" style={{ background: '#F9731615', borderColor: '#F9731640' }}>
                                <span style={{ color: '#F97316' }}>🟠 30°S — Subtropical High (Desert belt)</span>
                            </div>
                            <div className="geo-lat-zone" style={{ background: '#3B82F615', borderColor: '#3B82F640' }}>
                                <span style={{ color: '#3B82F6' }}>💙 60°S — Sub-polar Low (Southern Ocean)</span>
                            </div>
                            <div className="geo-lat-pole geo-lat-bottom">
                                <span>🧊 90°S — Polar High (Antarctica)</span>
                            </div>
                        </div>

                        <div className="geo-divisions-grid" style={{ marginTop: 32 }}>
                            {PRESSURE_BELTS.map((pb, i) => (
                                <motion.div key={i} className="concept-card"
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    style={{ borderTop: `3px solid ${pb.color}` }}>
                                    <div className="concept-card-header">
                                        <span className="concept-card-icon" style={{ background: `${pb.color}18`, color: pb.color, fontSize: '1.5rem' }}>{pb.icon}</span>
                                        <div>
                                            <h3 className="concept-card-title">{pb.name}</h3>
                                            <p className="concept-card-subtitle" style={{ color: pb.color }}>{pb.latitudes}</p>
                                        </div>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: 10 }}>{pb.reason}</p>
                                    <ul className="concept-card-facts">
                                        <li><span className="concept-fact-dot" style={{ background: pb.color }} />Winds: {pb.winds}</li>
                                        <li><span className="concept-fact-dot" style={{ background: pb.color }} />Weather: {pb.weather}</li>
                                        <li><span className="concept-fact-dot" style={{ background: pb.color }} />Examples: {pb.examples}</li>
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* WIND SYSTEMS */}
                {activeTab === 1 && (
                    <motion.section key="winds" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label">🌬️ Planetary Wind Systems</div>
                        <h2 className="geo-section-title">Global Wind Belts</h2>
                        <p style={{ color: 'var(--text-secondary)', padding: '0 40px', marginBottom: 28 }}>
                            Planetary winds blow from high pressure belts to low pressure belts. Coriolis Effect deflects them
                            to the right in Northern Hemisphere and left in Southern Hemisphere.
                        </p>
                        <div className="geo-wind-cards">
                            {WIND_SYSTEMS.map((w, i) => (
                                <motion.div key={i} className="geo-wind-card"
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    style={{ borderLeft: `4px solid ${w.color}`, background: `${w.color}06` }}>
                                    <div className="geo-wind-header">
                                        <span className="geo-wind-icon" style={{ background: `${w.color}18`, color: w.color }}>{w.icon}</span>
                                        <div>
                                            <h3 style={{ color: w.color }}>{w.name}</h3>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>Direction: {w.direction}</p>
                                        </div>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', margin: '12px 0', lineHeight: 1.6, fontSize: '0.85rem' }}>{w.hemisphere}</p>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.85rem' }}>{w.significance}</p>
                                    <div className="geo-upsc-callout" style={{ borderColor: `${w.color}40`, background: `${w.color}0c`, marginTop: 12 }}>
                                        <span style={{ color: w.color }}>📌 UPSC</span>
                                        <p>{w.upsc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* LOCAL WINDS */}
                {activeTab === 2 && (
                    <motion.section key="local" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label">🌡️ Local and Regional Winds</div>
                        <h2 className="geo-section-title">Important Local Winds — World</h2>
                        <p style={{ color: 'var(--text-secondary)', padding: '0 40px', marginBottom: 28 }}>
                            Local winds are caused by temperature and pressure differences within small areas. Very important for UPSC Prelims.
                        </p>
                        <div className="geo-local-wind-grid">
                            {LOCAL_WINDS.map((lw, i) => (
                                <motion.div key={i} className="geo-local-wind-card"
                                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                                    whileHover={{ y: -4, borderColor: lw.color }}
                                    style={{ borderTop: `3px solid ${lw.color}` }}>
                                    <div className="geo-lw-header">
                                        <span className="geo-lw-icon" style={{ background: `${lw.color}18`, color: lw.color }}>{lw.icon}</span>
                                        <div>
                                            <h4 className="geo-lw-name" style={{ color: lw.color }}>{lw.name}</h4>
                                            <p className="geo-lw-origin">{lw.origin} · {lw.season}</p>
                                        </div>
                                    </div>
                                    <p className="geo-lw-effect">{lw.effect}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* KOPPEN */}
                {activeTab === 3 && (
                    <motion.section key="koppen" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label">🗺️ Koppen Climate Classification</div>
                        <h2 className="geo-section-title">Major Climate Types of the World</h2>
                        <p style={{ color: 'var(--text-secondary)', padding: '0 40px', marginBottom: 28 }}>
                            Wladimir Köppen's climate classification (1884, updated 1936) groups climates by temperature
                            and precipitation patterns. 5 main groups: A (Tropical), B (Dry), C (Temperate), D (Continental), E (Polar).
                        </p>

                        {['A', 'B', 'C', 'D', 'E'].map(group => (
                            <div key={group} className="geo-koppen-group">
                                <div className="geo-koppen-group-header">
                                    <span className="geo-koppen-group-letter" style={{ background: { A: '#16A34A', B: '#EF4444', C: '#F59E0B', D: '#F97316', E: '#8B5CF6' }[group] }}>{group}</span>
                                    <span>{{ A: 'Tropical Climates', B: 'Dry Climates', C: 'Temperate Climates', D: 'Continental Climates', E: 'Polar Climates' }[group]}</span>
                                </div>
                                <div className="geo-koppen-cards">
                                    {KOPPEN_CLIMATE.filter(k => k.group === group).map((k, i) => (
                                        <motion.div key={i} className="geo-koppen-card"
                                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                            style={{ borderLeft: `4px solid ${k.color}`, background: `${k.color}08` }}>
                                            <div className="geo-koppen-card-header">
                                                <span className="geo-koppen-code" style={{ background: `${k.color}20`, color: k.color }}>{k.code}</span>
                                                <span className="geo-koppen-name-icon">{k.icon}</span>
                                                <h4 style={{ color: k.color }}>{k.name}</h4>
                                            </div>
                                            <div className="geo-koppen-meta">
                                                <span>🌧️ {k.rainfall}</span>
                                                <span>🌡️ {k.temp}</span>
                                                <span>📍 {k.location}</span>
                                            </div>
                                            <p className="geo-koppen-features">{k.features}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.section>
                )}
            </AnimatePresence>
            <GeoNavFooter currentPath="/geography/world-climatology" />
        </div>
    )
}
