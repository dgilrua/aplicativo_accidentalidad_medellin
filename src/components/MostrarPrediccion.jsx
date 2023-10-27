import { useEffect, useState } from "react"
import Plot from "react-plotly.js"

const MostrarPrediccion = ({datosPredichos, eleccion, cargando}) => {
  useEffect(() => {
    if (Object.keys(datosPredichos).length === 0) return
    devolverValores(datosPredichos)
  }, [datosPredichos])

  const [valores_x, setValores_x] = useState([])
  const [valores_y, setValores_y] = useState([])

  const meses = {
    "1": "Enero",
    "2": "Febrero",
    "3": "Marzo",
    "4": "Abril",
    "5": "Mayo",
    "6": "Junio",
    "7": "Julio",
    "8": "Agosto",
    "9": "Septiembre",
    "10": "Octubre",
    "11": "Noviembre",
    "12": "Diciembre"
  }

  const devolverValores = (datos) => {

    let datos2 = []
    let cabecera = []

    if (eleccion == "dia" || eleccion == "semana") {
      setValores_x(Object.keys(datos))
    } else {
      Object.keys(datos).map((key) => {
        cabecera.push(meses[key])
      })
      setValores_x(cabecera)
    }

    if (eleccion == "dia") {
      Object.keys(datos).map((key) => {
        datos2.push(datos[key])
      })
    } else  {
      Object.keys(datos).map((key) => {
        datos2.push(datos[key]['Total accidentes'])
      })
    } 


    setValores_y(datos2)
  }

  const datos_grafico = [
    {type: 'bar', x: valores_x, y: valores_y,     marker: {
      color: 'rgba(55, 128, 191, 0.7)', // Puedes ajustar el color base
      line: {
        color: 'rgba(55, 128, 191, 1)', // Puedes ajustar el color del borde
        width: 2,
      },
    },},
  ]

  const layout_grafico = {width: 800, height: 600, title: `Predicciones ${eleccion}`, xaxis: {type: 'category'}}

  return (
    <>
      {eleccion == "" ? <p className='text-center mt-10 font-semibold text-3xl'>Completa el formulario y haz click en el boton enviar para hacer una prediccion</p>: (
        cargando ? <p className='text-center mt-10 font-semibold text-3xl'>Cargando...</p> :
        <Plot
          data={datos_grafico}
          layout={layout_grafico}
        />
      )}
    </>
  )
}

export default MostrarPrediccion