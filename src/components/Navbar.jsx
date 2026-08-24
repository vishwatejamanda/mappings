import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const navItems = [
    { to: '/', label: 'Home', icon: '🏠', exact: true },
    { to: '/history', label: 'History', icon: '📜' },
    { to: '/empires', label: 'Empires', icon: '👑' },
    { to: '/maps/empires', label: 'Empire Maps', icon: '🗺️' },
    { to: '/geography', label: 'Geography', icon: '🌍' },
    { to: '/polity', label: 'Polity', icon: '⚖️' },
    { to: '/economy', label: 'Economy', icon: '📊' },
    { to: '/culture', label: 'Art & Culture', icon: '🎭' },
]

function Navbar() {
    const location = useLocation()
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <>
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

                {/* Desktop Nav */}
                <ul className="navbar-nav">
                    {navItems.map(item => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    `navbar-nav-link ${(item.exact ? isActive && location.pathname === '/' : isActive) ? 'active' : ''}`
                                }
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <button className="navbar-hamburger" onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu">
                    <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
                    <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
                    <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div className="mobile-menu-overlay"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="mobile-menu"
                            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25 }}>
                            <button className="mobile-menu-close" onClick={() => setMobileOpen(false)}>✕</button>
                            <div className="mobile-menu-brand">
                                <span>🏛️</span> Bharat Through Ages
                            </div>
                            <ul className="mobile-menu-nav">
                                {navItems.map(item => (
                                    <li key={item.to}>
                                        <NavLink to={item.to}
                                            className={({ isActive }) =>
                                                `mobile-nav-link ${(item.exact ? isActive && location.pathname === '/' : isActive) ? 'active' : ''}`
                                            }
                                            onClick={() => setMobileOpen(false)}>
                                            <span className="mobile-nav-icon">{item.icon}</span>
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
