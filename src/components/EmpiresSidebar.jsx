import { motion } from 'framer-motion'
import { formatYear } from '../data/empires'

function EmpiresSidebar({ empires, selectedEmpire, onSelectEmpire, currentYear }) {
    return (
        <div className="empires-sidebar">
            <div className="empires-sidebar-header">
                Active Empires ({empires.length})
            </div>
            <div className="empires-list">
                {empires.map((empire, index) => (
                    <motion.div
                        key={empire.id}
                        className={`empire-list-item ${selectedEmpire?.id === empire.id ? 'selected' : ''}`}
                        onClick={() => onSelectEmpire(empire)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ x: 4 }}
                    >
                        <div
                            className="empire-list-dot"
                            style={{ backgroundColor: empire.color, color: empire.color }}
                        />
                        <div className="empire-list-info">
                            <div className="empire-list-name">{empire.name}</div>
                            <div className="empire-list-years">
                                {formatYear(empire.startYear)} — {formatYear(empire.endYear)}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default EmpiresSidebar
