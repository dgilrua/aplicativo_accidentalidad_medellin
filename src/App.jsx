import "leaflet/dist/leaflet.css";
import './App.css'
import {datos_barrios} from './datos'
import {
  MapContainer,
  TileLayer,
  GeoJSON,
} from 'react-leaflet'
import { useState } from "react";
import MostrarDatos from "./components/MostrarDatos";
import FloatWindowMap from "./components/FloatWindowMap";

function App() {

  const [barrioSeleccionado, setBarrioSeleccionado] = useState(null)
  const [mouseover, setMouseover] = useState(null)

  const handleMouseover = (properties) => {
    setMouseover(properties)
  }
  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.NOMBRE) {
    layer.on({
      click: () => {
        setBarrioSeleccionado(feature.properties)
      },
      mouseover: () => handleMouseover(feature.properties),
      mouseout: () => handleMouseover(null),
    })
    }
  }
  
  const getFeatureColor = numCluster => {
    return numCluster === 0 ? '#1FFF00' : numCluster === 1 ? '#FF0000' : numCluster === null ? '#343434' : '#F7FF00'
  }

  const style = (feature) => {

    const isSelected = feature.properties.NOMBRE === barrioSeleccionado?.NOMBRE
    const isHovered = feature.properties.NOMBRE === mouseover?.NOMBRE
    const numCluster = feature.properties.CLUSTER_GE

    return {
      fillColor: `${getFeatureColor(numCluster)}`,
      opacity: 1,
      color: isSelected || isHovered ? '#000000' : '#808080',
      weight: isSelected || isHovered ? 1.5 : 0.8,
    }
  }

  const handleDropdownChange = (e) => {
    const selectedBarrio = e.target.value
    const barrioData = datos_barrios.features.find(feature => feature.properties.NOMBRE === selectedBarrio)
    setBarrioSeleccionado(barrioData ? barrioData.properties : null)
  }

  return (
    <>
      <div style={{position: 'relative'}}>
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
      <div>
        <select 
          onChange={handleDropdownChange} 
          value={barrioSeleccionado?.NOMBRE ? barrioSeleccionado.NOMBRE : ''}
        >
          <option value="" disabled>Seleccione un barrio</option>
          {datos_barrios.features.map((feature) => (
            <option  
              key={crypto.randomUUID()} 
              value={feature.properties.NOMBRE}
            >
              {feature.properties.NOMBRE}
            </option>
          ))}
        </select>
        {
          barrioSeleccionado === null ? <p>Elige o haz click en un barrio para obtener mas informacion</p> : 
          barrioSeleccionado.CLUSTER_GE === null ? <p>No se encontraron datos para el barrio {barrioSeleccionado.NOMBRE}</p> : 
          <MostrarDatos barrioSeleccionado={barrioSeleccionado}/>
        }
      </div>
    </>
  )
}

export default App
