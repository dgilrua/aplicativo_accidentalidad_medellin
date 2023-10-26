import { useState } from "react"

const Form = () => {

  const [fechaInicio, setFechaInicio] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fechaInicio)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Selecciona la fecha de inicio</label>
          <input 
            type="date" 
            onChange={e => setFechaInicio(e.target.value)}
            value={fechaInicio}
          />
        </div>
        <div>
          <label htmlFor="select">Elije una opcion</label>
          <select name="" id="select">
            <option value="dia">Dia</option>
            <option value="semana">Semana</option>
            <option value="mes">Mes</option>
          </select>
        </div>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Form