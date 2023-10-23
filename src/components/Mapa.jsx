import {
  MapContainer,
  TileLayer,
  GeoJSON,
} from 'react-leaflet'

import FloatWindowMap from "./FloatWindowMap";

const Mapa = ({datos_barrios, style, onEachFeature}) => {
  return (
    <div className=" relative w-1/2">
      <MapContainer center={[6.2567783 , -75.6189033]} zoom={11}>
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
    </div>
  )
}

export default Mapa