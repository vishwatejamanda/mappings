import { useEffect, useMemo, useState, useRef } from 'react'
import { MapContainer, TileLayer, Polygon, CircleMarker, Tooltip, Popup, Polyline, useMap } from 'react-leaflet'
import { formatYear, HISTORIC_BATTLES } from '../data/empires'
import { TRADE_ROUTES } from '../data/tradeRoutes'
import { ANCIENT_CITIES } from '../data/ancientCities'

// Basemap layer configurations
const BASEMAPS = {
    voyager: {
        name: 'Antique Voyager',
        icon: '📜',
        url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        attribution: '&copy; CartoDB'
    },
    dark: {
        name: 'Dark Obsidian',
        icon: '🌑',
        url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        attribution: '&copy; CartoDB'
    },
    topo: {
        name: 'Topographic Physical',
        icon: '🏔️',
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attribution: '&copy; OpenTopoMap'
    },
    satellite: {
        name: 'Satellite Hybrid',
        icon: '🛰️',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: '&copy; Esri'
    }
}

// Controller component to smoothly fly to empire / city / battle
function MapCameraController({ targetCoords, targetZoom = 5 }) {
    const map = useMap()
    useEffect(() => {
        if (targetCoords && targetCoords.length === 2) {
            map.flyTo(targetCoords, targetZoom, {
                duration: 1.2,
                easeLinearity: 0.25
            })
        }
    }, [targetCoords, targetZoom, map])
    return null
}

// Empire territory polygon
function EmpirePolygon({ empire, isSelected, onSelect }) {
    const pathOptions = useMemo(() => ({
        color: empire.color,
        weight: isSelected ? 3.5 : 2,
        opacity: isSelected ? 1 : 0.85,
        fillColor: empire.color,
        fillOpacity: isSelected ? 0.38 : 0.22,
        className: 'empire-territory-path'
    }), [empire.color, isSelected])

    if (!empire.territory || empire.territory.length === 0) return null

    return (
        <Polygon
            positions={empire.territory}
            pathOptions={pathOptions}
            eventHandlers={{
                click: () => onSelect(empire),
                mouseover: (e) => {
                    const layer = e.target
                    layer.setStyle({ fillOpacity: isSelected ? 0.45 : 0.35, weight: 3.5, opacity: 1 })
                    layer.bringToFront()
                },
                mouseout: (e) => {
                    const layer = e.target
                    layer.setStyle(pathOptions)
                }
            }}
        >
            <Tooltip direction="center" permanent={false} className="custom-map-tooltip">
                <div style={{ fontFamily: "'Outfit', sans-serif", padding: '4px 2px' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: empire.color, marginBottom: 2 }}>
                        {empire.name}
                    </div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.85, color: '#e2e8f0' }}>
                        {formatYear(empire.startYear)} — {formatYear(empire.endYear)}
                    </div>
                </div>
            </Tooltip>
        </Polygon>
    )
}

export default function EmpireMap({
    empires = [],
    selectedEmpire,
    onSelectEmpire,
    currentYear = -300,
    activeLayers = { boundaries: true, cities: true, tradeRoutes: true, battles: true, capitals: true },
    basemap = 'voyager',
    onToggleLayer,
    onSelectBasemap
}) {
    const [selectedCity, setSelectedCity] = useState(null)
    const [selectedBattle, setSelectedBattle] = useState(null)
    const [selectedRoute, setSelectedRoute] = useState(null)

    // Filter relevant battles for current timeline window (within +/- 300 years)
    const visibleBattles = useMemo(() => {
        return HISTORIC_BATTLES.filter(b => Math.abs(b.year - currentYear) < 400 || (empires.length > 0 && empires.some(e => e.era === b.era)))
    }, [currentYear, empires])

    // Filter relevant cities for current year or active empires
    const visibleCities = useMemo(() => {
        if (empires.length === 0) {
            return ANCIENT_CITIES.slice(0, 15)
        }
        const empireEras = new Set(empires.map(e => e.era))
        const cityIds = new Set(empires.flatMap(e => e.cities || []))
        return ANCIENT_CITIES.filter(c => empireEras.has(c.era) || cityIds.has(c.id))
    }, [empires])

    const cameraTarget = useMemo(() => {
        if (selectedEmpire?.capitalCoords) return selectedEmpire.capitalCoords
        if (selectedCity?.coords) return selectedCity.coords
        if (selectedBattle?.coords) return selectedBattle.coords
        return [22.5, 78.5]
    }, [selectedEmpire, selectedCity, selectedBattle])

    return (
        <div className="empire-map-viewport">
            <MapContainer
                center={[22.5, 78.5]}
                zoom={5}
                minZoom={4}
                maxZoom={10}
                zoomControl={false}
                attributionControl={false}
                style={{ width: '100%', height: '100%', backgroundColor: '#07090e' }}
            >
                {/* Basemap Tiles */}
                <TileLayer
                    key={basemap}
                    url={BASEMAPS[basemap]?.url || BASEMAPS.voyager.url}
                    maxZoom={19}
                />

                {/* Camera Controller */}
                <MapCameraController targetCoords={cameraTarget} targetZoom={selectedEmpire ? 6 : 5} />

                {/* 1. IMPERIAL BOUNDARIES LAYER */}
                {activeLayers.boundaries && empires.map(empire => (
                    <EmpirePolygon
                        key={`poly-${empire.id}`}
                        empire={empire}
                        isSelected={selectedEmpire?.id === empire.id}
                        onSelect={onSelectEmpire}
                    />
                ))}

                {/* 2. ANCIENT TRADE & SEA ROUTES LAYER */}
                {activeLayers.tradeRoutes && TRADE_ROUTES.map(route => (
                    <Polyline
                        key={route.id}
                        positions={route.coordinates}
                        pathOptions={{
                            color: route.color,
                            weight: route.width || 3.5,
                            dashArray: route.dashArray || '6, 6',
                            opacity: 0.85,
                            className: 'trade-route-polyline'
                        }}
                    >
                        <Tooltip direction="top" className="custom-map-tooltip">
                            <div style={{ fontFamily: "'Outfit', sans-serif", padding: '4px' }}>
                                <div style={{ fontWeight: 700, color: route.color, fontSize: '0.85rem' }}>
                                    {route.type === 'sea' ? '⚓' : '🐫'} {route.name}
                                </div>
                                <div style={{ fontSize: '0.72rem', opacity: 0.8, color: '#cbd5e1' }}>
                                    {route.era}
                                </div>
                            </div>
                        </Tooltip>
                        <Popup>
                            <div className="map-popup-card">
                                <div className="map-popup-header" style={{ borderLeft: `3px solid ${route.color}` }}>
                                    <span className="map-popup-icon">{route.type === 'sea' ? '⚓' : '🐫'}</span>
                                    <div>
                                        <h4 style={{ color: route.color }}>{route.name}</h4>
                                        <span className="map-popup-era">{route.era}</span>
                                    </div>
                                </div>
                                <p className="map-popup-desc">{route.description}</p>
                                <div className="map-popup-commodities">
                                    <strong>Commodities:</strong> {route.commodities?.join(' · ')}
                                </div>
                                <p className="map-popup-significance"><em>{route.significance}</em></p>
                            </div>
                        </Popup>
                    </Polyline>
                ))}

                {/* 3. HISTORIC CITIES LAYER */}
                {activeLayers.cities && visibleCities.map(city => (
                    <CircleMarker
                        key={`city-${city.id}`}
                        center={city.coords}
                        radius={6}
                        pathOptions={{
                            color: '#ffffff',
                            weight: 1.5,
                            fillColor: city.color || '#F59E0B',
                            fillOpacity: 0.95
                        }}
                    >
                        <Tooltip direction="top" offset={[0, -6]} className="custom-map-tooltip">
                            <div style={{ fontFamily: "'Outfit', sans-serif", textAlign: 'center' }}>
                                <div style={{ fontWeight: 600, fontSize: '0.82rem', color: city.color }}>
                                    {city.icon} {city.name}
                                </div>
                                <div style={{ fontSize: '0.7rem', opacity: 0.8, color: '#94a3b8' }}>
                                    {city.role}
                                </div>
                            </div>
                        </Tooltip>
                        <Popup>
                            <div className="map-popup-card">
                                <div className="map-popup-header" style={{ borderLeft: `3px solid ${city.color}` }}>
                                    <span className="map-popup-icon">{city.icon}</span>
                                    <div>
                                        <h4 style={{ color: city.color }}>{city.name}</h4>
                                        <span className="map-popup-ancient">{city.ancientName}</span>
                                    </div>
                                </div>
                                <div className="map-popup-subera">{city.subEra}</div>
                                <p className="map-popup-desc">{city.description}</p>
                                <div className="map-popup-monuments">
                                    <strong>🏛️ Notable Monuments:</strong>
                                    <ul>
                                        {city.monuments?.map(m => <li key={m}>{m}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </Popup>
                    </CircleMarker>
                ))}

                {/* 4. HISTORIC BATTLES LAYER */}
                {activeLayers.battles && visibleBattles.map(battle => (
                    <CircleMarker
                        key={`battle-${battle.id}`}
                        center={battle.coords}
                        radius={7}
                        pathOptions={{
                            color: '#EF4444',
                            weight: 2,
                            fillColor: '#991B1B',
                            fillOpacity: 1,
                            dashArray: '2, 2'
                        }}
                    >
                        <Tooltip direction="top" offset={[0, -8]} className="custom-map-tooltip">
                            <div style={{ fontFamily: "'Outfit', sans-serif", textAlign: 'center' }}>
                                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#F87171' }}>
                                    ⚔️ {battle.name}
                                </div>
                                <div style={{ fontSize: '0.7rem', color: '#e2e8f0' }}>{battle.yearLabel}</div>
                            </div>
                        </Tooltip>
                        <Popup>
                            <div className="map-popup-card">
                                <div className="map-popup-header" style={{ borderLeft: '3px solid #EF4444' }}>
                                    <span className="map-popup-icon">⚔️</span>
                                    <div>
                                        <h4 style={{ color: '#F87171' }}>{battle.name}</h4>
                                        <span className="map-popup-era">{battle.yearLabel}</span>
                                    </div>
                                </div>
                                <div className="map-popup-combatants">
                                    <strong>Combatants:</strong> {battle.combatants}
                                </div>
                                <p className="map-popup-desc">{battle.significance}</p>
                            </div>
                        </Popup>
                    </CircleMarker>
                ))}

                {/* 5. CAPITAL HIGHLIGHT MARKERS */}
                {activeLayers.capitals && empires.map(empire => (
                    empire.capitalCoords && (
                        <CircleMarker
                            key={`cap-${empire.id}`}
                            center={empire.capitalCoords}
                            radius={selectedEmpire?.id === empire.id ? 9 : 6}
                            pathOptions={{
                                color: '#ffffff',
                                weight: 2.5,
                                fillColor: empire.color,
                                fillOpacity: 1
                            }}
                        >
                            <Tooltip permanent={selectedEmpire?.id === empire.id} direction="bottom" offset={[0, 8]} className="custom-map-tooltip">
                                <div style={{ fontFamily: "'Outfit', sans-serif", textAlign: 'center' }}>
                                    <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8, color: '#fbbf24' }}>
                                        👑 Capital
                                    </div>
                                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: empire.color }}>
                                        {empire.capital}
                                    </div>
                                </div>
                            </Tooltip>
                        </CircleMarker>
                    )
                ))}
            </MapContainer>
        </div>
    )
}
