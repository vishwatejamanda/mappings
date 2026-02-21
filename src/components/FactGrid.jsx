import { motion } from 'framer-motion'

function FactGrid({ items = [], columns = 4 }) {
    return (
        <div className="fact-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {items.map((item, i) => (
                <motion.div
                    key={i}
                    className="fact-grid-item"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                    whileHover={{ scale: 1.04 }}
                    style={{ borderColor: `${item.color}30` }}
                >
                    <span className="fact-grid-icon" style={{ background: `${item.color}18`, color: item.color }}>{item.icon}</span>
                    <div className="fact-grid-content">
                        <span className="fact-grid-value" style={{ color: item.color }}>{item.value}</span>
                        <span className="fact-grid-label">{item.label}</span>
                        {item.sub && <span className="fact-grid-sub">{item.sub}</span>}
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

function StatBar({ label, value, max, unit, color, icon }) {
    const pct = Math.min(100, (value / max) * 100)
    return (
        <div className="stat-bar-item">
            <div className="stat-bar-header">
                <span className="stat-bar-icon">{icon}</span>
                <span className="stat-bar-label">{label}</span>
                <span className="stat-bar-value" style={{ color }}>{value}{unit}</span>
            </div>
            <div className="stat-bar-track">
                <motion.div
                    className="stat-bar-fill"
                    style={{ background: `linear-gradient(90deg, ${color}90, ${color})` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                />
            </div>
        </div>
    )
}

export { FactGrid, StatBar }
export default FactGrid
