import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RIVERS } from '../data/geography'
import GeoBackNav from '../components/GeoBackNav'
import GeoNavFooter from '../components/GeoNavFooter'

export default function IndianRivers() {
    const [activeType, setActiveType] = useState('himalayan')
    const [selectedRiver, setSelectedRiver] = useState(null)
    const rivers = RIVERS[activeType] || []
    const typeColor = activeType === 'himalayan' ? '#3B82F6' : '#F43F5E'

    return (
        <div className="geo-page">
            <GeoBackNav current="Rivers & Drainage" color={typeColor} />
            <section className="geo-sub-hero" style={{ background: `linear-gradient(135deg, #ffffff 60%, ${typeColor}22)` }}>
                <motion.div className="geo-sub-hero-content"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <p className="geo-hero-eyebrow">Indian Geography › Rivers & Drainage</p>
                    <h1 className="geo-sub-hero-title">🌊 Rivers of India</h1>
                    <p className="geo-sub-hero-subtitle" style={{ color: typeColor }}>Himalayan & Peninsular River Systems — UPSC Level</p>
                </motion.div>
            </section>

            {/* Toggle */}
            <div className="geo-toggle-bar">
                {[
                    { id: 'himalayan', label: '🏔️ Himalayan Rivers', color: '#3B82F6', desc: 'Perennial • Antecedent • Gorge-forming' },
                    { id: 'peninsular', label: '🌋 Peninsular Rivers', color: '#F43F5E', desc: 'Seasonal • Subsequent • Valley-forming' },
                ].map(t => (
                    <motion.button key={t.id} className={`geo-toggle-btn ${activeType === t.id ? 'active' : ''}`}
                        onClick={() => { setActiveType(t.id); setSelectedRiver(null) }}
                        whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
                        style={activeType === t.id ? { borderColor: t.color, color: t.color, background: `${t.color}12` } : {}}>
                        <span>{t.label}</span>
                        <span className="geo-toggle-desc">{t.desc}</span>
                    </motion.button>
                ))}
            </div>

            {/* Comparison Banner */}
            <div className="geo-river-compare-banner">
                <div className="geo-river-compare-col" style={{ borderColor: '#3B82F6' }}>
                    <h4 style={{ color: '#3B82F6' }}>🏔️ Himalayan Rivers</h4>
                    <ul>
                        <li>Perennial (snow + rain fed)</li>
                        <li>Antecedent drainage — older than Himalayas</li>
                        <li>Form deep gorges, V-shaped valleys</li>
                        <li>Carry large volumes — prone to flooding</li>
                        <li>Fertile silt deposition in plains</li>
                    </ul>
                </div>
                <div className="geo-river-compare-col" style={{ borderColor: '#F43F5E' }}>
                    <h4 style={{ color: '#F43F5E' }}>🌋 Peninsular Rivers</h4>
                    <ul>
                        <li>Seasonal (rain-fed only)</li>
                        <li>Subsequent drainage — younger than plateau</li>
                        <li>Shallow, broad valleys</li>
                        <li>Flow east (to Bay of Bengal) mainly</li>
                        <li>Form deltas or estuaries at mouth</li>
                    </ul>
                </div>
            </div>

            {/* River Cards */}
            <AnimatePresence mode="wait">
                <motion.section key={activeType} className="geo-content-section"
                    initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}>
                    <div className="geo-section-label" style={{ color: typeColor }}>
                        {activeType === 'himalayan' ? '🏔️' : '🌋'} {activeType === 'himalayan' ? 'Himalayan' : 'Peninsular'} River Systems
                    </div>
                    <div className="geo-river-grid">
                        {rivers.map((river, i) => (
                            <motion.div key={river.name} className={`geo-river-card ${selectedRiver === i ? 'selected' : ''}`}
                                onClick={() => setSelectedRiver(selectedRiver === i ? null : i)}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                whileHover={{ y: -4 }}
                                style={{ borderTop: `3px solid ${river.color}`, boxShadow: selectedRiver === i ? `0 4px 24px ${river.color}30` : undefined }}>
                                <div className="geo-river-card-header">
                                    <span className="geo-river-icon" style={{ background: `${river.color}18`, color: river.color }}>{river.icon}</span>
                                    <div>
                                        <h3 className="geo-river-name">{river.name}</h3>
                                        <span className="geo-river-length" style={{ color: river.color }}>📏 {river.length}</span>
                                    </div>
                                </div>
                                <div className="geo-river-quick">
                                    <span>🏔️ <strong>Origin:</strong> {river.origin}</span>
                                    <span>➡️ <strong>Flow:</strong> {river.direction}</span>
                                    <span>🌊 <strong>Drains:</strong> {river.drains_into}</span>
                                </div>
                                <AnimatePresence>
                                    {selectedRiver === i && (
                                        <motion.div className="geo-river-detail"
                                            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                                            <div className="geo-river-tributaries">
                                                <span className="geo-river-detail-label">🌿 Tributaries:</span>
                                                <div className="geo-tributary-tags">
                                                    {river.tributaries?.map(t => <span key={t} className="geo-tributary-tag" style={{ borderColor: `${river.color}50`, color: river.color }}>{t}</span>)}
                                                </div>
                                            </div>
                                            <p className="geo-river-significance">{river.significance}</p>
                                            <div className="geo-upsc-callout" style={{ borderColor: `${river.color}40`, background: `${river.color}0c` }}>
                                                <span style={{ color: river.color }}>📌 UPSC:</span>
                                                <p>{river.upsc}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <button className="geo-river-expand-btn" style={{ color: typeColor }}>
                                    {selectedRiver === i ? 'Show Less ▲' : 'More Details ▼'}
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>
            </AnimatePresence>

            {/* Drainage Patterns */}
            <section className="geo-content-section">
                <div className="geo-section-label">🌿 Drainage Patterns</div>
                <h2 className="geo-section-title" style={{ color: '#10B981' }}>Types of Drainage Patterns</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Drainage patterns depend on the underlying rock structure, slope, and geological history.</p>
                <div className="geo-drainage-grid">
                    {RIVERS.drainage_patterns.map((dp, i) => (
                        <motion.div key={dp.name} className="geo-drainage-card"
                            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                            <span className="geo-drainage-icon">{dp.icon}</span>
                            <h4 className="geo-drainage-name">{dp.name}</h4>
                            <p className="geo-drainage-desc">{dp.desc}</p>
                            <span className="geo-drainage-example">e.g. {dp.example}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* UPSC Quick Revision */}
            <section className="geo-upsc-section" style={{ margin: '0 40px 60px', borderColor: '#3B82F640', background: '#3B82F608' }}>
                <h3 className="geo-upsc-section-title" style={{ color: '#3B82F6' }}>📌 UPSC Rivers — Quick Revision Points</h3>
                <div className="geo-upsc-points-grid">
                    {[
                        'Indus Waters Treaty (1960): India gets Ravi, Beas, Sutlej; Pakistan gets Indus, Jhelum, Chenab',
                        'Ganga + Brahmaputra + Meghna combine to form world\'s largest delta — Sundarbans',
                        'Brahmaputra is only river that flows north of Himalayas before entering India',
                        'Narmada and Tapti are India\'s major west-flowing rivers — flow through rift valleys',
                        'Kaveri is only S. Indian river with semi-perennial flow (gets both SW + NE Monsoon)',
                        'Hirakud Dam on Mahanadi — longest dam in India (4.8 km)',
                        'Godavari is "Dakshin Ganga" — largest peninsular river by basin area',
                        'Kosi = "Sorrow of Bihar" — causes floods due to tremendous sediment load',
                    ].map((pt, i) => (
                        <div key={i} className="geo-upsc-point-card">
                            <span className="geo-upsc-point-num" style={{ background: '#3B82F6' }}>{i + 1}</span>
                            <span>{pt}</span>
                        </div>
                    ))}
                </div>
            </section>

            <GeoNavFooter currentPath="/geography/indian-rivers" />
        </div>
    )
}
