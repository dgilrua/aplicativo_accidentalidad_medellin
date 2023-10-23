import "leaflet/dist/leaflet.css";
import './App.css'
import {datos_barrios} from './datos'
import {
  MapContainer,
  TileLayer,
  GeoJSON,
} from 'react-leaflet'
import { useState } from "react";

function App() {

  const [datos, setdatos] = useState({})

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.NOMBRE) {
    layer.bindPopup(`<p>Barrio: ${feature.properties.NOMBRE}</p>`);
    layer.on({
      click: () => {
        setdatos(feature.properties)
      }
    })
    layer.fillColor = feature.properties?.CLUSTER_GE  === 0 ? 'red' : feature.properties?.CLUSTER_GE  === 1 ? 'blue' : 'green'
    }
  }

  return (
    <MapContainer center={[6.2567783 , -75.6189033]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON 
        data={datos_barrios}
        pathOptions={{
          fillColor: 'red',
          opacity: 0.7,
          color: 'black',
          weight: 1,
        }}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  )
}

export default App
