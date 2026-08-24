import { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, CircleMarker, Tooltip, Popup, useMap } from 'react-leaflet'

function MiniMapCameraController({ selectedEvent }) {
    const map = useMap()
    useEffect(() => {
        if (selectedEvent?.coords) {
            map.flyTo(selectedEvent.coords, 6, {
                duration: 1.2,
                easeLinearity: 0.25
            })
        }
    }, [selectedEvent, map])
    return null
}

export default function HistoryMiniMap({ events = [], color = '#F59E0B', selectedEvent, onSelectEvent }) {
    return (
        <div className="history-minimap-wrapper" style={{ width: '100%', height: '100%', minHeight: '340px', position: 'relative' }}>
            <MapContainer
                center={[22.5, 79.5]}
                zoom={4}
                minZoom={3}
                maxZoom={8}
                zoomControl={true}
                attributionControl={false}
                dragging={true}
                scrollWheelZoom={false}
                style={{ width: '100%', height: '100%', minHeight: '340px', borderRadius: '16px', backgroundColor: '#07090e' }}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    maxZoom={19}
                />

                <MiniMapCameraController selectedEvent={selectedEvent} />

                {events.filter(e => e.coords && e.coords.length === 2).map((event, i) => {
                    const isSelected = selectedEvent?.title === event.title
                    return (
                        <CircleMarker
                            key={`${event.title}-${i}`}
                            center={event.coords}
                            radius={isSelected ? 9 : 5.5}
                            pathOptions={{
                                color: isSelected ? '#ffffff' : color,
                                weight: isSelected ? 2.5 : 1.5,
                                fillColor: isSelected ? '#ffffff' : color,
                                fillOpacity: isSelected ? 1 : 0.85
                            }}
                            eventHandlers={{ click: () => onSelectEvent(event) }}
                        >
                            <Tooltip direction="top" offset={[0, -8]} className="custom-map-tooltip">
                                <div style={{ fontFamily: "'Outfit', sans-serif", textAlign: 'center' }}>
                                    <div style={{ fontWeight: 700, fontSize: '0.82rem', color: isSelected ? '#fbbf24' : color }}>
                                        {event.yearLabel}
                                    </div>
                                    <div style={{ fontSize: '0.74rem', maxWidth: 180, fontWeight: 500 }}>
                                        {event.title}
                                    </div>
                                    <div style={{ fontSize: '0.68rem', opacity: 0.75, color: '#94a3b8' }}>
                                        📍 {event.location}
                                    </div>
                                </div>
                            </Tooltip>
                            <Popup>
                                <div className="map-popup-card">
                                    <h4 style={{ color }}>{event.title}</h4>
                                    <span style={{ fontSize: '0.75rem', color: '#fbbf24' }}>{event.yearLabel} · 📍 {event.location}</span>
                                    <p style={{ marginTop: '8px', fontSize: '0.8rem', lineHeight: 1.5 }}>{event.description}</p>
                                    <p style={{ marginTop: '6px', fontSize: '0.75rem', color: '#94a3b8' }}><em>📌 {event.significance}</em></p>
                                </div>
                            </Popup>
                        </CircleMarker>
                    )
                })}
            </MapContainer>
        </div>
    )
}
