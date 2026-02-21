import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function GeoInfoPanel({ title, icon, color, sections = [] }) {
    const [open, setOpen] = useState(0)

    return (
        <div className="geo-info-panel">
            {title && (
                <div className="geo-info-panel-header">
                    <span className="geo-info-panel-icon">{icon}</span>
                    <h3 className="geo-info-panel-title">{title}</h3>
                </div>
            )}
            <div className="geo-info-accordion">
                {sections.map((sec, i) => (
                    <div key={i} className={`geo-accordion-item ${open === i ? 'open' : ''}`}>
                        <button
                            className="geo-accordion-trigger"
                            onClick={() => setOpen(open === i ? -1 : i)}
                            style={open === i ? { color, borderLeftColor: color } : {}}
                        >
                            <span>{sec.icon} {sec.label}</span>
                            <span className="geo-accordion-arrow" style={{ transform: open === i ? 'rotate(180deg)' : 'none' }}>▾</span>
                        </button>
                        <AnimatePresence mode="wait">
                            {open === i && (
                                <motion.div
                                    className="geo-accordion-body"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                >
                                    <div className="geo-accordion-content">
                                        {sec.content}
                                        {sec.points && (
                                            <ul className="geo-panel-points">
                                                {sec.points.map((pt, j) => (
                                                    <li key={j} style={{ '--pt-color': color }}>
                                                        <span style={{ color }}>◆</span> {pt}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {sec.upsc && (
                                            <div className="geo-upsc-callout" style={{ borderColor: `${color}40`, background: `${color}0c` }}>
                                                <span style={{ color }}>📌 UPSC Key Point</span>
                                                <p>{sec.upsc}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GeoInfoPanel
