import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import './Leaflet.css'
const Leaflet = () => {
  return (
    <div className="leaflet-container mx-auto my-20">
      <MapContainer center={[22.3569, 91.7832]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[22.3569, 91.7832]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Leaflet;
