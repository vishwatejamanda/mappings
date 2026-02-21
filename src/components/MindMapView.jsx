import { motion } from 'framer-motion'

function MindMapView({ data, width = 680, height = 520 }) {
    const cx = width / 2
    const cy = height / 2
    const r1 = 180
    const r2 = 95

    if (!data || !data.children) return null

    const branches = data.children
    const n = branches.length

    return (
        <div className="mindmap-wrapper">
            <svg viewBox={`0 0 ${width} ${height}`} className="mindmap-svg" role="img" aria-label={`Mindmap: ${data.label}`}>
                <defs>
                    {branches.map((b, i) => (
                        <radialGradient key={i} id={`grad-${i}`} cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor={b.color} stopOpacity="0.25" />
                            <stop offset="100%" stopColor={b.color} stopOpacity="0.05" />
                        </radialGradient>
                    ))}
                    <radialGradient id="grad-center" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={data.color} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={data.color} stopOpacity="0.05" />
                    </radialGradient>
                </defs>

                {/* Branch lines + nodes */}
                {branches.map((branch, i) => {
                    const angle = (i / n) * 2 * Math.PI - Math.PI / 2
                    const bx = cx + r1 * Math.cos(angle)
                    const by = cy + r1 * Math.sin(angle)

                    return (
                        <g key={i}>
                            {/* Line: center → branch */}
                            <line
                                x1={cx} y1={cy} x2={bx} y2={by}
                                stroke={branch.color} strokeWidth="1.8"
                                strokeDasharray="6 3" opacity="0.55"
                            />

                            {/* Branch node circle */}
                            <circle cx={bx} cy={by} r="52" fill={`url(#grad-${i})`} stroke={branch.color} strokeWidth="1.5" />

                            {/* Branch icon */}
                            <text x={bx} y={by - 10} textAnchor="middle" fontSize="18" fontFamily="serif">{branch.icon}</text>
                            {/* Branch label */}
                            <text x={bx} y={by + 8} textAnchor="middle" fontSize="10.5" fill="white" fontWeight="600" fontFamily="Outfit, sans-serif">{branch.label}</text>

                            {/* Item sub-nodes */}
                            {branch.items?.slice(0, 3).map((item, j) => {
                                const spread = 0.38
                                const itemAngle = angle + (j - 1) * spread
                                const ix = cx + (r1 + r2) * Math.cos(itemAngle)
                                const iy = cy + (r1 + r2) * Math.sin(itemAngle)
                                return (
                                    <g key={j}>
                                        <line x1={bx} y1={by} x2={ix} y2={iy} stroke={branch.color} strokeWidth="1" opacity="0.3" />
                                        <circle cx={ix} cy={iy} r="26" fill={`${branch.color}10`} stroke={`${branch.color}40`} strokeWidth="1" />
                                        <text x={ix} y={iy} textAnchor="middle" dy="3.5" fontSize="8" fill="#a0a0c0" fontFamily="Inter, sans-serif">{item}</text>
                                    </g>
                                )
                            })}
                        </g>
                    )
                })}

                {/* Center rings */}
                <circle cx={cx} cy={cy} r="68" fill="url(#grad-center)" stroke={data.color} strokeWidth="2.5" />
                <circle cx={cx} cy={cy} r="56" fill={`${data.color}10`} stroke={`${data.color}40`} strokeWidth="1" strokeDasharray="4 2" />

                {/* Center label */}
                <text x={cx} y={cy - 12} textAnchor="middle" fontSize="24" fontFamily="serif">{data.icon}</text>
                <text x={cx} y={cy + 10} textAnchor="middle" fontSize="12" fill="white" fontWeight="700" fontFamily="Cinzel, serif">{data.label}</text>
            </svg>
        </div>
    )
}

export default MindMapView
