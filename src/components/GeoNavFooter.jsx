import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const ALL_PAGES = [
    { title: 'Physical Features', link: '/geography/indian-physical', icon: '🏔️' },
    { title: 'Rivers & Drainage', link: '/geography/indian-rivers', icon: '🌊' },
    { title: 'Climate & Monsoon', link: '/geography/indian-climate', icon: '🌧️' },
    { title: 'Soil Types', link: '/geography/indian-soils', icon: '🌿' },
    { title: 'Natural Vegetation', link: '/geography/indian-vegetation', icon: '🌴' },
    { title: 'Geomorphology', link: '/geography/world-geomorphology', icon: '🌋' },
    { title: 'Climatology', link: '/geography/world-climatology', icon: '💨' },
    { title: 'Oceanography', link: '/geography/world-oceanography', icon: '🌊' },
    { title: 'World Biomes', link: '/geography/world-biomes', icon: '🌍' },
]

export default function GeoNavFooter({ currentPath }) {
    const navigate = useNavigate()
    const idx = ALL_PAGES.findIndex(p => p.link === currentPath)
    const prev = idx > 0 ? ALL_PAGES[idx - 1] : null
    const next = idx < ALL_PAGES.length - 1 ? ALL_PAGES[idx + 1] : null

    return (
        <div className="geo-nav-footer">
            {prev ? (
                <motion.button className="geo-nav-footer-btn" onClick={() => { navigate(prev.link); window.scrollTo(0, 0) }}
                    whileHover={{ x: -4 }}>
                    <span className="geo-nav-footer-arrow">←</span>
                    <div>
                        <div className="geo-nav-footer-btn-label">Previous</div>
                        <div className="geo-nav-footer-btn-title">{prev.icon} {prev.title}</div>
                    </div>
                </motion.button>
            ) : <div />}
            {next ? (
                <motion.button className="geo-nav-footer-btn" onClick={() => { navigate(next.link); window.scrollTo(0, 0) }}
                    whileHover={{ x: 4 }} style={{ textAlign: 'right' }}>
                    <div>
                        <div className="geo-nav-footer-btn-label">Next</div>
                        <div className="geo-nav-footer-btn-title">{next.icon} {next.title}</div>
                    </div>
                    <span className="geo-nav-footer-arrow">→</span>
                </motion.button>
            ) : <div />}
        </div>
    )
}
