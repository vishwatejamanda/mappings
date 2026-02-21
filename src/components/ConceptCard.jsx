import { motion } from 'framer-motion'

function ConceptCard({ icon, title, subtitle, color, facts = [], upscPoints = [], delay = 0, className = '' }) {
    return (
        <motion.div
            className={`concept-card ${className}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4, borderColor: color }}
            style={{ borderTop: `3px solid ${color}` }}
        >
            <div className="concept-card-header">
                <span className="concept-card-icon" style={{ background: `${color}18`, color }}>{icon}</span>
                <div>
                    <h3 className="concept-card-title">{title}</h3>
                    {subtitle && <p className="concept-card-subtitle">{subtitle}</p>}
                </div>
            </div>

            {facts.length > 0 && (
                <ul className="concept-card-facts">
                    {facts.map((fact, i) => (
                        <li key={i} style={{ '--dot-color': color }}>
                            <span className="concept-fact-dot" style={{ background: color }} />
                            {fact}
                        </li>
                    ))}
                </ul>
            )}

            {upscPoints.length > 0 && (
                <div className="concept-upsc-box">
                    <span className="concept-upsc-label">📌 UPSC</span>
                    {upscPoints.map((pt, i) => (
                        <p key={i} className="concept-upsc-point">{pt}</p>
                    ))}
                </div>
            )}
        </motion.div>
    )
}

export default ConceptCard
