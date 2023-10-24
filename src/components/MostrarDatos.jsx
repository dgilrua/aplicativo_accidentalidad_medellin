import logoMuertos from '../assets/muertos.svg'
import logoDanos from '../assets/danos.svg'
import logoHeridos from '../assets/heridos.svg'
import logoChoque from '../assets/choque.svg'
import logoAtropello from '../assets/atropellar.svg'
import logoCaida from '../assets/caida.svg'
import logoOtros from '../assets/otros.svg'

const MostrarDatos = ({barrioSeleccionado}) => {
  const {heridos, muertos, solo_danos, atropello, caida_ocupante, choque, otros, CLUSTER_GE} = barrioSeleccionado 
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-2xl mb-10 font-semibold">Gravedad de los accidentes</h1>
      <div className="grid grid-cols-3 text-right gap-2">
        <div className="h-28 flex justify-between rounded-md bg-green-600 items-center text-center">
          <img src={logoHeridos} className='w-28' alt="logo muertos" />
          <p className="text-white mr-6 font-bold text-xl"><span className="block">{heridos}</span>Heridos</p>
        </div>
        <div className="h-28 flex justify-between rounded-md bg-red-700 items-center text-center">
          <img src={logoMuertos} className='w-24' alt="logo muertos" />
          <p className="text-white mr-6 font-bold text-xl"><span className="block">{muertos}</span>Muertos</p>
        </div>
        <div className="h-28 flex justify-between rounded-md bg-blue-700 items-center text-center">
          <img src={logoDanos} className='w-28' alt="logo muertos" />
          <p className="text-white mr-6 font-bold text-xl"><span className="block">{solo_danos}</span>Daños</p>
        </div>
      </div>
      <h1 className="text-center text-2xl m-10 font-semibold">Tipo de los accidentes</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <div className="h-28 flex justify-between rounded-md bg-third items-center text-center">
          <img src={logoAtropello} className='w-32' alt="logo muertos" />
          <p className="text-white mr-6 font-bold text-xl"><span className="block">{atropello}</span>Atropello</p>
        </div>
        <div className="h-28 flex justify-between rounded-md bg-third items-center text-center">
          <img src={logoCaida} className='w-32' alt="logo muertos" />
          <p className="text-white mr-6 font-bold text-xl"><span className="block">{caida_ocupante}</span>Caida</p>
        </div>
        <div className="h-28 flex justify-between rounded-md bg-third items-center text-center">
          <img src={logoChoque} className='w-48' alt="logo muertos" />
          <p className="text-white mr-6 font-bold text-xl"><span className="block">{choque}</span>Choque</p>
        </div>
        <div className="h-28 flex justify-between rounded-md bg-third items-center text-center">
          <img src={logoOtros} className='w-28' alt="logo muertos" />
          <p className="text-white mr-6 font-bold text-xl"><span className="block">{otros}</span>Otros</p>
        </div>
      </div>
      <h1 className="text-center text-2xl m-10 font-semibold">Informacion del cluster</h1>
      <div>
        {
          CLUSTER_GE == 0 ? <p className=' text-justify font-medium text-xl'>Grupo 1: Grupo con una cantidad baja de accidentalidad. Se destaca por una baja accidentalidad en semana, pocos accidentes de volcamiento y menor cantidad de muertos por accidente. Lo consideramos como zona de bajo riesgo</p> : 
          CLUSTER_GE == 1 ? <p className=' text-justify font-medium text-xl'>Grupo 3: Grupo con una cantidad alta de accidentalidad. Se destaca por una alta accidentalidad los fines de semana, en su mayoria los accidentes ocurren debido a choques, tiene la mayor cantidad de muertos por accidente y la proporcion de heridos es la mas alta. Se considera como zona de alto riesgo</p> : 
          <p className=' text-justify font-medium text-xl'>Grupo 2: Grupo con una cantidad media de accidentalidad. Se destaca por tener una accidentalidad media tanto en semana como en fin de semana. En su mayoria los accidentes ocurren debido a choques pero tiene una cantidad media de muertos por accidente. La proporcion de accidentes con heridos y solo años es equitativa. Se considera como zona de riesgo medio</p>
        }
      </div>
    </div>
  )
}

export default MostrarDatos