import { useEffect, useMemo, useRef } from 'react'
import { MapContainer, TileLayer, Polygon, CircleMarker, Tooltip, useMap, Popup } from 'react-leaflet'
import { formatYear } from '../data/empires'
import 'leaflet/dist/leaflet.css'

// Component to fly to selected empire
function FlyToEmpire({ empire }) {
    const map = useMap()

    useEffect(() => {
        if (empire?.capitalCoords) {
            map.flyTo(empire.capitalCoords, 6, {
                duration: 1.5,
                easeLinearity: 0.25
            })
        }
    }, [empire, map])

    return null
}

// Animated territory polygon
function EmpireTerritory({ empire, isSelected, onSelect }) {
    const polygonRef = useRef()

    const pathOptions = useMemo(() => ({
        color: empire.color,
        weight: isSelected ? 3.5 : 2,
        opacity: isSelected ? 1 : 0.85,
        fillColor: empire.color,
        fillOpacity: isSelected ? 0.40 : 0.22,
        dashArray: isSelected ? null : null,
        className: 'empire-territory-path'
    }), [empire.color, isSelected])

    return (
        <Polygon
            ref={polygonRef}
            positions={empire.territory}
            pathOptions={pathOptions}
            eventHandlers={{
                click: () => onSelect(empire),
                mouseover: (e) => {
                    const layer = e.target
                    layer.setStyle({
                        fillOpacity: isSelected ? 0.45 : 0.35,
                        weight: isSelected ? 4 : 3,
                        opacity: 1
                    })
                    layer.bringToFront()
                },
                mouseout: (e) => {
                    const layer = e.target
                    layer.setStyle({
                        fillOpacity: isSelected ? 0.40 : 0.22,
                        weight: isSelected ? 3.5 : 2,
                        opacity: isSelected ? 1 : 0.85
                    })
                }
            }}
        >
            <Tooltip
                direction="center"
                permanent={false}
                className="empire-tooltip"
            >
                <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    padding: '4px 0'
                }}>
                    <div style={{
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        color: empire.color,
                        marginBottom: 2
                    }}>
                        {empire.name}
                    </div>
                    <div style={{
                        fontSize: '0.75rem',
                        opacity: 0.8
                    }}>
                        {formatYear(empire.startYear)} — {formatYear(empire.endYear)}
                    </div>
                </div>
            </Tooltip>
        </Polygon>
    )
}

// Capital marker
function CapitalMarker({ empire, isSelected }) {
    return (
        <CircleMarker
            center={empire.capitalCoords}
            radius={isSelected ? 8 : 5}
            pathOptions={{
                color: '#333333',
                weight: 2,
                fillColor: empire.color,
                fillOpacity: 1
            }}
        >
            <Tooltip permanent={isSelected} direction="top" offset={[0, -10]}>
                <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    textAlign: 'center'
                }}>
                    <div style={{
                        fontSize: '0.7rem',
                        opacity: 0.7,
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Capital
                    </div>
                    <div style={{
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        color: empire.color
                    }}>
                        {empire.capital}
                    </div>
                </div>
            </Tooltip>
            <Popup>
                <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    padding: '8px'
                }}>
                    <div style={{
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: empire.color,
                        marginBottom: 4
                    }}>
                        {empire.name}
                    </div>
                    <div style={{
                        fontSize: '0.8rem',
                        opacity: 0.8,
                        marginBottom: 8
                    }}>
                        Capital: {empire.capital}
                    </div>
                    <div style={{
                        fontSize: '0.8rem',
                        lineHeight: 1.6,
                        maxWidth: 280
                    }}>
                        {empire.description.substring(0, 200)}...
                    </div>
                </div>
            </Popup>
        </CircleMarker>
    )
}

function EmpireMap({ empires, selectedEmpire, onSelectEmpire, currentYear }) {
    return (
        <MapContainer
            center={[22.5, 78.5]}
            zoom={5}
            minZoom={4}
            maxZoom={8}
            zoomControl={true}
            attributionControl={false}
            style={{ width: '100%', height: '100%' }}
        >
            {/* Light warm basemap — Voyager */}
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
                maxZoom={19}
            />
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png"
                maxZoom={19}
                opacity={0.55}
            />

            {/* Render territories */}
            {empires.map(empire => (
                <EmpireTerritory
                    key={empire.id}
                    empire={empire}
                    isSelected={selectedEmpire?.id === empire.id}
                    onSelect={onSelectEmpire}
                />
            ))}

            {/* Render capital markers */}
            {empires.map(empire => (
                <CapitalMarker
                    key={`capital-${empire.id}`}
                    empire={empire}
                    isSelected={selectedEmpire?.id === empire.id}
                />
            ))}

            {/* Fly to selected empire */}
            {selectedEmpire && <FlyToEmpire empire={selectedEmpire} />}
        </MapContainer>
    )
}

export default EmpireMap
