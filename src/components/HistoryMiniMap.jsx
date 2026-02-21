import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function HistoryMiniMap({ events, color, selectedEvent, onSelectEvent }) {
    return (
        <div className="history-minimap-wrapper">
            <MapContainer
                center={[22.5, 78.5]}
                zoom={4}
                minZoom={4}
                maxZoom={7}
                zoomControl={false}
                attributionControl={false}
                dragging={true}
                scrollWheelZoom={false}
                style={{ width: '100%', height: '100%', borderRadius: '12px' }}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
                    maxZoom={19}
                />
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png"
                    maxZoom={19}
                    opacity={0.4}
                />
                {events.filter(e => e.coords).map((event, i) => (
                    <CircleMarker
                        key={i}
                        center={event.coords}
                        radius={selectedEvent === event ? 10 : 6}
                        pathOptions={{
                            color: selectedEvent === event ? '#fff' : color,
                            weight: selectedEvent === event ? 3 : 2,
                            fillColor: color,
                            fillOpacity: selectedEvent === event ? 1 : 0.7,
                        }}
                        eventHandlers={{ click: () => onSelectEvent(event) }}
                    >
                        <Tooltip direction="top" offset={[0, -8]}>
                            <div style={{ fontFamily: "'Outfit', sans-serif", textAlign: 'center' }}>
                                <div style={{ fontWeight: 600, fontSize: '0.8rem', color }}>{event.yearLabel}</div>
                                <div style={{ fontSize: '0.72rem', maxWidth: 160 }}>{event.title}</div>
                            </div>
                        </Tooltip>
                    </CircleMarker>
                ))}
            </MapContainer>
        </div>
    )
}

export default HistoryMiniMap
