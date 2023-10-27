import { useEffect, useState } from "react"
import Form from "../components/Form"
import Layout from "../components/Layout"
import MostrarPrediccion from "../components/MostrarPrediccion"
import axios from "axios"

const Prediccion = () => {


  const [datosPrediccion, setDatosPrediccion] = useState({})
  const [datosPredichos, setdatosPredichos] = useState({})
  const [eleccion, setEleccion] = useState("")
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    const consultarApi = async () => {
      if (Object.keys(datosPrediccion).length === 0) return
      try {
        setCargando(true)
        const url = 'https://accidentalidad-api.onrender.com'
        const respuesta = await axios.post(url, datosPrediccion, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        setdatosPredichos(respuesta.data.Respuesta)
        setCargando(false)
      } catch (error) {
        console.log(error)
      }
      
    }
    consultarApi()
  }, [datosPrediccion])

  return (
    <Layout>
      <div className="">
        <h1 className=" text-center font-bold my-10 text-4xl text-slate-800">Prediccion de accidentes tipo choque segun intervalo de tiempo</h1>
        <div className="container-css bg-gray-50 bg-opacity-80 grid p-10  my-5 rounded-lg shadow-lg">
          <Form 
            setDatosPrediccion={setDatosPrediccion}
            setEleccion={setEleccion}
          />
          <MostrarPrediccion 
            datosPredichos={datosPredichos}
            eleccion={eleccion}
            cargando={cargando}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Prediccion