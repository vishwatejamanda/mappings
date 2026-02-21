import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navbar() {
    const location = useLocation()

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <NavLink to="/" className="navbar-brand">
                <div className="navbar-brand-icon">🏛️</div>
                <span className="navbar-brand-text">Bharat Through Ages</span>
            </NavLink>

            <ul className="navbar-nav">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => `navbar-nav-link ${isActive && location.pathname === '/' ? 'active' : ''}`}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/history"
                        className={({ isActive }) => `navbar-nav-link ${isActive ? 'active' : ''}`}
                    >
                        📜 History
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/maps/empires"
                        className={({ isActive }) => `navbar-nav-link ${isActive ? 'active' : ''}`}
                    >
                        🗺️ Empire Maps
                    </NavLink>
                </li>
                <li>
                    <span className="navbar-nav-link" style={{ opacity: 0.4, cursor: 'not-allowed' }}>
                        📊 Economy
                    </span>
                </li>
                <li>
                    <span className="navbar-nav-link" style={{ opacity: 0.4, cursor: 'not-allowed' }}>
                        ⚖️ Polity
                    </span>
                </li>
                <li>
                    <NavLink
                        to="/geography"
                        className={({ isActive }) => `navbar-nav-link ${isActive ? 'active' : ''}`}
                    >
                        🌍 Geography
                    </NavLink>
                </li>
            </ul>
        </motion.nav>
    )
}

export default Navbar
