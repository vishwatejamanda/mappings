import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { getEmpiresAtYear, formatYear } from '../data/empires'

const features = [
    {
        icon: '📜',
        title: 'Chronological History',
        tagline: '5000 Years Timeline',
        description: 'Deep-dive into Ancient, Medieval & Modern Indian history with 60+ detailed timeline events, key figures, interactive mini-maps & global contemporaries.',
        color: '#F43F5E',
        glow: 'rgba(244, 63, 94, 0.35)',
        link: '/history',
        available: true,
        stats: '60+ Events',
        image: '/images/ancient_era.jpg'
    },
    {
        icon: '🗺️',
        title: 'Interactive Empire Maps',
        tagline: 'Multi-Layer Geo-Spatial Engine',
        description: 'Explore territorial boundaries of 22+ Indian empires, ancient cities of that time, maritime spice routes, and historic battle sites on dynamic Leaflet maps.',
        color: '#F59E0B',
        glow: 'rgba(245, 158, 11, 0.35)',
        link: '/maps/empires',
        available: true,
        stats: '22+ Empires',
        image: '/images/hero_bharat.jpg'
    },
    {
        icon: '🌍',
        title: 'UPSC Geography Atlas',
        tagline: 'India & World Atlas',
        description: 'Complete Indian & World Geography visualizer — interactive drainage networks, Himalayan peaks, monsoon vectors, soil classifications, and biomes.',
        color: '#38BDF8',
        glow: 'rgba(56, 189, 248, 0.35)',
        link: '/geography',
        available: true,
        stats: '9 Modules',
        image: '/images/ancient_era.jpg'
    },
    {
        icon: '⚖️',
        title: 'Polity & Governance',
        tagline: 'From Sabhas to Constitution',
        description: 'Trace Indian statecraft: Vedic assemblies, Kautilya\'s Arthashastra, Mughal Mansabdari, landmark British Acts, Constitutional articles & amendments.',
        color: '#A855F7',
        glow: 'rgba(168, 85, 247, 0.35)',
        link: '/polity',
        available: true,
        stats: '15 Articles',
        image: '/images/polity_banner.jpg'
    },
    {
        icon: '📊',
        title: 'Economic History',
        tagline: '32% Global GDP to 2026',
        description: 'Track India\'s wealth trajectory from ancient spice routes & punch-marked coinage to colonial deindustrialization, 1991 LPG reforms & UPI fintech.',
        color: '#10B981',
        glow: 'rgba(168, 85, 247, 0.35)',
        link: '/economy',
        available: true,
        stats: '5 Eras',
        image: '/images/economy_banner.jpg'
    },
    {
        icon: '🎭',
        title: 'Art & Culture',
        tagline: 'Living Heritage',
        description: 'Soaring temple architecture (Nagara, Dravida, Vesara), Ajanta cave frescoes, 8 classical dance forms, Bhakti/Sufi literature & 15+ UNESCO sites.',
        color: '#FB923C',
        glow: 'rgba(251, 146, 60, 0.35)',
        link: '/culture',
        available: true,
        stats: '15+ UNESCO Sites',
        image: '/images/culture_banner.jpg'
    }
]

const grandEras = [
    {
        id: 'ancient',
        title: 'Ancient Bharat',
        span: '3300 BCE – 647 CE',
        desc: 'The dawn of urban civilization in the Indus-Sarasvati basin, Vedic philosophy, the rise of Buddhism & Jainism, the pan-Indian Mauryan Empire under Ashoka, and the Gupta Golden Age of science and arts.',
        empires: ['Indus Valley', 'Vedic Janapadas', 'Maurya Empire', 'Satavahanas', 'Gupta Empire', 'Harshavardhana'],
        image: '/images/ancient_era.jpg',
        color: '#F59E0B',
        link: '/history'
    },
    {
        id: 'medieval',
        title: 'Medieval Splendor',
        span: '647 CE – 1526 CE',
        desc: 'An era of magnificent Dravidian temple architecture under the imperial Cholas, Rajput chivalry, the Delhi Sultanate\'s conquests, the maritime zenith of Vijayanagara, and the flowering of Bhakti & Sufi traditions.',
        empires: ['Imperial Cholas', 'Rashtrakutas', 'Delhi Sultanate', 'Vijayanagara Empire', 'Bahmani Sultanate'],
        image: '/images/medieval_era.jpg',
        color: '#A855F7',
        link: '/history'
    },
    {
        id: 'modern',
        title: 'Colonial to Republic',
        span: '1526 CE – Present',
        desc: 'The grand synthesis of Mughal art & administration, the Maratha resurgence, the trauma of colonial drain and the heroic freedom movement, culminating in the adoption of the world\'s largest democratic constitution.',
        empires: ['Mughal Empire', 'Maratha Empire', 'British Raj', 'Republic of India'],
        image: '/images/modern_era.jpg',
        color: '#10B981',
        link: '/history'
    }
]

const heroStats = [
    { value: '5000+', label: 'Years of History', sub: 'From Harappa to 2026', icon: '📜' },
    { value: '22+', label: 'Exact Empire Maps', sub: 'With cities & sea routes', icon: '🗺️' },
    { value: '40+', label: 'Historic Cities', sub: 'Harappa to New Delhi', icon: '🏛️' },
    { value: '60+', label: 'Curated Events', sub: 'With global context', icon: '⚔️' },
]

const historicalQuotes = [
    { text: 'In the great teaching of the Vedas, there is no touch of sectarianism. It is of all times and all ages.', author: 'Swami Vivekananda', era: 'Modern' },
    { text: 'A person should not be too honest. Straight trees are cut first and honest people are taken advantage of first.', author: 'Acharya Chanakya', era: 'Ancient' },
    { text: 'Non-violence is the greatest force at the disposal of mankind. It is mightier than the mightiest weapon of destruction.', author: 'Mahatma Gandhi', era: 'Modern' },
    { text: 'Educate, Agitate, Organise. Cultivation of mind should be the ultimate aim of human existence.', author: 'Dr. B.R. Ambedkar', era: 'Modern' },
    { text: 'All men are my children. What I desire for my own children, that they should be provided with welfare and happiness in this world and the next, that I desire for all men.', author: 'Emperor Ashoka the Great', era: 'Ancient' },
]

const didYouKnow = [
    { fact: 'India invented the decimal number system, zero, and foundational trigonometry (Aryabhata, 5th c. CE).', tag: 'Science & Math' },
    { fact: 'The Chola Empire possessed a massive blue-water navy that projected power across Southeast Asia, Sri Lanka, and the Maldives in the 11th century.', tag: 'Military History' },
    { fact: 'India\'s share of world GDP in 1 CE was approximately 32% — the largest single economy in antiquity (Angus Maddison historical data).', tag: 'Economy' },
    { fact: 'Nalanda University (Bihar, 450 CE) housed 10,000 students, 2,000 teachers, and a nine-story library called Ratnasagara.', tag: 'Education' },
    { fact: 'Sushruta (6th c. BCE) is acknowledged as the father of surgery, detailing rhinoplasty, cataract extraction, and over 120 surgical instruments.', tag: 'Medicine' },
    { fact: 'The Kailasa Temple at Ellora (Cave 16) was carved vertically top-down from a single volcanic basalt cliff, excavating 200,000 tonnes of rock without error.', tag: 'Architecture' },
    { fact: 'Dhaka Muslin was so gossamer-fine that a 6-meter sari could effortlessly pass through a signet ring, prized in imperial Rome and Europe.', tag: 'Textiles' },
    { fact: 'The Indian Constitution is the longest written sovereign constitution in history, handwritten in calligraphic English and Hindi with paintings by Nandalal Bose.', tag: 'Polity' },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
}

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

function AnimatedCounter({ target, duration = 1800 }) {
    const [count, setCount] = useState(0)
    const numericTarget = parseInt(target.replace(/[^0-9]/g, ''))

    useEffect(() => {
        let start = 0
        const increment = numericTarget / (duration / 16)
        const timer = setInterval(() => {
            start += increment
            if (start >= numericTarget) {
                setCount(numericTarget)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)
        return () => clearInterval(timer)
    }, [numericTarget, duration])

    return <span>{count}{target.includes('+') ? '+' : ''}</span>
}

// Particle Constellation Background Canvas
function ParticleCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let animationFrameId
        let width = (canvas.width = window.innerWidth)
        let height = (canvas.height = window.innerHeight)

        const handleResize = () => {
            if (!canvas) return
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }
        window.addEventListener('resize', handleResize)

        const particles = Array.from({ length: 45 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 2 + 1,
            alpha: Math.random() * 0.5 + 0.2
        }))

        const render = () => {
            ctx.clearRect(0, 0, width, height)

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i]
                p.x += p.vx
                p.y += p.vy
                if (p.x < 0) p.x = width
                if (p.x > width) p.x = 0
                if (p.y < 0) p.y = height
                if (p.y > height) p.y = 0

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(251, 191, 36, ${p.alpha})`
                ctx.fill()

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
                    if (dist < 130) {
                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.strokeStyle = `rgba(251, 191, 36, ${0.18 * (1 - dist / 130)})`
                        ctx.lineWidth = 0.8
                        ctx.stroke()
                    }
                }
            }
            animationFrameId = requestAnimationFrame(render)
        }
        render()

        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1
            }}
        />
    )
}

export default function LandingPage() {
    const navigate = useNavigate()
    const [currentQuote, setCurrentQuote] = useState(0)
    const [currentFact, setCurrentFact] = useState(0)
    const [previewYear, setPreviewYear] = useState(-300)

    const previewEmpires = getEmpiresAtYear(previewYear)
    const previewEra = previewEmpires[0] || { name: 'Maurya Empire', color: '#8B5CF6', capital: 'Pataliputra' }

    useEffect(() => {
        const quoteTimer = setInterval(() => {
            setCurrentQuote(prev => (prev + 1) % historicalQuotes.length)
        }, 6000)
        const factTimer = setInterval(() => {
            setCurrentFact(prev => (prev + 1) % didYouKnow.length)
        }, 5000)
        return () => {
            clearInterval(quoteTimer)
            clearInterval(factTimer)
        }
    }, [])

    return (
        <div className="landing-page">
            {/* ── EPIC HERO SECTION WITH PARTICLE ANIMATION ────────────── */}
            <section className="hero-section">
                <div className="hero-bg-art" style={{ backgroundImage: `url('/images/hero_bharat.jpg')` }} />
                <ParticleCanvas />
                <div className="hero-overlay-gradient" />
                <div className="hero-ambient-glow glow-1" />
                <div className="hero-ambient-glow glow-2" />

                <div className="hero-content-wrapper" style={{ zIndex: 2 }}>
                    <motion.div
                        className="hero-badge-pill"
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <span className="hero-pill-dot" />
                        <span>Interactive Indian Civilization & UPSC Atlas</span>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        5000 Years of<br />
                        <span className="hero-title-gold">Indian Civilization</span>
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Witness the monumental rise and fall of empires that shaped the Indian subcontinent.
                        Explore interactive geospatial maps with exact boundaries, ancient cities, maritime sea routes,
                        chronological timelines, and UPSC geographic systems.
                    </motion.p>

                    <motion.div
                        className="hero-cta-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <button className="btn btn-primary" onClick={() => navigate('/maps/empires')}>
                            <span className="btn-icon">🗺️</span> Explore Empire Maps
                        </button>
                        <button className="btn btn-secondary" onClick={() => navigate('/geography')}>
                            <span className="btn-icon">🌍</span> Geography Atlas
                        </button>
                        <button className="btn btn-glass" onClick={() => navigate('/history')}>
                            <span className="btn-icon">📜</span> History Timeline
                        </button>
                        <button className="btn btn-glass" onClick={() => navigate('/polity')}>
                            <span className="btn-icon">⚖️</span> Polity
                        </button>
                    </motion.div>

                    {/* ── HERO INTERACTIVE "CIVILIZATION PULSE" MINI SCRUBBER ── */}
                    <motion.div
                        className="hero-civ-pulse glass-panel"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                    >
                        <div className="hero-civ-pulse-header">
                            <span className="hero-civ-pulse-tag">⚡ Quick Civilization Scrubber</span>
                            <span className="hero-civ-pulse-year" style={{ color: previewEra.color }}>
                                {formatYear(previewYear)} — {previewEra.name}
                            </span>
                        </div>
                        <div className="hero-civ-pulse-slider-wrap">
                            <input
                                type="range"
                                min={-2500}
                                max={2026}
                                value={previewYear}
                                onChange={(e) => setPreviewYear(parseInt(e.target.value))}
                                className="hero-pulse-slider"
                            />
                            <div className="hero-pulse-chips">
                                {[-2500, -300, 350, 1000, 1600, 1947].map(yr => (
                                    <button
                                        key={yr}
                                        className={`hero-pulse-chip ${previewYear === yr ? 'active' : ''}`}
                                        onClick={() => setPreviewYear(yr)}
                                    >
                                        {formatYear(yr)}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <p className="hero-civ-pulse-desc">
                            {previewEmpires.length > 0 ? (
                                <span>Active State: <strong>{previewEmpires.map(e => e.name).join(', ')}</strong> | Capital: {previewEmpires[0].capital}</span>
                            ) : (
                                <span>Transition / Regional Era</span>
                            )}
                        </p>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    className="hero-scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <span className="hero-scroll-text">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="hero-scroll-arrow"
                    >
                        ↓
                    </motion.div>
                </motion.div>
            </section>

            {/* ── STATS COUNTER STRIP ───────────────────────────────────── */}
            <motion.section
                className="stats-strip"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="stats-container">
                    {heroStats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="stat-card"
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <div className="stat-icon-wrap">{stat.icon}</div>
                            <div className="stat-info">
                                <span className="stat-value">
                                    <AnimatedCounter target={stat.value} duration={1600 + i * 250} />
                                </span>
                                <span className="stat-label">{stat.label}</span>
                                <span className="stat-sub">{stat.sub}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ── VISUAL EPOCHS OF BHARAT ──────────────────────────────── */}
            <section className="epochs-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Grand Epochs</span>
                    <h2 className="section-title">The Three Great Ages of Bharat</h2>
                    <p className="section-subtitle">Journey through millennia of transformative history across three major eras</p>
                </div>

                <div className="epochs-grid">
                    {grandEras.map((era, i) => (
                        <motion.div
                            key={era.id}
                            className="epoch-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -8 }}
                            onClick={() => navigate(era.link)}
                        >
                            <div className="epoch-card-image-wrap">
                                <img src={era.image} alt={era.title} className="epoch-card-img" />
                                <div className="epoch-card-overlay" />
                                <span className="epoch-card-span" style={{ background: era.color }}>{era.span}</span>
                            </div>
                            <div className="epoch-card-body">
                                <h3 className="epoch-card-title" style={{ color: era.color }}>{era.title}</h3>
                                <p className="epoch-card-desc">{era.desc}</p>
                                <div className="epoch-card-tags">
                                    {era.empires.map(emp => (
                                        <span key={emp} className="epoch-tag">{emp}</span>
                                    ))}
                                </div>
                                <span className="epoch-card-cta" style={{ color: era.color }}>
                                    Explore {era.title} →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CORE EXPLORATION MODULES ─────────────────────────────── */}
            <section className="features-section">
                <div className="section-header-center">
                    <span className="section-eyebrow">Comprehensive Platform</span>
                    <h2 className="section-title">Explore Knowledge Domains</h2>
                    <p className="section-subtitle">UPSC-level conceptual depth across History, Geography, Polity, Economics & Culture</p>
                </div>

                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {features.map((feature) => (
                        <motion.div
                            key={feature.title}
                            className="feature-card"
                            variants={itemVariants}
                            onClick={() => navigate(feature.link)}
                            whileHover={{
                                y: -6,
                                borderColor: feature.color,
                                boxShadow: `0 12px 36px ${feature.glow}`
                            }}
                        >
                            <div className="feature-card-cover">
                                <img src={feature.image} alt={feature.title} className="feature-cover-img" />
                                <div className="feature-cover-tint" style={{ background: `linear-gradient(180deg, rgba(13,17,23,0.3) 0%, rgba(13,17,23,0.95) 100%)` }} />
                                <div className="feature-card-badge-row">
                                    <div className="feature-card-icon" style={{ background: `${feature.color}25`, color: feature.color, borderColor: `${feature.color}50` }}>
                                        {feature.icon}
                                    </div>
                                    <span className="feature-card-stat" style={{ color: feature.color, borderColor: `${feature.color}40` }}>
                                        {feature.stats}
                                    </span>
                                </div>
                            </div>
                            <div className="feature-card-body">
                                <span className="feature-card-tagline" style={{ color: feature.color }}>{feature.tagline}</span>
                                <h3 className="feature-card-title">{feature.title}</h3>
                                <p className="feature-card-desc">{feature.description}</p>
                                <span className="feature-card-cta" style={{ color: feature.color }}>
                                    Launch Module →
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── DID YOU KNOW ─────────────────────────────────────────── */}
            <section className="dyk-section">
                <div className="dyk-container">
                    <div className="dyk-header">
                        <span className="dyk-icon">💡</span>
                        <div>
                            <span className="section-eyebrow">Fascinating Insights</span>
                            <h2 className="dyk-title">Did You Know?</h2>
                        </div>
                    </div>

                    <div className="dyk-card-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentFact}
                                className="dyk-card"
                                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                                transition={{ duration: 0.4 }}
                            >
                                <span className="dyk-tag">{didYouKnow[currentFact].tag}</span>
                                <p className="dyk-text">"{didYouKnow[currentFact].fact}"</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="dyk-dots">
                        {didYouKnow.map((_, i) => (
                            <button
                                key={i}
                                className={`dyk-dot ${i === currentFact ? 'active' : ''}`}
                                onClick={() => setCurrentFact(i)}
                                aria-label={`Go to fact ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HISTORICAL QUOTES ────────────────────────────────────── */}
            <section className="quotes-section">
                <div className="quotes-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuote}
                            className="quote-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="quote-mark">“</div>
                            <p className="quote-text">{historicalQuotes[currentQuote].text}</p>
                            <div className="quote-author">
                                <span className="quote-name">{historicalQuotes[currentQuote].author}</span>
                                <span className="quote-era">{historicalQuotes[currentQuote].era} Era of India</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ── FOOTER ──────────────────────────────────────────────── */}
            <footer className="landing-footer">
                <div className="footer-top">
                    <div className="footer-brand">
                        <span className="footer-logo">🏛️</span>
                        <div>
                            <span className="footer-name">Bharat Through Ages</span>
                            <p className="footer-sub">Interactive Historical & Geographical Knowledge Engine</p>
                        </div>
                    </div>
                    <div className="footer-nav-groups">
                        <div className="footer-group">
                            <span className="footer-group-title">History & Maps</span>
                            <button onClick={() => navigate('/history')}>Chronological History</button>
                            <button onClick={() => navigate('/maps/empires')}>Interactive Maps</button>
                            <button onClick={() => navigate('/dynasty/maurya')}>Mauryan Empire</button>
                            <button onClick={() => navigate('/dynasty/gupta')}>Gupta Golden Age</button>
                        </div>
                        <div className="footer-group">
                            <span className="footer-group-title">Geography</span>
                            <button onClick={() => navigate('/geography')}>Geography Portal</button>
                            <button onClick={() => navigate('/geography/indian-physical')}>Indian Physical</button>
                            <button onClick={() => navigate('/geography/indian-rivers')}>River Systems</button>
                            <button onClick={() => navigate('/geography/indian-climate')}>Monsoon Climate</button>
                        </div>
                        <div className="footer-group">
                            <span className="footer-group-title">Civil Services</span>
                            <button onClick={() => navigate('/polity')}>Indian Polity</button>
                            <button onClick={() => navigate('/economy')}>Economic History</button>
                            <button onClick={() => navigate('/culture')}>Art & Heritage</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Designed with meticulous attention to historical accuracy & modern visual aesthetics.</p>
                    <p className="footer-copyright">© 2026 Bharat Through Ages. Open Educational Platform.</p>
                </div>
            </footer>
        </div>
    )
}
