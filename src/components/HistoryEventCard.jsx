import { motion } from 'framer-motion'
import { CATEGORY_CONFIG } from '../data/history'

function HistoryEventCard({ event, color, isSelected, onSelect, index }) {
    const cat = CATEGORY_CONFIG[event.category]

    return (
        <motion.div
            className={`history-event-card ${isSelected ? 'selected' : ''}`}
            onClick={onSelect}
            whileHover={{ y: -3, boxShadow: `0 8px 30px ${color}18` }}
            style={isSelected ? { borderColor: color, boxShadow: `0 0 20px ${color}20` } : {}}
        >
            <div className="history-event-card-top">
                <span className="history-event-card-emoji">{event.image}</span>
                <span className="history-event-card-cat" style={{ background: `${cat?.color}15`, color: cat?.color }}>
                    {cat?.label}
                </span>
            </div>

            <h3 className="history-event-card-title">{event.title}</h3>
            <p className="history-event-card-loc">📍 {event.location}</p>
            <p className="history-event-card-desc">{event.description.substring(0, 140)}...</p>

            {event.keyFigures.length > 0 && (
                <div className="history-event-card-figures">
                    {event.keyFigures.slice(0, 3).map(f => (
                        <span key={f} className="history-event-card-figure">{f}</span>
                    ))}
                </div>
            )}

            <div className="history-event-card-footer">
                <span className="history-event-card-cta" style={{ color }}>View details →</span>
            </div>
        </motion.div>
    )
}

export default HistoryEventCard
