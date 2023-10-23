import '../App.css'

const FloatWindowMap = () => {
  return (
    <div
      className=" absolute bottom-6 right-1 p-5 bg-white border-2 border-gray-300 rounded-2xl shadow-2xl z-50 opacity-80"
    >
      <div className=" flex gap-2 items-center">
        <div className=" w-6 h-6 accidentalidad_baja">

        </div>
        <p>Grupo 1: Accidentalidad baja</p>
      </div>

      <div className=" flex gap-2 items-center">
        <div className=" w-6 h-6 accidentalidad_media">

        </div>
        <p>Grupo 1: Accidentalidad Media</p>
      </div>

      <div className=" flex gap-2 items-center">
        <div className=" w-6 h-6 accidentalidad_alta">

        </div>
        <p>Grupo 3: Accidentalidad Alta</p>
      </div>
    </div>
  )
}

export default FloatWindowMap