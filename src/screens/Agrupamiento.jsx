import "leaflet/dist/leaflet.css";
import '../App.css'
import {datos_barrios} from '../datos'
import { useState } from "react";
import MostrarDatos from "../components/MostrarDatos";
import Mapa from "../components/Mapa";
import Layout from "../components/Layout";

const Agrupamiento = () => {
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
      <Layout>
        <Mapa 
          style={style}
          datos_barrios={datos_barrios}
          onEachFeature={onEachFeature}
        />
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
      </Layout>
    )
}

export default Agrupamiento