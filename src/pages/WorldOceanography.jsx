import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { OCEANS, OCEAN_FLOOR, OCEAN_CURRENTS, TIDE_TYPES, CORAL_REEFS } from '../data/worldGeography'
import GeoBackNav from '../components/GeoBackNav'
import GeoNavFooter from '../components/GeoNavFooter'

const TABS = ['🌊 Oceans', '🗺️ Ocean Floor', '🌊 Ocean Currents', '🌙 Tides', '🐠 Coral Reefs']

export default function WorldOceanography() {
    const [activeTab, setActiveTab] = useState(0)
    const [activeOcean, setActiveOcean] = useState(0)

    return (
        <div className="geo-page">
            <GeoBackNav current="Oceanography" color="#0EA5E9" />
            <section className="geo-sub-hero" style={{ background: 'linear-gradient(135deg, #0a0a1a 60%, #0EA5E922)' }}>
                <motion.div className="geo-sub-hero-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="geo-hero-eyebrow">World Geography › Oceanography</p>
                    <h1 className="geo-sub-hero-title">🌊 Oceanography</h1>
                    <p className="geo-sub-hero-subtitle" style={{ color: '#0EA5E9' }}>Oceans, Currents, Tides, Coral Reefs — UPSC Level</p>
                </motion.div>
            </section>

            <div className="geo-tab-bar">
                {TABS.map((t, i) => (
                    <motion.button key={i} className={`geo-tab ${activeTab === i ? 'active' : ''}`}
                        onClick={() => setActiveTab(i)} whileHover={{ y: -2 }}
                        style={activeTab === i ? { borderColor: '#0EA5E9', color: '#0EA5E9', background: '#0EA5E91a' } : {}}>
                        {t}
                    </motion.button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {/* OCEANS */}
                {activeTab === 0 && (
                    <motion.section key="oceans" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label">🌊 World's Oceans</div>
                        <h2 className="geo-section-title">Five Oceans of the World</h2>
                        <div className="geo-ocean-selector">
                            {OCEANS.map((o, i) => (
                                <motion.button key={i} className={`geo-ocean-btn ${activeOcean === i ? 'active' : ''}`}
                                    onClick={() => setActiveOcean(i)} whileHover={{ y: -2 }}
                                    style={activeOcean === i ? { borderColor: o.color, color: o.color, background: `${o.color}12` } : {}}>
                                    {o.icon} {o.name}
                                </motion.button>
                            ))}
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div key={activeOcean} className="geo-ocean-detail"
                                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                transition={{ duration: 0.35 }}
                                style={{ borderTop: `3px solid ${OCEANS[activeOcean].color}`, background: `${OCEANS[activeOcean].color}06` }}>
                                <div className="geo-ocean-stats">
                                    <div><span>🌊 Area</span><strong style={{ color: OCEANS[activeOcean].color }}>{OCEANS[activeOcean].area}</strong></div>
                                    <div><span>⬇️ Avg Depth</span><strong style={{ color: OCEANS[activeOcean].color }}>{OCEANS[activeOcean].depth}</strong></div>
                                    <div><span>🔽 Deepest</span><strong style={{ color: OCEANS[activeOcean].color }}>{OCEANS[activeOcean].deepest}</strong></div>
                                </div>
                                <ul className="concept-card-facts">
                                    {OCEANS[activeOcean].facts.map((f, i) => (
                                        <li key={i}><span className="concept-fact-dot" style={{ background: OCEANS[activeOcean].color }} />{f}</li>
                                    ))}
                                </ul>
                                <div className="geo-upsc-callout" style={{ borderColor: `${OCEANS[activeOcean].color}40`, background: `${OCEANS[activeOcean].color}0c` }}>
                                    <span style={{ color: OCEANS[activeOcean].color }}>📌 UPSC</span>
                                    <p>{OCEANS[activeOcean].upsc}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.section>
                )}

                {/* OCEAN FLOOR */}
                {activeTab === 1 && (
                    <motion.section key="floor" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label">🗺️ Ocean Floor Relief</div>
                        <h2 className="geo-section-title">Relief features of the Ocean Floor</h2>

                        {/* Cross-section visual */}
                        <div className="geo-ocean-floor-visual">
                            <div className="geo-ocean-coast">🏖️ Coast</div>
                            {['Continental Shelf\n(0–200m)', 'Slope\n(200–3km)', 'Rise\n(3–5km)', 'Abyssal\nPlain', 'Trench\n(6–11km)'].map((label, i) => (
                                <div key={i} className="geo-ocean-floor-seg"
                                    style={{ height: `${[40, 60, 75, 80, 100][i]}px`, background: ['#F59E0B', '#F97316', '#EF4444', '#1E293B', '#7C3AED'][i] + '88' }}>
                                    <span style={{ fontSize: '0.65rem', whiteSpace: 'pre-line', textAlign: 'center' }}>{label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="geo-divisions-grid">
                            {OCEAN_FLOOR.map((of, i) => (
                                <motion.div key={i} className="concept-card"
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    style={{ borderTop: `3px solid ${of.color}` }}>
                                    <div className="concept-card-header">
                                        <span className="concept-card-icon" style={{ background: `${of.color}18`, color: of.color, fontSize: '1.4rem' }}>{of.icon}</span>
                                        <div>
                                            <h3 className="concept-card-title">{of.name}</h3>
                                            <p className="concept-card-subtitle" style={{ color: of.color }}>{of.depth}</p>
                                        </div>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: 10 }}>{of.desc}</p>
                                    <div className="geo-upsc-callout" style={{ borderColor: `${of.color}40`, background: `${of.color}0c` }}>
                                        <span style={{ color: of.color }}>📌 UPSC</span>
                                        <p>{of.upsc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* OCEAN CURRENTS */}
                {activeTab === 2 && (
                    <motion.section key="currents" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label">🌊 Ocean Currents</div>
                        <h2 className="geo-section-title">Warm & Cold Ocean Currents</h2>
                        <p style={{ color: 'var(--text-secondary)', padding: '0 40px', marginBottom: 28 }}>
                            Ocean currents follow a circular pattern called gyres. Western boundaries have warm currents;
                            eastern boundaries have cold currents. Crucial for moderating global climate.
                        </p>

                        <div className="geo-section-label" style={{ color: '#EF4444' }}>🔴 Warm Currents</div>
                        <div className="geo-currents-grid">
                            {OCEAN_CURRENTS.warm.map((c, i) => (
                                <motion.div key={i} className="geo-current-card" style={{ borderTop: `3px solid ${c.color}` }}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                                    <h4 style={{ color: c.color }}>{c.name}</h4>
                                    <span className="geo-current-ocean">{c.ocean}</span>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', margin: '8px 0' }}>{c.path}</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', marginBottom: 8 }}>{c.effect}</p>
                                    <span className="geo-upsc-mini" style={{ color: c.color }}>{c.upsc}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="geo-section-label" style={{ color: '#3B82F6', marginTop: 32 }}>🔵 Cold Currents</div>
                        <div className="geo-currents-grid">
                            {OCEAN_CURRENTS.cold.map((c, i) => (
                                <motion.div key={i} className="geo-current-card" style={{ borderTop: `3px solid ${c.color}` }}
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                                    <h4 style={{ color: c.color }}>{c.name}</h4>
                                    <span className="geo-current-ocean">{c.ocean}</span>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', margin: '8px 0' }}>{c.path}</p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', marginBottom: 8 }}>{c.effect}</p>
                                    <span className="geo-upsc-mini" style={{ color: c.color }}>{c.upsc}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* El Nino / La Nina */}
                        <div className="geo-section-label" style={{ color: '#8B5CF6', marginTop: 32 }}>⚡ El Niño & La Niña</div>
                        <div className="geo-el-nino-grid">
                            {[OCEAN_CURRENTS.el_nino_la_nina.el_nino, OCEAN_CURRENTS.el_nino_la_nina.la_nina].map((enso, i) => (
                                <motion.div key={i} className="geo-el-nino-card"
                                    style={{ borderColor: `${enso.color}40`, background: `${enso.color}0a` }}
                                    initial={{ opacity: 0, x: i ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                                    <h3 style={{ color: enso.color }}>{enso.name}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: 12 }}>{enso.what}</p>
                                    <div className="geo-el-nino-impacts">
                                        {enso.effects.map(e => <span key={e} className="geo-impact-tag" style={{ background: `${enso.color}0f`, color: enso.color }}>{e}</span>)}
                                    </div>
                                    <div className="geo-upsc-callout" style={{ borderColor: `${enso.color}40`, background: `${enso.color}0c`, marginTop: 12 }}>
                                        <span style={{ color: enso.color }}>📌 UPSC</span>
                                        <p>{enso.upsc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* TIDES */}
                {activeTab === 3 && (
                    <motion.section key="tides" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label">🌙 Tides</div>
                        <h2 className="geo-section-title">Types and Causes of Tides</h2>
                        <p style={{ color: 'var(--text-secondary)', padding: '0 40px', marginBottom: 28 }}>
                            Tides are periodic rise and fall of sea levels caused by gravitational forces of the Moon and Sun.
                            The Moon has greater tidal influence (2.5×) than the Sun despite being smaller in size.
                        </p>
                        <div className="geo-divisions-grid">
                            {TIDE_TYPES.map((t, i) => (
                                <motion.div key={i} className="concept-card"
                                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    style={{ borderTop: `3px solid ${t.color}` }}>
                                    <div className="concept-card-header">
                                        <span className="concept-card-icon" style={{ background: `${t.color}18`, color: t.color, fontSize: '1.8rem' }}>{t.icon}</span>
                                        <div>
                                            <h3 className="concept-card-title">{t.name}</h3>
                                            <p className="concept-card-subtitle" style={{ color: t.color }}>{t.timing}</p>
                                        </div>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.83rem', lineHeight: 1.6, marginBottom: 10 }}>{t.desc}</p>
                                    <div className="geo-upsc-callout" style={{ borderColor: `${t.color}40`, background: `${t.color}0c` }}>
                                        <span style={{ color: t.color }}>📌 UPSC</span>
                                        <p>{t.upsc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* CORAL REEFS */}
                {activeTab === 4 && (
                    <motion.section key="coral" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label">🐠 Coral Reefs</div>
                        <h2 className="geo-section-title">Types of Coral Reefs</h2>
                        <p style={{ color: 'var(--text-secondary)', padding: '0 40px', marginBottom: 28 }}>
                            Coral reefs are formed by tiny polyps that secrete calcium carbonate skeletons. They support 25% of all
                            marine species despite covering {'<'}1% of ocean floor. Called the &quot;Rainforests of the Sea.&quot;
                        </p>
                        <div className="geo-coral-grid">
                            {CORAL_REEFS.map((cr, i) => (
                                <motion.div key={i} className="geo-coral-card"
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    style={{ borderTop: `3px solid ${cr.color}`, background: `${cr.color}06` }}>
                                    <div className="geo-coral-header">
                                        <span style={{ fontSize: '2.5rem' }}>{cr.icon}</span>
                                        <div>
                                            <h3 style={{ color: cr.color, fontFamily: 'var(--font-display)' }}>{cr.name}</h3>
                                            <span className="geo-coral-location" style={{ color: cr.color }}>{cr.location}</span>
                                        </div>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', margin: '12px 0', fontSize: '0.85rem', lineHeight: 1.6 }}>{cr.desc}</p>
                                    <div className="geo-upsc-callout" style={{ borderColor: `${cr.color}40`, background: `${cr.color}0c` }}>
                                        <span style={{ color: cr.color }}>📌 Examples &amp; UPSC</span>
                                        <p><strong>Examples:</strong> {cr.examples}</p>
                                        <p>{cr.upsc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="geo-upsc-section" style={{ margin: '24px 40px', borderColor: '#F59E0B40', background: '#F59E0B08' }}>
                            <h3 className="geo-upsc-section-title" style={{ color: '#F59E0B' }}>📌 Coral Reef Threats — UPSC</h3>
                            <div className="geo-upsc-points-grid">
                                {[
                                    'Coral Bleaching: Water temperature rise →  zooxanthellae algae expelled → coral turns white and dies if stress continues',
                                    'Great Barrier Reef (GBR) has experienced mass bleaching in 1998, 2002, 2016, 2017, 2020, 2022',
                                    'Ocean acidification (CO₂ → H₂CO₃) dissolves coral calcium carbonate skeletons',
                                    'Lakshadweep coral atolls at risk from sea level rise — UNESCO concern',
                                    'Gulf of Mannar & Andaman reefs — major Indian coral systems; protected Marine National Parks',
                                    'IUCN Red List: 1/3 of reef-building coral species threatened with extinction',
                                ].map((pt, i) => (
                                    <div key={i} className="geo-upsc-point-card">
                                        <span className="geo-upsc-point-num" style={{ background: '#F59E0B' }}>{i + 1}</span>
                                        <span>{pt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
            <GeoNavFooter currentPath="/geography/world-oceanography" />
        </div>
    )
}
