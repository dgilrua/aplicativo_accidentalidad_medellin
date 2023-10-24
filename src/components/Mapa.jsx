import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  GeoJSON,
} from 'react-leaflet'

import FloatWindowMap from "./FloatWindowMap";

const Mapa = ({datos_barrios, style, onEachFeature}) => {
  return (
    <>
      <MapContainer center={[6.2516983 , -75.5974713]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON 
          data={datos_barrios}
          style={style}
          onEachFeature={onEachFeature}
        />
      </MapContainer>
      <FloatWindowMap />
    </>
  )
}

export default Mapa