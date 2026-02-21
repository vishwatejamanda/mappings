import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const features = [
    {
        icon: '📜',
        title: 'History',
        description: 'Dive into Ancient, Medieval, and Modern Indian history with detailed timelines, events, key figures, maps, and contemporary world context.',
        color: '#F43F5E',
        link: '/history',
        available: true
    },
    {
        icon: '🗺️',
        title: 'Empire Maps',
        description: 'Explore the rise and fall of Indian empires on an interactive map. Travel through time from the Vedic Age to Modern India.',
        color: '#F59E0B',
        link: '/maps/empires',
        available: true
    },
    {
        icon: '🌍',
        title: 'Geography',
        description: 'Complete Indian & World Geography — Physical features, Rivers, Climate, Soils, Vegetation, Geomorphology, Oceanography & Biomes. UPSC visualized.',
        color: '#3B82F6',
        link: '/geography',
        available: true
    },
    {
        icon: '⚖️',
        title: 'Polity & Governance',
        description: 'Understand the evolution of Indian governance from Sabhas and Samitis to the world\'s largest democracy.',
        color: '#8B5CF6',
        link: '/polity',
        available: false
    },
    {
        icon: '📊',
        title: 'Economy',
        description: 'Track India\'s economic journey — from ancient trade routes and spice trade to becoming a global economic power.',
        color: '#10B981',
        link: '/economy',
        available: false
    },
    {
        icon: '⚔️',
        title: 'Battles & Wars',
        description: 'Relive the pivotal battles that changed the course of Indian history — from Kalinga to Panipat.',
        color: '#EF4444',
        link: '/battles',
        available: false
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

function LandingPage() {
    const navigate = useNavigate()

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg-pattern" />
                <div className="hero-ornament" />
                <div className="hero-ornament" />
                <div className="hero-ornament" />

                <motion.p
                    className="hero-subtitle-top"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    An Interactive Journey Through
                </motion.p>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    5000 Years of<br />Indian Civilization
                </motion.h1>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    Explore the magnificent history of Bharat through interactive maps, timelines,
                    and rich narratives. From the ancient Vedic civilization to the modern Republic,
                    witness the rise and fall of empires that shaped the subcontinent.
                </motion.p>

                <motion.div
                    className="hero-cta-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <button
                        className="btn btn-primary"
                        onClick={() => navigate('/maps/empires')}
                    >
                        🗺️ Explore Empire Maps
                    </button>
                    <button
                        className="btn btn-secondary"
                        onClick={() => {
                            document.querySelector('.features-section')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Learn More ↓
                    </button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: 30,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 8
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-heading)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '2px' }}>
                        Scroll to explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}
                    >
                        ↓
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Section */}
            <motion.section
                className="features-section"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        className="feature-card"
                        variants={itemVariants}
                        onClick={() => feature.available && navigate(feature.link)}
                        style={{ cursor: feature.available ? 'pointer' : 'not-allowed' }}
                        whileHover={feature.available ? { y: -4, borderColor: feature.color } : {}}
                    >
                        <div
                            className="feature-card-icon"
                            style={{ background: `${feature.color}15`, color: feature.color }}
                        >
                            {feature.icon}
                        </div>
                        <h3 className="feature-card-title">
                            {feature.title}
                            {!feature.available && <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginLeft: 8, fontWeight: 400 }}>Coming Soon</span>}
                        </h3>
                        <p className="feature-card-desc">{feature.description}</p>
                    </motion.div>
                ))}
            </motion.section>

            {/* Footer */}
            <footer style={{
                padding: '40px',
                textAlign: 'center',
                borderTop: '1px solid var(--border-subtle)',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem'
            }}>
                <p style={{ marginBottom: 8 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--accent-gold)' }}>
                        Bharat Through Ages
                    </span>
                </p>
                <p>An interactive exploration of Indian History, Geography, Polity & Economics</p>
            </footer>
        </div>
    )
}

export default LandingPage
