import { useState, useMemo } from 'react'
import { MapContainer, TileLayer, Polyline, Polygon, CircleMarker, Tooltip, Popup, useMap } from 'react-leaflet'

// Data for Geography Map layers
const GEO_PEAKS = [
    { name: 'K2 (Godwin-Austen)', height: '8,611 m', range: 'Karakoram', coords: [35.88, 76.51], icon: '🏔️', color: '#8B5CF6', note: '2nd highest peak on Earth. Located in Gilgit-Baltistan.' },
    { name: 'Kanchenjunga', height: '8,586 m', range: 'Himadri (Greater Himalayas)', coords: [27.70, 88.14], icon: '🏔️', color: '#8B5CF6', note: 'Highest peak within Indian sovereign territory (Sikkim border). UNESCO Mixed World Heritage Site.' },
    { name: 'Nanda Devi', height: '7,816 m', range: 'Garhwal Himalayas (Uttarakhand)', coords: [30.37, 79.97], icon: '🏔️', color: '#8B5CF6', note: '2nd highest peak entirely inside India. UNESCO Biosphere Reserve.' },
    { name: 'Kamet', height: '7,756 m', range: 'Zaskar Range (Uttarakhand)', coords: [30.92, 79.57], icon: '⛰️', color: '#8B5CF6', note: 'Second highest peak in Garhwal Himalayas.' },
    { name: 'Guru Shikhar', height: '1,722 m', range: 'Aravalli Range (Rajasthan)', coords: [24.65, 72.78], icon: '⛰️', color: '#F59E0B', note: 'Highest point of the Aravalli Range — world’s oldest fold mountain system.' },
    { name: 'Dhupgarh', height: '1,350 m', range: 'Satpura Range (Pachmarhi, MP)', coords: [22.45, 78.37], icon: '⛰️', color: '#EF4444', note: 'Highest point of the Satpura Range and Madhya Pradesh.' },
    { name: 'Anamudi', height: '2,695 m', range: 'Anamalai Hills / Western Ghats', coords: [10.17, 77.06], icon: '🌄', color: '#10B981', note: '"Everest of South India" — Highest peak in Peninsular India (Kerala).' },
    { name: 'Doddabetta', height: '2,637 m', range: 'Nilgiri Hills (Tamil Nadu)', coords: [11.40, 76.73], icon: '🌄', color: '#10B981', note: 'Highest peak in Nilgiri Mountains at the junction of Western and Eastern Ghats.' },
    { name: 'Mahendragiri', height: '1,501 m', range: 'Eastern Ghats (Gajapati, Odisha)', coords: [18.96, 84.36], icon: '⛰️', color: '#06B6D4', note: 'Prominent peak of the Eastern Ghats.' },
    { name: 'Arma Konda', height: '1,680 m', range: 'Eastern Ghats (Andhra Pradesh)', coords: [18.23, 82.72], icon: '⛰️', color: '#06B6D4', note: 'Highest peak in the Eastern Ghats.' },
    { name: 'Saddle Peak', height: '732 m', range: 'North Andaman Island', coords: [13.16, 93.00], icon: '🏝️', color: '#38BDF8', note: 'Highest point in the Andaman and Nicobar archipelago.' }
];

const GEO_RIVERS = [
    {
        name: 'Ganga (2,525 km)',
        origin: 'Gangotri Glacier (Gaumukh, Bhagirathi)',
        drains: 'Bay of Bengal (Sundarbans Delta)',
        color: '#3B82F6',
        width: 4,
        tributaries: 'Yamuna, Son, Ghaghara, Gandak, Kosi, Ramganga',
        dams: 'Tehri Dam, Farakka Barrage',
        coords: [
            [30.92, 78.93], [30.15, 78.60], [29.95, 78.16], [29.17, 78.02],
            [27.88, 79.80], [26.84, 80.94], [25.43, 81.84], [25.31, 82.97],
            [25.61, 85.14], [25.28, 87.00], [24.80, 87.94], [22.57, 88.36], [21.80, 88.90]
        ]
    },
    {
        name: 'Yamuna (1,376 km)',
        origin: 'Yamunotri Glacier (Bandarpunch Peak)',
        drains: 'Ganga at Triveni Sangam (Prayagraj)',
        color: '#60A5FA',
        width: 3.5,
        tributaries: 'Chambal, Sindh, Betwa, Ken, Tons, Hindon',
        dams: 'Lakhwar Dam, Hathnikund Barrage',
        coords: [
            [31.01, 78.45], [30.37, 77.58], [29.39, 76.96], [28.61, 77.21],
            [27.49, 77.67], [27.18, 78.02], [26.78, 79.03], [25.43, 81.84]
        ]
    },
    {
        name: 'Indus (3,180 km total, 1,114 km in India)',
        origin: 'Bokhar Chu Glacier near Lake Manasarovar (Tibet)',
        drains: 'Arabian Sea (near Karachi)',
        color: '#06B6D4',
        width: 4,
        tributaries: 'Jhelum, Chenab, Ravi, Beas, Sutlej, Shyok, Zanskar',
        dams: 'Tarbela Dam, Nimoo Bazgo',
        coords: [
            [31.25, 81.30], [33.00, 79.00], [34.15, 77.58], [34.55, 76.13],
            [35.30, 75.60], [35.50, 74.30], [34.00, 71.50], [32.00, 70.80],
            [29.00, 70.50], [26.00, 68.00], [24.00, 67.50]
        ]
    },
    {
        name: 'Brahmaputra / Tsangpo (2,900 km)',
        origin: 'Chemayungdung Glacier near Manasarovar (Tibet)',
        drains: 'Bay of Bengal via Meghna (Sundarbans)',
        color: '#10B981',
        width: 4,
        tributaries: 'Dibang, Lohit, Subansiri, Manas, Sankosh, Teesta',
        dams: 'Zangmu Dam, Bogibeel / Dhola-Sadiya bridges',
        coords: [
            [30.50, 82.00], [29.50, 86.00], [29.20, 91.00], [29.80, 94.50],
            [29.50, 95.50], [28.00, 95.30], [27.50, 94.90], [26.17, 91.70],
            [25.50, 89.90], [23.50, 90.50], [22.00, 90.80]
        ]
    },
    {
        name: 'Godavari — "Dakshin Ganga" (1,465 km)',
        origin: 'Trimbakeshwar (Nashik, Western Ghats)',
        drains: 'Bay of Bengal (Andhra Delta)',
        color: '#F59E0B',
        width: 3.5,
        tributaries: 'Pranhita, Indravati, Manjira, Penganga, Wainganga, Sabari',
        dams: 'Polavaram Project, Sriram Sagar, Jayakwadi',
        coords: [
            [19.93, 73.53], [19.87, 75.34], [19.10, 77.30], [18.90, 78.50],
            [18.70, 79.90], [18.00, 81.00], [17.00, 81.78], [16.50, 82.30]
        ]
    },
    {
        name: 'Krishna (1,400 km)',
        origin: 'Mahabaleshwar (Western Ghats, Maharashtra)',
        drains: 'Bay of Bengal (Hamsaladeevi, AP)',
        color: '#EC4899',
        width: 3.5,
        tributaries: 'Tungabhadra, Bhima, Koyna, Ghataprabha, Malaprabha, Musi',
        dams: 'Nagarjuna Sagar Dam, Srisailam Dam, Almatti Dam',
        coords: [
            [17.92, 73.65], [16.85, 74.58], [16.20, 76.50], [16.00, 78.00],
            [16.57, 79.30], [16.50, 80.60], [15.80, 80.90]
        ]
    },
    {
        name: 'Narmada (1,312 km)',
        origin: 'Amarkantak Plateau (Maikal Range, MP)',
        drains: 'Arabian Sea via Gulf of Khambhat (Estuary in Rift Valley)',
        color: '#EF4444',
        width: 3.5,
        tributaries: 'Tawa, Hiran, Sher, Shakkar, Dudhi',
        dams: 'Sardar Sarovar Dam, Indira Sagar, Omkareshwar',
        coords: [
            [22.67, 81.75], [23.16, 79.94], [22.95, 78.00], [22.17, 76.00],
            [21.80, 74.00], [21.65, 73.00], [21.60, 72.60]
        ]
    },
    {
        name: 'Kaveri / Cauvery (805 km)',
        origin: 'Talakaveri (Brahmagiri Range, Western Ghats, Karnataka)',
        drains: 'Bay of Bengal at Poompuhar (Tamil Nadu)',
        color: '#8B5CF6',
        width: 3,
        tributaries: 'Hemavati, Harangi, Kabini, Bhavani, Noyyal, Amaravati',
        dams: 'Krishna Raja Sagara (KRS), Mettur Dam, Grand Anicut (Kallanai)',
        coords: [
            [12.38, 75.49], [12.42, 76.57], [12.18, 77.10], [11.80, 77.80],
            [11.00, 78.50], [10.80, 79.14], [11.14, 79.85]
        ]
    }
];

const GEO_DAMS = [
    { name: 'Tehri Dam', river: 'Bhagirathi', height: '260.5 m (Tallest in India)', state: 'Uttarakhand', coords: [30.37, 78.48], icon: '🏗️' },
    { name: 'Bhakra-Nangal Dam', river: 'Sutlej', height: '226 m', state: 'Himachal / Punjab', coords: [31.41, 76.43], icon: '🏗️' },
    { name: 'Hirakud Dam', river: 'Mahanadi', height: '4.8 km length (Longest earthen dam)', state: 'Odisha', coords: [21.52, 83.87], icon: '🏗️' },
    { name: 'Sardar Sarovar Dam', river: 'Narmada', height: '138.6 m', state: 'Gujarat', coords: [21.83, 73.74], icon: '🏗️' },
    { name: 'Nagarjuna Sagar Dam', river: 'Krishna', height: '124 m (Largest masonry dam)', state: 'Telangana / AP', coords: [16.57, 79.31], icon: '🏗️' },
    { name: 'Idukki Dam', river: 'Periyar', height: '168.9 m (Double curvature arch dam)', state: 'Kerala', coords: [9.85, 76.97], icon: '🏗️' }
];

const GEO_NATIONAL_PARKS = [
    { name: 'Jim Corbett NP', keyAnimal: 'Royal Bengal Tiger (1st NP of India, 1936)', state: 'Uttarakhand', coords: [29.53, 78.77], icon: '🐅', color: '#F97316' },
    { name: 'Kaziranga NP', keyAnimal: 'Great Indian One-horned Rhinoceros (UNESCO)', state: 'Assam', coords: [26.58, 93.17], icon: '🦏', color: '#10B981' },
    { name: 'Gir National Park', keyAnimal: 'Only wild habitat of Asiatic Lion (Panthera leo persica)', state: 'Gujarat', coords: [21.12, 70.82], icon: '🦁', color: '#F59E0B' },
    { name: 'Sundarbans NP', keyAnimal: 'Mangrove Royal Bengal Tiger, Estuarine Crocodile (UNESCO)', state: 'West Bengal', coords: [21.94, 88.89], icon: '🐅', color: '#06B6D4' },
    { name: 'Ranthambore NP', keyAnimal: 'Diurnal Bengal Tigers, Ancient 10th-c Fortress', state: 'Rajasthan', coords: [26.01, 76.50], icon: '🐅', color: '#EF4444' },
    { name: 'Silent Valley NP', keyAnimal: 'Lion-tailed Macaque, Evergreen Rain Forest', state: 'Kerala', coords: [11.13, 76.43], icon: '🐒', color: '#8B5CF6' },
    { name: 'Keoladeo Ghana NP', keyAnimal: 'Siberian Cranes, 370+ migratory bird species (UNESCO)', state: 'Bharatpur, Rajasthan', coords: [27.16, 77.52], icon: '🦅', color: '#38BDF8' },
    { name: 'Hemis National Park', keyAnimal: 'Snow Leopard (Largest NP in India, Ladakh)', state: 'Ladakh', coords: [33.95, 77.40], icon: '🐆', color: '#A855F7' }
];

const GEO_MONSOON_VECTORS = [
    {
        name: 'Southwest Monsoon — Arabian Sea Branch',
        color: '#38BDF8',
        coords: [
            [8.0, 68.0], [10.0, 72.0], [13.0, 74.0], [17.0, 73.0], [21.0, 72.0], [24.0, 74.0]
        ],
        desc: 'Strikes the Western Ghats causing heavy orographic rain (>250-400 cm) on the windward side. Branches over Gujarat, Rajasthan into Aravallis.'
    },
    {
        name: 'Southwest Monsoon — Bay of Bengal Branch',
        color: '#3B82F6',
        coords: [
            [10.0, 86.0], [15.0, 88.0], [20.0, 90.0], [25.0, 91.5], [26.0, 88.0], [27.0, 83.0], [28.5, 77.0]
        ],
        desc: 'Deflected by the Arakan Yoma mountains towards the Gangetic plains, delivering rain to Bengal, Bihar, UP, and causing world-record rainfall at Mawsynram (>11,000 mm).'
    },
    {
        name: 'North-East Retreating Monsoon',
        color: '#F43F5E',
        coords: [
            [22.0, 88.0], [18.0, 84.0], [14.0, 81.0], [11.0, 79.5], [9.0, 78.5]
        ],
        desc: 'Picks up moisture over the Bay of Bengal and causes heavy winter rainfall over Tamil Nadu (Coromandel Coast) during Oct–Dec.'
    }
];

export default function GeoInteractiveMap() {
    const [activeTab, setActiveTab] = useState('rivers')
    const [layers, setLayers] = useState({
        rivers: true,
        peaks: true,
        dams: true,
        parks: true,
        monsoon: true
    })

    const toggleLayer = (k) => setLayers(prev => ({ ...prev, [k]: !prev[k] }))

    return (
        <div className="geo-interactive-map-card glass-panel">
            <div className="geo-map-toolbar">
                <div className="geo-map-title-group">
                    <span className="geo-map-icon">🗺️</span>
                    <div>
                        <h3 className="geo-map-title">Interactive UPSC Geographic Atlas of India</h3>
                        <p className="geo-map-subtitle">Toggle drainage networks, mountain elevations, biosphere reserves & climatology</p>
                    </div>
                </div>

                <div className="geo-map-layer-pills">
                    {[
                        { key: 'rivers', label: 'Rivers & Drainage', icon: '🌊', color: '#3B82F6' },
                        { key: 'peaks', label: 'Mountain Peaks', icon: '🏔️', color: '#8B5CF6' },
                        { key: 'dams', label: 'Major Dams', icon: '🏗️', color: '#F59E0B' },
                        { key: 'parks', label: 'National Parks', icon: '🐅', color: '#10B981' },
                        { key: 'monsoon', label: 'Monsoon Winds', icon: '💨', color: '#38BDF8' },
                    ].map(l => (
                        <button
                            key={l.key}
                            className={`geo-map-layer-pill ${layers[l.key] ? 'active' : ''}`}
                            onClick={() => toggleLayer(l.key)}
                            style={layers[l.key] ? { borderColor: l.color, color: l.color, background: `${l.color}15` } : {}}
                        >
                            <span>{l.icon}</span>
                            <span>{l.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="geo-map-canvas-container">
                <MapContainer
                    center={[22.8, 80.0]}
                    zoom={5}
                    minZoom={4}
                    maxZoom={9}
                    scrollWheelZoom={false}
                    zoomControl={true}
                    attributionControl={false}
                    style={{ width: '100%', height: '100%', borderRadius: '16px' }}
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        maxZoom={19}
                    />

                    {/* RIVERS LAYER */}
                    {layers.rivers && GEO_RIVERS.map(r => (
                        <Polyline
                            key={r.name}
                            positions={r.coords}
                            pathOptions={{ color: r.color, weight: r.width, opacity: 0.85 }}
                        >
                            <Tooltip direction="top" className="custom-map-tooltip">
                                <div style={{ fontFamily: "'Outfit', sans-serif" }}>
                                    <strong style={{ color: r.color }}>{r.name}</strong>
                                    <div style={{ fontSize: '0.72rem' }}>Origin: {r.origin}</div>
                                </div>
                            </Tooltip>
                            <Popup>
                                <div className="map-popup-card">
                                    <h4 style={{ color: r.color }}>🌊 {r.name}</h4>
                                    <p><strong>🏔️ Origin:</strong> {r.origin}</p>
                                    <p><strong>🌊 Drains Into:</strong> {r.drains}</p>
                                    <p><strong>🌿 Major Tributaries:</strong> {r.tributaries}</p>
                                    <p><strong>🏗️ Major Hydro Projects:</strong> {r.dams}</p>
                                </div>
                            </Popup>
                        </Polyline>
                    ))}

                    {/* PEAKS LAYER */}
                    {layers.peaks && GEO_PEAKS.map(p => (
                        <CircleMarker
                            key={p.name}
                            center={p.coords}
                            radius={6}
                            pathOptions={{ color: '#fff', weight: 1.5, fillColor: p.color, fillOpacity: 1 }}
                        >
                            <Tooltip direction="top" offset={[0, -6]} className="custom-map-tooltip">
                                <div style={{ fontFamily: "'Outfit', sans-serif", textAlign: 'center' }}>
                                    <strong style={{ color: p.color }}>{p.icon} {p.name}</strong>
                                    <div style={{ fontSize: '0.75rem', color: '#fbbf24' }}>Elevation: {p.height}</div>
                                </div>
                            </Tooltip>
                            <Popup>
                                <div className="map-popup-card">
                                    <h4 style={{ color: p.color }}>🏔️ {p.name}</h4>
                                    <p><strong>📏 Altitude:</strong> {p.height}</p>
                                    <p><strong>⛰️ Range:</strong> {p.range}</p>
                                    <p><strong>📌 UPSC Note:</strong> {p.note}</p>
                                </div>
                            </Popup>
                        </CircleMarker>
                    ))}

                    {/* DAMS LAYER */}
                    {layers.dams && GEO_DAMS.map(d => (
                        <CircleMarker
                            key={d.name}
                            center={d.coords}
                            radius={5}
                            pathOptions={{ color: '#000', weight: 1.5, fillColor: '#F59E0B', fillOpacity: 1 }}
                        >
                            <Tooltip direction="top" offset={[0, -6]} className="custom-map-tooltip">
                                <div style={{ fontFamily: "'Outfit', sans-serif" }}>
                                    <strong>🏗️ {d.name}</strong>
                                    <div style={{ fontSize: '0.72rem' }}>{d.river} River ({d.state})</div>
                                </div>
                            </Tooltip>
                        </CircleMarker>
                    ))}

                    {/* NATIONAL PARKS LAYER */}
                    {layers.parks && GEO_NATIONAL_PARKS.map(np => (
                        <CircleMarker
                            key={np.name}
                            center={np.coords}
                            radius={6}
                            pathOptions={{ color: '#fff', weight: 1.5, fillColor: np.color, fillOpacity: 1 }}
                        >
                            <Tooltip direction="top" offset={[0, -6]} className="custom-map-tooltip">
                                <div style={{ fontFamily: "'Outfit', sans-serif", textAlign: 'center' }}>
                                    <strong style={{ color: np.color }}>{np.icon} {np.name}</strong>
                                    <div style={{ fontSize: '0.72rem' }}>{np.state}</div>
                                </div>
                            </Tooltip>
                            <Popup>
                                <div className="map-popup-card">
                                    <h4 style={{ color: np.color }}>{np.icon} {np.name}</h4>
                                    <p><strong>📍 State:</strong> {np.state}</p>
                                    <p><strong>🐾 Keystone Species:</strong> {np.keyAnimal}</p>
                                </div>
                            </Popup>
                        </CircleMarker>
                    ))}

                    {/* MONSOON VECTORS LAYER */}
                    {layers.monsoon && GEO_MONSOON_VECTORS.map(m => (
                        <Polyline
                            key={m.name}
                            positions={m.coords}
                            pathOptions={{ color: m.color, weight: 3.5, dashArray: '6, 6', opacity: 0.8 }}
                        >
                            <Tooltip direction="center" className="custom-map-tooltip">
                                <div style={{ fontFamily: "'Outfit', sans-serif", color: m.color }}>
                                    <strong>💨 {m.name}</strong>
                                </div>
                            </Tooltip>
                            <Popup>
                                <div className="map-popup-card">
                                    <h4 style={{ color: m.color }}>💨 {m.name}</h4>
                                    <p>{m.desc}</p>
                                </div>
                            </Popup>
                        </Polyline>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}
