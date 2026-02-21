import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BIOMES } from '../data/worldGeography'
import GeoBackNav from '../components/GeoBackNav'
import GeoNavFooter from '../components/GeoNavFooter'

export default function WorldBiomes() {
    const [activeBiome, setActiveBiome] = useState(0)
    const biome = BIOMES[activeBiome]

    return (
        <div className="geo-page">
            <GeoBackNav current="World Biomes" color={biome.color} />
            <section className="geo-sub-hero" style={{ background: `linear-gradient(135deg, #0a0a1a 60%, ${biome.color}22)` }}>
                <motion.div className="geo-sub-hero-content"
                    key={activeBiome} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="geo-hero-eyebrow">World Geography › Biomes & Ecosystems</p>
                    <h1 className="geo-sub-hero-title">{biome.icon} World Biomes</h1>
                    <p className="geo-sub-hero-subtitle" style={{ color: biome.color }}>Major Biomes & Ecosystems — UPSC Level</p>
                </motion.div>
            </section>

            {/* Biome Selector Strip */}
            <div className="geo-biome-selector">
                {BIOMES.map((b, i) => (
                    <motion.button key={b.name} className={`geo-biome-btn ${activeBiome === i ? 'active' : ''}`}
                        onClick={() => setActiveBiome(i)} whileHover={{ scale: 1.08 }}
                        style={activeBiome === i ? { borderColor: b.color, color: b.color, background: `${b.color}18` } : {}}>
                        <span className="geo-biome-btn-icon">{b.icon}</span>
                        <span className="geo-biome-btn-name">{b.name.split(' ').slice(0, 2).join(' ')}</span>
                    </motion.button>
                ))}
            </div>

            <AnimatePresence mode="wait">
                <motion.section key={activeBiome} className="geo-content-section"
                    initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}>

                    {/* Biome Card Layout */}
                    <div className="geo-biome-detail-layout">
                        {/* Left */}
                        <div className="geo-biome-left-panel" style={{ borderColor: `${biome.color}40`, background: `${biome.color}06` }}>
                            <div className="geo-biome-hero-icon">{biome.icon}</div>
                            <h2 className="geo-biome-hero-name" style={{ color: biome.color }}>{biome.name}</h2>
                            <div className="geo-biome-meta-list">
                                <div><span>🌍</span><strong>Latitude:</strong> {biome.latitude}</div>
                                <div><span>🌧️</span><strong>Rainfall:</strong> {biome.rainfall}</div>
                                <div><span>🌡️</span><strong>Temperature:</strong> {biome.temp}</div>
                            </div>
                            <div>
                                <h4 style={{ color: biome.color, marginBottom: 8 }}>📍 Locations</h4>
                                {biome.locations.map((l, i) => (
                                    <div key={i} className="geo-biome-location-item">{l}</div>
                                ))}
                            </div>
                        </div>

                        {/* Right panels */}
                        <div className="geo-biome-right-panel">
                            <div className="geo-biome-section">
                                <h4 style={{ color: biome.color }}>🌿 Key Features</h4>
                                <ul className="geo-soil-list">
                                    {biome.features.map((f, i) => <li key={i}><span style={{ color: biome.color }}>◆</span> {f}</li>)}
                                </ul>
                            </div>

                            <div className="geo-biome-organisms">
                                <div>
                                    <h4 style={{ color: biome.color, marginBottom: 8 }}>🌱 Flora</h4>
                                    <div className="geo-veg-tree-tags">
                                        {biome.key_plants.map(p => <span key={p} className="geo-veg-tree-tag" style={{ borderColor: `${biome.color}50`, color: biome.color }}>{p}</span>)}
                                    </div>
                                </div>
                                <div>
                                    <h4 style={{ color: biome.color, marginBottom: 8 }}>🦁 Fauna</h4>
                                    <div className="geo-veg-tree-tags">
                                        {biome.key_animals.map(a => <span key={a} className="geo-veg-tree-tag" style={{ borderColor: `${biome.color}50`, color: biome.color }}>{a}</span>)}
                                    </div>
                                </div>
                            </div>

                            <div className="geo-upsc-callout" style={{ borderColor: `${biome.color}40`, background: `${biome.color}0c` }}>
                                <span style={{ color: biome.color }}>📌 UPSC Key Points</span>
                                {biome.upsc.map((pt, i) => <p key={i}>{i + 1}. {pt}</p>)}
                            </div>
                        </div>
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* Biome Latitude Spectrum */}
            <section className="geo-content-section">
                <div className="geo-section-label">🌐 Latitudinal Distribution of Biomes</div>
                <h2 className="geo-section-title">Biomes from Equator to Poles</h2>
                <div className="geo-biome-latitude-chart">
                    <div className="geo-lat-biome-label-left">🔴 Equator (0°)</div>
                    <div className="geo-lat-biome-bars">
                        {[
                            { name: 'Tropical Rainforest', color: '#16A34A', range: '0–10°' },
                            { name: 'Tropical Savanna', color: '#CA8A04', range: '10–25°' },
                            { name: 'Hot Desert', color: '#EF4444', range: '25–35°' },
                            { name: 'Mediterranean', color: '#F59E0B', range: '30–45°' },
                            { name: 'Temp. Grassland', color: '#65A30D', range: '40–60°' },
                            { name: 'Temp. Deciduous', color: '#EA580C', range: '40–60°' },
                            { name: 'Boreal (Taiga)', color: '#0369A1', range: '50–70°' },
                            { name: 'Tundra', color: '#7C3AED', range: '70–90°' },
                        ].map((b, i) => (
                            <motion.div key={i} className="geo-lat-biome-bar"
                                initial={{ opacity: 0, scaleX: 0 }} whileInView={{ opacity: 1, scaleX: 1 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.7, ease: 'easeOut' }}>
                                <div className="geo-lat-biome-fill" style={{ background: b.color, opacity: 0.8 }} />
                                <span className="geo-lat-biome-name">{b.name}</span>
                                <span className="geo-lat-biome-range" style={{ color: b.color }}>{b.range}</span>
                            </motion.div>
                        ))}
                    </div>
                    <div className="geo-lat-biome-label-right">🧊 Poles (90°)</div>
                </div>
            </section>

            {/* All Biomes Quick Reference Grid */}
            <section className="geo-content-section">
                <div className="geo-section-label">📊 Quick Reference — All Biomes</div>
                <div className="geo-biome-ref-grid">
                    {BIOMES.map((b, i) => (
                        <motion.button key={i} className={`geo-biome-ref-card ${activeBiome === i ? 'selected' : ''}`}
                            onClick={() => { setActiveBiome(i); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -3, borderColor: b.color }}
                            style={{ borderColor: activeBiome === i ? b.color : 'transparent', background: `${b.color}08` }}>
                            <span className="geo-biome-ref-icon">{b.icon}</span>
                            <strong style={{ color: b.color }}>{b.name}</strong>
                            <span className="geo-biome-ref-lat">{b.latitude}</span>
                            <span className="geo-biome-ref-rain">{b.rainfall}</span>
                        </motion.button>
                    ))}
                </div>
            </section>
            <GeoNavFooter currentPath="/geography/world-biomes" />
        </div>
    )
}
