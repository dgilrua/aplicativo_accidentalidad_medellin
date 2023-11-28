import { useEffect, useState } from "react"
import Plot from "react-plotly.js"
import {Bars} from 'react-loader-spinner'

const MostrarPrediccion = ({datosPredichos, eleccion, cargando}) => {
  useEffect(() => {
    if (Object.keys(datosPredichos).length === 0) return
    devolverValores(datosPredichos)
  }, [datosPredichos])

  const [valores_x, setValores_x] = useState([])
  const [valores_y, setValores_y] = useState([])
  const [mostrarGrafico, setMostrarGrafico] = useState(true)

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
    {type: `${Object.keys(datosPredichos).length >= 50 ? 'scatter': 'bar'}`, x: valores_x, y: valores_y, marker: {
      color: '#8eb826', // Puedes ajustar el color base
      line: {
        color: '#8eb826', // Puedes ajustar el color del borde
        width: 2,
      },
    },},
  ]

  const layout_grafico = {
    width: 860, 
    height: 600, 
    title: {
      text:  `Predicciones ${eleccion}`,
      font: {
        family: 'Sans-serif, monospace',
        size: 24,
      },
    }, 
    xaxis: {type: 'category'},
  }

  return (
    <>
      {eleccion == "" ? <p className='text-center mt-10 font-semibold text-3xl'>Completa el formulario y haz click en el boton enviar para hacer una prediccion</p>: (
        cargando ? 
        <div className="flex justify-center items-center">
          <Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>:
          Object.keys(datosPredichos).length === 0 ? <p className='text-center mt-10 font-semibold text-3xl'>Tu intervalo de fecha esta incorrecto, revisalo e ingresa nuevos datos</p>:
        <div className={`${mostrarGrafico ? 'justify-center' : ''} flex flex-col  mt-10`}>
          <div className="flex justify-around mb-10">
            <button className="px-5 py-2 text-xl font-bold text-white bg-primary" onClick={() => setMostrarGrafico(true)}>Mostrar Grafico</button>
            <button className="px-5 py-2 text-xl font-bold text-white bg-primary" onClick={() => setMostrarGrafico(false)}>Mostrar Tabla</button>
          </div>
          {
            mostrarGrafico ?
            <Plot
            data={datos_grafico}
            layout={layout_grafico}
            />:
            <div className="mx-auto mt-10 overflow-y-scroll max-h-[400px] px-5">
              <table className="border">
                <th className="font-bold border px-3 py-3 text-2xl uppercase">{eleccion}</th>
                <th className="font-bold border px-3 py-3 text-2xl uppercase">Cantidad de accidentes</th>
                {valores_x.map((valor, index) => (
                  <tr key={index}>
                    <td className="px-5 py-3 text-xl font-bold border text-center">{valor}</td>
                    <td className="px-5 py-3 text-xl font-bold border text-center">{valores_y[index]}</td>
                  </tr>
                ))}
              </table>
            </div>
          }
        </div>
      )}
    </>
  )
}

export default MostrarPrediccion