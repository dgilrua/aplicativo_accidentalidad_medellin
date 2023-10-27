import { useEffect, useState } from "react"
import Error from "./Error"
const Form = ({setDatosPrediccion, setEleccion}) => {

  const [fechaInicio, setFechaInicio] = useState('')
  const [fechaFin, setFechaFin] = useState('')
  const [rango, setRango] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [fechaInicio, fechaFin, rango])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (fechaFin === '' || fechaInicio === '' || rango === '') {
      setError(true)
      return
    }

    setDatosPrediccion({
        "Fecha_inicio": fechaInicio,
        "Fecha_fin": fechaFin,
        "Tipo": rango
    })
    setEleccion(rango)
  }

  return (
    <div className="py-32">
      <form onSubmit={handleSubmit}>
        <div className="mb-12">
          <label className="block mb-3 text-slate-900 font-semibold text-xl" htmlFor="fechaInicio">Selecciona la fecha de inicio de la consulta</label>
          <input
            className="w-full text-center rounded-md font-semibold text-xl bg-slate-200 py-3 px-5" 
            id="fechaInicio"
            type="date" 
            onChange={e => setFechaInicio(e.target.value)}
            value={fechaInicio}
          />
        </div>
        <div className="mb-12">
          <label className="block mb-3 text-slate-900 font-semibold text-xl" htmlFor="fechaFin">Selecciona la fecha de fin de la consulta</label>
          <input
            className="w-full text-center rounded-md font-semibold text-xl bg-slate-200 py-3 px-5" 
            id="fechaFin"
            type="date" 
            onChange={e => setFechaFin(e.target.value)}
            value={fechaFin}
          />
        </div>
        <div className="mb-12">
          <label className="block mb-3 text-slate-900 font-semibold text-xl" htmlFor="select">Elije una opcion</label>
          <select 
            className="w-full text-center rounded-md font-semibold text-xl bg-slate-200 py-3 px-5"
            name="" 
            id="select"
            value={rango}
            onChange={e => setRango(e.target.value)}
          >
            <option value={""} disabled> Selecciona un rango </option>
            <option value="dia">Dia</option>
            <option value="semana">Semana</option>
            <option value="mes">Mes</option>
          </select>
        </div>
        {
          error === true ? 
          <Error /> :
          <input type="submit" className=" hover:cursor-pointer rounded-sm w-1/4 bg-primary py-2 text-white font-bold text-xl mt-3"/>
        }
      </form>
    </div>
  )
}

export default Form