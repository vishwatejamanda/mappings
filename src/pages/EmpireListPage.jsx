import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { DYNASTIES, getDynastiesByEra } from '../data/dynasties'

const ERA_CONFIG = [
    {
        id: 'ancient', title: 'Ancient India', period: '3300 BCE – 600 CE',
        icon: '🏛️', color: '#F59E0B',
        gradient: 'linear-gradient(135deg, #F59E0B20, #D9770610)',
        subtitle: 'From the Indus Valley to the Gupta Golden Age — the foundations of Indian civilization'
    },
    {
        id: 'medieval', title: 'Medieval India', period: '600 CE – 1526 CE',
        icon: '⚔️', color: '#8B5CF6',
        gradient: 'linear-gradient(135deg, #8B5CF620, #7C3AED10)',
        subtitle: 'Cholas to Delhi Sultanate — maritime empires, temple builders, and conquerors'
    },
    {
        id: 'modern', title: 'Modern India', period: '1526 CE – 1947 CE',
        icon: '🇮🇳', color: '#10B981',
        gradient: 'linear-gradient(135deg, #10B98120, #059E6B10)',
        subtitle: 'Mughals, Marathas, Sikh Empire to the British Raj and Independence'
    }
]

export default function EmpireListPage() {
    const navigate = useNavigate()
    const [activeEra, setActiveEra] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')

    const allDynasties = useMemo(() => Object.values(DYNASTIES), [])

    const filteredDynasties = useMemo(() => {
        let dynasties = activeEra ? getDynastiesByEra(activeEra) : allDynasties
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase()
            dynasties = dynasties.filter(d =>
                d.name.toLowerCase().includes(q) ||
                d.period.toLowerCase().includes(q) ||
                d.capital.toLowerCase().includes(q) ||
                d.founded.toLowerCase().includes(q) ||
                d.rulers.some(r => r.name.toLowerCase().includes(q))
            )
        }
        return dynasties
    }, [activeEra, searchQuery, allDynasties])

    const getEraColor = (era) => ERA_CONFIG.find(e => e.id === era)?.color || '#F59E0B'

    return (
        <div className="empires-list-page">
            {/* Hero */}
            <section className="empires-hero">
                <div className="empires-hero-bg" />
                <motion.div
                    className="empires-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="empires-hero-eyebrow">📜 Imperial Chronicle of Bharat</span>
                    <h1 className="empires-hero-title">Empires & Dynasties</h1>
                    <p className="empires-hero-subtitle">
                        From the Indus Valley Civilization to Indian Independence — explore {allDynasties.length} ruling dynasties,
                        their {allDynasties.reduce((s, d) => s + d.rulers.length, 0)} kings, architectural marvels, coins, conquests, and legacies.
                    </p>

                    {/* Stats */}
                    <div className="empires-hero-stats">
                        <div className="empires-stat">
                            <span className="empires-stat-number">{allDynasties.length}</span>
                            <span className="empires-stat-label">Dynasties</span>
                        </div>
                        <div className="empires-stat">
                            <span className="empires-stat-number">{allDynasties.reduce((s, d) => s + d.rulers.length, 0)}</span>
                            <span className="empires-stat-label">Rulers</span>
                        </div>
                        <div className="empires-stat">
                            <span className="empires-stat-number">5000+</span>
                            <span className="empires-stat-label">Years of History</span>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Search & Era Filter */}
            <div className="empires-controls">
                <input
                    type="text"
                    className="empires-search"
                    placeholder="🔍 Search dynasties, kings, capitals (e.g. Ashoka, Pataliputra, Chola)..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <div className="empires-era-tabs">
                    <button
                        className={`empires-era-tab ${!activeEra ? 'active' : ''}`}
                        onClick={() => setActiveEra(null)}
                    >
                        All Eras ({allDynasties.length})
                    </button>
                    {ERA_CONFIG.map(era => (
                        <button
                            key={era.id}
                            className={`empires-era-tab ${activeEra === era.id ? 'active' : ''}`}
                            onClick={() => setActiveEra(activeEra === era.id ? null : era.id)}
                            style={activeEra === era.id ? { borderColor: era.color, color: era.color, background: `${era.color}15` } : {}}
                        >
                            {era.icon} {era.title} ({getDynastiesByEra(era.id).length})
                        </button>
                    ))}
                </div>
            </div>

            {/* Dynasty Sections */}
            {ERA_CONFIG.filter(era => !activeEra || activeEra === era.id).map(era => {
                const dynasties = filteredDynasties.filter(d => d.era === era.id)
                if (dynasties.length === 0) return null

                return (
                    <section key={era.id} className="empires-era-section">
                        <div className="empires-era-header" style={{ borderLeft: `4px solid ${era.color}` }}>
                            <span className="empires-era-icon">{era.icon}</span>
                            <div>
                                <h2 className="empires-era-title" style={{ color: era.color }}>{era.title}</h2>
                                <p className="empires-era-period">{era.period}</p>
                                <p className="empires-era-subtitle">{era.subtitle}</p>
                            </div>
                        </div>

                        <div className="empires-dynasty-grid">
                            <AnimatePresence>
                                {dynasties.map((dynasty, i) => (
                                    <motion.div
                                        key={dynasty.id}
                                        className="empires-dynasty-card"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.06 }}
                                        whileHover={{ y: -6, borderColor: dynasty.color }}
                                        onClick={() => { navigate(`/empires/${dynasty.id}`); window.scrollTo(0, 0) }}
                                        style={{ borderTop: `3px solid ${dynasty.color}` }}
                                    >
                                        {/* Color accent bg */}
                                        <div className="empires-card-accent" style={{ background: `radial-gradient(circle at 20% 20%, ${dynasty.color}15 0%, transparent 60%)` }} />

                                        <div className="empires-card-header">
                                            <span className="empires-card-era-badge" style={{ background: `${era.color}20`, color: era.color }}>
                                                {era.icon} {era.title}
                                            </span>
                                            <h3 className="empires-card-name">{dynasty.name}</h3>
                                            <p className="empires-card-period" style={{ color: dynasty.color }}>{dynasty.period}</p>
                                        </div>

                                        <div className="empires-card-meta">
                                            <div className="empires-card-meta-item">
                                                <span>👑</span>
                                                <span>Founded by {dynasty.founded}</span>
                                            </div>
                                            <div className="empires-card-meta-item">
                                                <span>📍</span>
                                                <span>Capital: {dynasty.capital}</span>
                                            </div>
                                        </div>

                                        <p className="empires-card-overview">{dynasty.overview.substring(0, 150)}...</p>

                                        <div className="empires-card-stats-row">
                                            <span className="empires-card-stat" style={{ color: dynasty.color }}>
                                                👑 {dynasty.rulers.length} rulers
                                            </span>
                                            <span className="empires-card-stat">
                                                🏆 {dynasty.legacy.length} legacies
                                            </span>
                                        </div>

                                        <div className="empires-card-footer">
                                            <span className="empires-card-explore" style={{ color: dynasty.color }}>
                                                Explore Dynasty →
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </section>
                )
            })}

            {filteredDynasties.length === 0 && (
                <div className="empires-empty">
                    <p>No dynasties match your search. Try another term.</p>
                </div>
            )}
        </div>
    )
}
