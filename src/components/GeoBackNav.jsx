import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function GeoBackNav({ current, color = '#3B82F6' }) {
    const navigate = useNavigate()
    return (
        <motion.div className="geo-back-nav"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <button className="geo-back-btn" onClick={() => navigate('/geography')}
                style={{ color }}>
                ← Geography Hub
            </button>
            <span className="geo-back-sep">›</span>
            <span className="geo-back-current" style={{ color }}>{current}</span>
        </motion.div>
    )
}
