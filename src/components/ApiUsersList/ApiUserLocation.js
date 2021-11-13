import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export function ApiUserLocation({ position }) {
    return (
        <>
            <div className="user-profile__map">
                <MapContainer center={position} zoom={5} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    </Marker>
                </MapContainer>
            </div>
        </>
    )

}
