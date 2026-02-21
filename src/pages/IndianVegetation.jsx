import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { VEGETATION, BIOSPHERE_RESERVES } from '../data/geography'
import GeoBackNav from '../components/GeoBackNav'
import GeoNavFooter from '../components/GeoNavFooter'

export default function IndianVegetation() {
    const [activeVeg, setActiveVeg] = useState(0)
    const veg = VEGETATION[activeVeg]

    return (
        <div className="geo-page">
            <GeoBackNav current="Natural Vegetation" color={veg.color} />
            <section className="geo-sub-hero" style={{ background: `linear-gradient(135deg, #0a0a1a 60%, ${veg.color}22)` }}>
                <motion.div className="geo-sub-hero-content"
                    key={activeVeg} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="geo-hero-eyebrow">Indian Geography › Natural Vegetation</p>
                    <h1 className="geo-sub-hero-title">🌿 Natural Vegetation of India</h1>
                    <p className="geo-sub-hero-subtitle" style={{ color: veg.color }}>Forest Types, Biosphere Reserves & Wildlife — UPSC Level</p>
                </motion.div>
            </section>

            {/* Vegetation Type Selector */}
            <div className="geo-tab-bar geo-veg-tab-bar">
                {VEGETATION.map((v, i) => (
                    <motion.button key={v.id} className={`geo-tab ${activeVeg === i ? 'active' : ''}`}
                        onClick={() => setActiveVeg(i)} whileHover={{ y: -2 }}
                        style={activeVeg === i ? { borderColor: v.color, color: v.color, background: `${v.color}12` } : {}}>
                        {v.icon} {v.name.split(' ').slice(0, 2).join(' ')}
                    </motion.button>
                ))}
            </div>

            {/* Altitudinal / Rainfall Strip */}
            <div className="geo-veg-spectrum-strip">
                <div className="geo-veg-spectrum-label">← Higher Rainfall</div>
                {VEGETATION.map((v, i) => (
                    <motion.div key={i} className={`geo-veg-spectrum-seg ${activeVeg === i ? 'active' : ''}`}
                        onClick={() => setActiveVeg(i)}
                        style={{ background: `${v.color}${activeVeg === i ? 'cc' : '40'}`, flex: 1 }}>
                        <span>{v.icon}</span>
                        <span style={{ fontSize: '0.65rem' }}>{v.rainfall}</span>
                    </motion.div>
                ))}
                <div className="geo-veg-spectrum-label">Lower Rainfall →</div>
            </div>

            {/* Vegetation Detail */}
            <AnimatePresence mode="wait">
                <motion.section key={activeVeg} className="geo-content-section"
                    initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}>
                    <div className="geo-veg-detail-layout">
                        {/* Left panel */}
                        <div className="geo-veg-card-panel" style={{ borderColor: `${veg.color}40`, background: `${veg.color}05` }}>
                            <div className="geo-veg-icon-big">{veg.icon}</div>
                            <h2 className="geo-veg-name" style={{ color: veg.color }}>{veg.name}</h2>
                            <div className="geo-veg-meta-rows">
                                <div><span>🌧️</span><strong>Rainfall:</strong> {veg.rainfall}</div>
                                <div><span>⬆️</span><strong>Altitude:</strong> {veg.altitude}</div>
                                <div><span>🌡️</span><strong>Temp:</strong> {veg.temp}</div>
                            </div>
                            <div className="geo-veg-trees-section">
                                <h4 style={{ color: veg.color }}>🌳 Key Trees / Plants</h4>
                                <div className="geo-veg-tree-tags">
                                    {veg.key_trees.map(t => <span key={t} className="geo-veg-tree-tag" style={{ borderColor: `${veg.color}50`, color: veg.color }}>{t}</span>)}
                                </div>
                            </div>
                            <div className="geo-veg-states-section">
                                <h4 style={{ color: veg.color }}>📍 Major States</h4>
                                {veg.states.map((s, i) => <div key={i} className="geo-veg-state-item">{s}</div>)}
                            </div>
                        </div>

                        {/* Right panel */}
                        <div className="geo-veg-info-panel">
                            <div className="geo-veg-section">
                                <h4 style={{ color: veg.color }}>🔬 Features & Characteristics</h4>
                                <ul className="geo-soil-list">
                                    {veg.features.map((f, i) => <li key={i}><span style={{ color: veg.color }}>◆</span> {f}</li>)}
                                </ul>
                            </div>
                            <div className="geo-upsc-callout" style={{ borderColor: `${veg.color}40`, background: `${veg.color}0c` }}>
                                <span style={{ color: veg.color }}>📌 UPSC Points</span>
                                {veg.upsc.map((pt, i) => <p key={i}>{i + 1}. {pt}</p>)}
                            </div>

                            {/* Adaptation visualization */}
                            <div className="geo-veg-adaptations">
                                <h4 style={{ color: veg.color }}>🧬 Adaptations to Climate</h4>
                                <div className="geo-adaptation-grid">
                                    {veg.id === 'tropical_evergreen' && [
                                        { icon: '🌿', text: 'Broad leaves for maximum photosynthesis in shade' },
                                        { icon: '🌊', text: 'Deep roots to access abundant groundwater' },
                                        { icon: '🌺', text: 'Epiphytes grow on branches for light' },
                                        { icon: '🐒', text: 'Dense canopy = multilayer ecosystem' },
                                    ].map((a, i) => <div key={i} className="geo-adaptation-item"><span>{a.icon}</span><p>{a.text}</p></div>)}
                                    {veg.id === 'moist_deciduous' && [
                                        { icon: '🍂', text: 'Shed leaves in dry season to conserve water' },
                                        { icon: '🔄', text: 'Grow again fully when monsoon arrives' },
                                        { icon: '🌾', text: 'Grassy understory in open sections' },
                                        { icon: '🪵', text: 'Teak hardwood — naturally fire-resistant bark' },
                                    ].map((a, i) => <div key={i} className="geo-adaptation-item"><span>{a.icon}</span><p>{a.text}</p></div>)}
                                    {veg.id === 'thorn' && [
                                        { icon: '🌵', text: 'Long thorns prevent herbivory' },
                                        { icon: '💧', text: 'Waxy cuticle reduces water loss' },
                                        { icon: '🌱', text: 'Very deep roots (>15m) to reach groundwater' },
                                        { icon: '☀️', text: 'CAM photosynthesis — stomates open at night only' },
                                    ].map((a, i) => <div key={i} className="geo-adaptation-item"><span>{a.icon}</span><p>{a.text}</p></div>)}
                                    {veg.id === 'mangrove' && [
                                        { icon: '🦺', text: 'Prop/stilt roots anchor in soft tidal mud' },
                                        { icon: '💨', text: 'Pneumatophores — breathing roots above mudflat' },
                                        { icon: '🧂', text: 'Exclude salt or excrete salt through leaves' },
                                        { icon: '🌱', text: 'Viviparous seeds germinate on parent tree' },
                                    ].map((a, i) => <div key={i} className="geo-adaptation-item"><span>{a.icon}</span><p>{a.text}</p></div>)}
                                    {(veg.id === 'dry_deciduous' || veg.id === 'montane') && [
                                        { icon: '⛰️', text: 'Adapted to local microclimate and soil conditions' },
                                        { icon: '🌱', text: 'Seasonal growth synchronized with rainfall/temperature' },
                                        { icon: '🪵', text: 'Woody stems store nutrients through dry periods' },
                                        { icon: '🔄', text: 'Cyclical leaf fall reduces water demand' },
                                    ].map((a, i) => <div key={i} className="geo-adaptation-item"><span>{a.icon}</span><p>{a.text}</p></div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* Biosphere Reserves */}
            <section className="geo-content-section">
                <div className="geo-section-label" style={{ color: '#16A34A' }}>🌐 Biosphere Reserves of India</div>
                <h2 className="geo-section-title" style={{ color: '#16A34A' }}>UNESCO Recognized Biosphere Reserves</h2>
                <p style={{ color: 'var(--text-secondary)', padding: '0 40px', marginBottom: 24 }}>
                    India has 18 Biosphere Reserves. 12 are recognized by UNESCO under the Man and Biosphere (MAB) Programme.
                </p>
                <div className="geo-br-grid">
                    {BIOSPHERE_RESERVES.map((br, i) => (
                        <motion.div key={i} className="geo-br-card"
                            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -3, borderColor: '#16A34A40' }}>
                            <span className="geo-br-icon">{br.icon}</span>
                            <h4 className="geo-br-name">{br.name}</h4>
                            <p className="geo-br-states" style={{ color: '#16A34A' }}>📍 {br.states}</p>
                            <p className="geo-br-upsc">{br.upsc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
            <GeoNavFooter currentPath="/geography/indian-vegetation" />
        </div>
    )
}
