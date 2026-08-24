import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { INDIA_STATS, INDIA_GEO_SECTIONS, WORLD_GEO_SECTIONS, UPSC_MINDMAP } from '../data/geography'
import MindMapView from '../components/MindMapView'
import GeoInteractiveMap from '../components/GeoInteractiveMap'

const containerVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
}
const itemVar = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }
}

const UPSC_FLASHCARDS = [
    {
        q: 'Why are Himalayan rivers perennial while Peninsular rivers are seasonal?',
        a: 'Himalayan rivers are fed by both snowmelt from glaciers and seasonal monsoon rainfall. Peninsular rivers depend almost entirely on rainfall and flow over hard, non-porous crystalline rock terrains.',
        topic: 'Drainage Systems'
    },
    {
        q: 'What causes the "October Heat" phenomenon in India?',
        a: 'During the retreat of the SW Monsoon in October, clear skies and high daytime temperatures combine with high humidity from wet soils, creating oppressive sultry weather.',
        topic: 'Indian Climate'
    },
    {
        q: 'Why does the Coromandel Coast receive winter rainfall?',
        a: 'The North-East retreating monsoon winds blow from the northeast over the Bay of Bengal, absorb immense moisture, and hit Tamil Nadu / Coromandel Coast during Oct–Dec.',
        topic: 'Monsoon Climatology'
    },
    {
        q: 'What is the ecological significance of the Western Ghats (Sahyadri)?',
        a: 'UNESCO World Heritage Site & global biodiversity hotspot with high degree of endemism (Nilgiri Tahr, Lion-tailed Macaque, Purple Frog) and major watershed for peninsular rivers.',
        topic: 'Biomes & Ecology'
    }
];

export default function GeographyHome() {
    const navigate = useNavigate()
    const [activeFlashcard, setActiveFlashcard] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <div className="geo-page">
            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="geo-hero">
                <div className="geo-hero-bg" />
                <motion.div
                    className="geo-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.div
                        className="geo-hero-globe"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    >
                        🌍
                    </motion.div>
                    <p className="geo-hero-eyebrow">UPSC Geography — Comprehensive Visual Atlas</p>
                    <h1 className="geo-hero-title">
                        Geography<br />
                        <span className="geo-hero-accent">Through Interactive Visuals</span>
                    </h1>
                    <p className="geo-hero-desc">
                        Explore high-yield Indian & World Geography: Himalayan & Peninsular drainage, monsoon winds,
                        geomorphology, ocean currents, soil classifications, and biosphere reserves.
                    </p>
                    <div className="geo-hero-badges">
                        {['Interactive Atlas', 'Drainage Networks', 'Monsoon Vectors', 'UPSC Prelims + Mains'].map(b => (
                            <span key={b} className="geo-badge">{b}</span>
                        ))}
                    </div>
                </motion.div>
                <div className="geo-hero-scroll-hint">
                    <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>↓</motion.span>
                </div>
            </section>

            {/* ── INDIA STATS STRIP ────────────────────────────── */}
            <section className="geo-stats-strip">
                <div className="geo-section-label">🇮🇳 India at a Glance</div>
                <motion.div
                    className="geo-stats-scroll"
                    variants={containerVar}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {INDIA_STATS.map((s, i) => (
                        <motion.div
                            key={i}
                            className="geo-stat-chip"
                            variants={itemVar}
                            style={{ borderColor: `${s.color}35`, background: `${s.color}0a` }}
                        >
                            <span className="geo-stat-chip-icon" style={{ color: s.color }}>{s.icon}</span>
                            <div>
                                <div className="geo-stat-chip-value" style={{ color: s.color }}>{s.value}</div>
                                <div className="geo-stat-chip-label">{s.label}</div>
                                <div className="geo-stat-chip-sub">{s.sub}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── INTERACTIVE GEOGRAPHY ATLAS MAP ──────────────── */}
            <section className="geo-interactive-map-section" style={{ padding: '0 40px', margin: '40px 0' }}>
                <GeoInteractiveMap />
            </section>

            {/* ── UPSC MINDMAP ─────────────────────────────────── */}
            <section className="geo-mindmap-section">
                <div className="geo-section-label">🗺️ UPSC Geography Syllabus — Mindmap</div>
                <h2 className="geo-section-title">Complete Geography at a Glance</h2>
                <p className="geo-section-sub">All major topics of UPSC Prelims + Mains Geography in one visual overview</p>
                <div className="geo-mindmap-container">
                    <MindMapView data={UPSC_MINDMAP} width={720} height={540} />
                </div>
            </section>

            {/* ── INDIAN GEOGRAPHY MODULES ─────────────────────── */}
            <section className="geo-modules-section">
                <div className="geo-section-label">🇮🇳 Indian Geography Modules</div>
                <h2 className="geo-section-title" style={{ color: '#F59E0B' }}>India — Physical to Cultural</h2>
                <p className="geo-section-sub">From the Himalayas to the Coral Islands — explore every facet of India's diverse geography</p>
                <motion.div
                    className="geo-modules-grid"
                    variants={containerVar}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {INDIA_GEO_SECTIONS.map((sec) => (
                        <motion.button
                            key={sec.id}
                            className="geo-module-card"
                            variants={itemVar}
                            onClick={() => navigate(sec.link)}
                            whileHover={{ y: -6, borderColor: sec.color, boxShadow: `0 8px 32px ${sec.color}25` }}
                        >
                            <div className="geo-module-icon" style={{ background: `${sec.color}18`, color: sec.color }}>
                                {sec.icon}
                            </div>
                            <h3 className="geo-module-title" style={{ color: sec.color }}>{sec.title}</h3>
                            <p className="geo-module-desc">{sec.desc}</p>
                            <span className="geo-module-arrow" style={{ color: sec.color }}>Explore Module →</span>
                        </motion.button>
                    ))}
                </motion.div>
            </section>

            {/* ── WORLD GEOGRAPHY MODULES ──────────────────────── */}
            <section className="geo-modules-section" style={{ background: 'rgba(16,185,129,0.03)' }}>
                <div className="geo-section-label">🌍 World Geography Modules</div>
                <h2 className="geo-section-title" style={{ color: '#10B981' }}>World — Concepts to Landscapes</h2>
                <p className="geo-section-sub">UPSC-level World Geography: Earth interior, climate systems, oceanography, and global biomes</p>
                <motion.div
                    className="geo-modules-grid"
                    variants={containerVar}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {WORLD_GEO_SECTIONS.map((sec) => (
                        <motion.button
                            key={sec.id}
                            className="geo-module-card"
                            variants={itemVar}
                            onClick={() => navigate(sec.link)}
                            whileHover={{ y: -6, borderColor: sec.color, boxShadow: `0 8px 32px ${sec.color}25` }}
                        >
                            <div className="geo-module-icon" style={{ background: `${sec.color}18`, color: sec.color }}>
                                {sec.icon}
                            </div>
                            <h3 className="geo-module-title" style={{ color: sec.color }}>{sec.title}</h3>
                            <p className="geo-module-desc">{sec.desc}</p>
                            <span className="geo-module-arrow" style={{ color: sec.color }}>Explore Module →</span>
                        </motion.button>
                    ))}
                </motion.div>
            </section>

            {/* ── UPSC REVISION FLASHCARD SECTION ──────────────── */}
            <section className="geo-flashcard-section" style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
                <div className="geo-section-label" style={{ color: '#38BDF8' }}>💡 UPSC High-Yield Concept Flashcard</div>
                <h2 className="geo-section-title" style={{ color: '#38BDF8' }}>Core Geographical Reasoning</h2>
                <div className="glass-panel" style={{ padding: '32px', marginTop: '20px', border: '1px solid rgba(56,189,248,0.2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <span style={{ fontSize: '0.85rem', color: '#38BDF8', fontWeight: 600 }}>
                            📌 {UPSC_FLASHCARDS[activeFlashcard].topic}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                            Card {activeFlashcard + 1} of {UPSC_FLASHCARDS.length}
                        </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', color: '#f8fafc', marginBottom: '20px', lineHeight: 1.5 }}>
                        Q: {UPSC_FLASHCARDS[activeFlashcard].q}
                    </h3>

                    {showAnswer ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ background: 'rgba(56,189,248,0.08)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #38BDF8', color: '#e2e8f0', lineHeight: 1.6 }}
                        >
                            <strong>💡 Model Answer:</strong> {UPSC_FLASHCARDS[activeFlashcard].a}
                        </motion.div>
                    ) : (
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowAnswer(true)}
                            style={{ marginTop: '10px' }}
                        >
                            Reveal Conceptual Answer 👁️
                        </button>
                    )}

                    <div style={{ display: 'flex', gap: '12px', marginTop: '24px', justifyContent: 'flex-end' }}>
                        <button
                            className="btn btn-glass"
                            onClick={() => {
                                setShowAnswer(false)
                                setActiveFlashcard(prev => (prev > 0 ? prev - 1 : UPSC_FLASHCARDS.length - 1))
                            }}
                        >
                            ← Previous
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                setShowAnswer(false)
                                setActiveFlashcard(prev => (prev + 1) % UPSC_FLASHCARDS.length)
                            }}
                        >
                            Next Concept →
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
