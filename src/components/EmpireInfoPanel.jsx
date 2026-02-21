import { motion } from 'framer-motion'
import { formatYear, ERAS } from '../data/empires'

function EmpireInfoPanel({ empire, onClose }) {
    const era = ERAS.find(e => e.id === empire.era)

    return (
        <div className="empire-info-panel">
            <motion.div
                className="empire-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                {/* Header */}
                <div
                    className="empire-card-header"
                    style={{
                        borderBottom: `1px solid ${empire.color}20`
                    }}
                >
                    <div
                        className="empire-card-header"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `linear-gradient(135deg, ${empire.gradient[0]}15, ${empire.gradient[1]}08)`,
                            padding: 0,
                            borderBottom: 'none'
                        }}
                    />

                    {/* Close button */}
                    <motion.button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            width: 28,
                            height: 28,
                            borderRadius: '50%',
                            border: '1px solid var(--border-subtle)',
                            background: 'var(--bg-glass)',
                            color: 'var(--text-secondary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '14px',
                            zIndex: 2
                        }}
                        whileHover={{ background: 'var(--bg-glass-hover)', color: 'var(--text-primary)' }}
                    >
                        ✕
                    </motion.button>

                    <span
                        className="empire-card-era-badge"
                        style={{
                            backgroundColor: `${era?.color || empire.color}20`,
                            color: era?.color || empire.color
                        }}
                    >
                        {era?.name || empire.era}
                    </span>

                    <h2 className="empire-card-name">{empire.name}</h2>

                    <div className="empire-card-period">
                        📅 {formatYear(empire.startYear)} — {formatYear(empire.endYear)}
                        <span style={{ marginLeft: 8, opacity: 0.6 }}>
                            ({empire.endYear - empire.startYear} years)
                        </span>
                    </div>

                    <div className="empire-card-capital">
                        <span>📍</span>
                        <span>Capital: {empire.capital}</span>
                    </div>
                </div>

                {/* Body */}
                <div className="empire-card-body" style={{ paddingTop: 16 }}>
                    <motion.p
                        className="empire-card-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        {empire.description}
                    </motion.p>

                    <div className="empire-card-facts-title">
                        <span>⚡</span>
                        Key Facts
                    </div>

                    <ul className="empire-card-facts">
                        {empire.keyFacts.map((fact, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.15 + index * 0.05 }}
                                style={{ color: empire.color }}
                            >
                                <span style={{ color: 'var(--text-secondary)' }}>{fact}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    )
}

export default EmpireInfoPanel
