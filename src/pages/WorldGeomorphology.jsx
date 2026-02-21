import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EARTH_LAYERS, ROCK_TYPES, PLATE_TECTONICS, VOLCANO_TYPES, EARTHQUAKES_DATA } from '../data/worldGeography'
import GeoBackNav from '../components/GeoBackNav'
import GeoNavFooter from '../components/GeoNavFooter'

const TABS = ['🌍 Earth Structure', '🪨 Rocks', '🌐 Plate Tectonics', '🌋 Volcanoes', '📊 Earthquakes']

export default function WorldGeomorphology() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="geo-page">
            <GeoBackNav current="Geomorphology" color="#EF4444" />
            <section className="geo-sub-hero" style={{ background: 'linear-gradient(135deg, #0a0a1a 60%, #EF444422)' }}>
                <motion.div className="geo-sub-hero-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="geo-hero-eyebrow">World Geography › Geomorphology</p>
                    <h1 className="geo-sub-hero-title">🌋 Geomorphology</h1>
                    <p className="geo-sub-hero-subtitle" style={{ color: '#EF4444' }}>Earth Interior, Landforms, Volcanoes & Earthquakes — UPSC Level</p>
                </motion.div>
            </section>

            {/* Tabs */}
            <div className="geo-tab-bar">
                {TABS.map((t, i) => (
                    <motion.button key={i} className={`geo-tab ${activeTab === i ? 'active' : ''}`}
                        onClick={() => setActiveTab(i)} whileHover={{ y: -2 }}
                        style={activeTab === i ? { borderColor: '#EF4444', color: '#EF4444', background: '#EF44441a' } : {}}>
                        {t}
                    </motion.button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {/* EARTH STRUCTURE */}
                {activeTab === 0 && (
                    <motion.section key="earth" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label" style={{ color: '#EF4444' }}>🌍 Interior of the Earth</div>
                        <h2 className="geo-section-title">Earth's Concentric Layers</h2>
                        <p style={{ color: 'var(--text-secondary)', padding: '0 40px', marginBottom: 32 }}>
                            Earth is divided into concentric layers differentiated by density, composition, and physical state.
                            Our knowledge comes from seismic waves (P-waves and S-waves) — they behave differently in each layer.
                        </p>

                        {/* CSS Earth diagram */}
                        <div className="geo-earth-diagram-wrapper">
                            <div className="geo-earth-diagram" style={{ width: '100%', maxWidth: '400px', aspectRatio: '1/1', height: 'auto' }}>
                                <div className="geo-earth-layer" style={{ width: '50%', height: '50%', background: 'radial-gradient(circle, #EF4444 0%, #F97316 60%, #F59E0B 100%)', zIndex: 5 }}>
                                    <span className="geo-earth-layer-label" style={{ color: '#fff' }}>Inner Core</span>
                                </div>
                                <div className="geo-earth-layer" style={{ width: '66%', height: '66%', background: 'radial-gradient(circle, transparent 35%, #F59E0B88 35%, #EF444488 100%)', zIndex: 4 }}>
                                    <span className="geo-earth-layer-label2" style={{ color: '#F59E0B', top: '12%' }}>Outer Core</span>
                                </div>
                                <div className="geo-earth-layer" style={{ width: '86%', height: '86%', background: 'radial-gradient(circle, transparent 40%, #8B5CF688 40%, #6D28D988 100%)', zIndex: 3 }}>
                                    <span className="geo-earth-layer-label2" style={{ color: '#A78BFA', top: '8%' }}>Mantle</span>
                                </div>
                                <div className="geo-earth-layer" style={{ width: '100%', height: '100%', background: 'radial-gradient(circle, transparent 45%, #3B82F688 45%, #1D4ED888 100%)', zIndex: 2 }}>
                                    <span className="geo-earth-layer-label2" style={{ color: '#93C5FD', top: '5%' }}>Crust</span>
                                </div>
                            </div>
                            <div className="geo-earth-diagram-key">
                                {['Crust (0–70km)', 'Mantle (70–2,900km)', 'Outer Core (2,900–5,100km)', 'Inner Core (5,100–6,371km)'].map((l, i) => (
                                    <div key={i} className="geo-earth-key-item">
                                        <div className="geo-earth-key-dot" style={{ background: ['#3B82F6', '#8B5CF6', '#F59E0B', '#EF4444'][i] }} />
                                        <span>{l}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="geo-divisions-grid">
                            {EARTH_LAYERS.map((layer, i) => (
                                <motion.div key={i} className="concept-card"
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    style={{ borderTop: `3px solid ${layer.color}` }}>
                                    <div className="concept-card-header">
                                        <span className="concept-card-icon" style={{ background: `${layer.color}18`, color: layer.color, fontSize: '1.5rem' }}>{layer.icon}</span>
                                        <div>
                                            <h3 className="concept-card-title">{layer.name}</h3>
                                            <p className="concept-card-subtitle" style={{ color: layer.color }}>{layer.depth}</p>
                                        </div>
                                    </div>
                                    <div className="geo-earth-layer-meta">
                                        <span>🌡️ <strong>Temp:</strong> {layer.temp}</span>
                                        <span>⚗️ <strong>State:</strong> {layer.state}</span>
                                        <span>🧪 <strong>Composition:</strong> {layer.composition}</span>
                                    </div>
                                    <ul className="concept-card-facts">
                                        {layer.facts.map((f, j) => <li key={j}><span className="concept-fact-dot" style={{ background: layer.color }} />{f}</li>)}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        <div className="geo-upsc-section" style={{ margin: '24px 40px', borderColor: '#EF444440', background: '#EF44440a' }}>
                            <h3 className="geo-upsc-section-title" style={{ color: '#EF4444' }}>📌 Seismic Discontinuities</h3>
                            <div className="geo-upsc-points-grid">
                                {[
                                    'Mohorovičić (Moho) Discontinuity — between crust and mantle. Discovered by Andrija Mohorovičić (1909).',
                                    'Gutenberg Discontinuity — between mantle and outer core (2,900 km). S-waves stop here → outer core is liquid.',
                                    'Lehmann Discontinuity — between outer and inner core (5,100 km). Discovered by Inge Lehmann (1936).',
                                    'Conrad Discontinuity — within the crust, between upper (granitic) and lower (basaltic) crust.',
                                    'Repetti Discontinuity — between upper mantle and lower mantle (660 km depth).',
                                ].map((pt, i) => (
                                    <div key={i} className="geo-upsc-point-card">
                                        <span className="geo-upsc-point-num" style={{ background: '#EF4444' }}>{i + 1}</span>
                                        <span>{pt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* ROCKS */}
                {activeTab === 1 && (
                    <motion.section key="rocks" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label" style={{ color: '#EF4444' }}>🪨 Rock Cycle</div>
                        <h2 className="geo-section-title">Three Types of Rocks</h2>
                        <div className="geo-rock-cycle-banner">
                            <div>🌋 Igneous</div><div className="geo-cycle-arrow">↔</div>
                            <div>💎 Metamorphic</div><div className="geo-cycle-arrow">↔</div>
                            <div>📚 Sedimentary</div>
                        </div>
                        {ROCK_TYPES.map((rt, i) => (
                            <motion.div key={i} className="geo-rock-card"
                                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                style={{ borderLeft: `4px solid ${rt.color}`, background: `${rt.color}06` }}>
                                <div className="geo-rock-header">
                                    <span style={{ fontSize: '2rem' }}>{rt.icon}</span>
                                    <div>
                                        <h3 style={{ color: rt.color, fontFamily: 'var(--font-display)' }}>{rt.name}</h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{rt.origin}</p>
                                    </div>
                                </div>
                                <div className="geo-rock-types-grid">
                                    {rt.types.map((t, j) => (
                                        <div key={j} className="geo-rock-subtype" style={{ borderColor: `${rt.color}30` }}>
                                            <h4 style={{ color: rt.color }}>{t.name}</h4>
                                            <p className="geo-rock-examples"><em>{t.examples}</em></p>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{t.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="geo-upsc-callout" style={{ borderColor: `${rt.color}40`, background: `${rt.color}0c` }}>
                                    <span style={{ color: rt.color }}>📌 UPSC</span>
                                    {rt.upsc.map((pt, j) => <p key={j}>{pt}</p>)}
                                </div>
                            </motion.div>
                        ))}
                    </motion.section>
                )}

                {/* PLATE TECTONICS */}
                {activeTab === 2 && (
                    <motion.section key="plate" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label" style={{ color: '#EF4444' }}>🌐 Plate Tectonics</div>
                        <h2 className="geo-section-title">Types of Plate Boundaries</h2>
                        <p style={{ color: 'var(--text-secondary)', padding: '0 40px', marginBottom: 28 }}>
                            Earth's lithosphere is divided into ~15 major tectonic plates and several minor ones. Their movement
                            drives earthquakes, volcanic activity, and mountain building.
                        </p>
                        <div className="geo-divisions-grid">
                            {PLATE_TECTONICS.map((pt, i) => (
                                <motion.div key={i} className="concept-card"
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    style={{ borderTop: `3px solid ${pt.color}` }}>
                                    <div className="concept-card-header">
                                        <span className="concept-card-icon" style={{ background: `${pt.color}18`, color: pt.color, fontSize: '1.5rem' }}>{pt.icon}</span>
                                        <h3 className="concept-card-title" style={{ color: pt.color }}>{pt.type}</h3>
                                    </div>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: 12 }}>{pt.desc}</p>
                                    <div className="geo-upsc-callout" style={{ borderColor: `${pt.color}40`, background: `${pt.color}0c` }}>
                                        <span style={{ color: pt.color }}>🌍 Examples:</span>
                                        <p>{pt.examples}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="geo-upsc-section" style={{ margin: '24px 40px', borderColor: '#EF444440', background: '#EF44440a' }}>
                            <h3 className="geo-upsc-section-title" style={{ color: '#EF4444' }}>📌 Plate Tectonics — UPSC Facts</h3>
                            <div className="geo-upsc-points-grid">
                                {[
                                    'Indian Plate separated from Gondwana ~135 Ma and started moving NE, colliding with Eurasian plate ~50 Ma → Himalayas',
                                    'Pacific Plate is the largest tectonic plate. Juan de Fuca plate is smallest.',
                                    'Ring of Fire: Pacific Ocean boundary — 75% of world\'s volcanoes, 90% of earthquakes',
                                    'Mid-Atlantic Ridge: Divergent boundary → Atlantic widening by 2.5 cm/year',
                                    'Continental drift theory by Alfred Wegener (1912) → later refined to Plate Tectonics by Harry Hess (1960s)',
                                ].map((pt, i) => (
                                    <div key={i} className="geo-upsc-point-card">
                                        <span className="geo-upsc-point-num" style={{ background: '#EF4444' }}>{i + 1}</span>
                                        <span>{pt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.section>
                )}

                {/* VOLCANOES */}
                {activeTab === 3 && (
                    <motion.section key="volcanoes" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label" style={{ color: '#EF4444' }}>🌋 Volcanoes</div>
                        <h2 className="geo-section-title">Types of Volcanoes</h2>
                        <div className="geo-divisions-grid">
                            {VOLCANO_TYPES.map((v, i) => (
                                <motion.div key={i} className="concept-card"
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    style={{ borderTop: `3px solid ${v.color}` }}>
                                    <div className="concept-card-header">
                                        <span className="concept-card-icon" style={{ background: `${v.color}18`, color: v.color, fontSize: '1.6rem' }}>{v.icon}</span>
                                        <div>
                                            <h3 className="concept-card-title">{v.name}</h3>
                                            <p className="concept-card-subtitle">{v.shape}</p>
                                        </div>
                                    </div>
                                    <ul className="concept-card-facts">
                                        <li><span className="concept-fact-dot" style={{ background: v.color }} />Lava type: {v.lava}</li>
                                        <li><span className="concept-fact-dot" style={{ background: v.color }} />Eruption: {v.eruption}</li>
                                        <li><span className="concept-fact-dot" style={{ background: v.color }} />Examples: {v.examples.join(', ')}</li>
                                    </ul>
                                    <div className="geo-upsc-callout" style={{ borderColor: `${v.color}40`, background: `${v.color}0c` }}>
                                        <span style={{ color: v.color }}>📌 UPSC</span>
                                        <p>{v.upsc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* EARTHQUAKES */}
                {activeTab === 4 && (
                    <motion.section key="quakes" className="geo-content-section"
                        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <div className="geo-section-label" style={{ color: '#EF4444' }}>📊 Earthquakes</div>
                        <h2 className="geo-section-title">Earthquake Science</h2>
                        <div className="geo-eq-grid">
                            {EARTHQUAKES_DATA.basics.map((b, i) => (
                                <motion.div key={i} className="geo-eq-term-card"
                                    initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                                    <span className="geo-eq-icon">{b.icon}</span>
                                    <h4 style={{ color: '#EF4444' }}>{b.term}</h4>
                                    <p>{b.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="geo-section-label" style={{ color: '#F59E0B', marginTop: 32 }}>〰️ Seismic Waves</div>
                        <div className="geo-wave-grid">
                            {EARTHQUAKES_DATA.wave_types.map((w, i) => (
                                <div key={i} className="geo-wave-card" style={{ borderLeft: `4px solid ${w.color}`, background: `${w.color}08` }}>
                                    <span style={{ fontSize: '1.8rem' }}>{w.icon}</span>
                                    <div>
                                        <h4 style={{ color: w.color }}>{w.name}</h4>
                                        <p>{w.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="geo-section-label" style={{ color: '#8B5CF6', marginTop: 32 }}>🇮🇳 India Earthquake Zones</div>
                        <div className="geo-eq-zones">
                            {EARTHQUAKES_DATA.india_zones.map((z, i) => (
                                <div key={i} className="geo-eq-zone-bar" style={{ borderLeft: `4px solid ${z.color}`, background: `${z.color}0a` }}>
                                    <span className="geo-eq-zone-code" style={{ background: z.color, color: '#fff' }}>{z.zone}</span>
                                    <div>
                                        <strong style={{ color: z.color }}>{z.risk}</strong>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>{z.states}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="geo-section-label" style={{ color: '#F43F5E', marginTop: 32 }}>📰 Major India Earthquakes</div>
                        <div className="geo-quakes-grid">
                            {EARTHQUAKES_DATA.famous_quakes.map((q, i) => (
                                <div key={i} className="geo-quake-card">
                                    <div className="geo-quake-mag" style={{ background: '#EF4444' }}>{q.magnitude}</div>
                                    <div>
                                        <strong>{q.name}</strong> ({q.year})
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{q.impact}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
            <GeoNavFooter currentPath="/geography/world-geomorphology" />
        </div>
    )
}
