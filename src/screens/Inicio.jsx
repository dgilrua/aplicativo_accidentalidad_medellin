import Layout from '../components/Layout'
import Avatar1 from '../assets/avatar1.png'
import Avatar2 from '../assets/avatar2.png'
import Mapa from '../assets/mapa.png'
import prediccion from '../assets/prediccion.png'
import visualizacion from '../assets/visualizacion.png'
import video from '../assets/video.png'

export const Inicio = () => {
  return (
    <Layout>
      <div className='container-css'>
        <h1 className=" text-center font-bold my-20 text-4xl text-slate-800" >¡Bienvenido a nuestro portal <span className=' text-primary'>Medellin en Vias!</span></h1>
        <div className='grid grid-cols-2'>
          <p className='text-2xl leading-loose'>Explora y comprende la realidad de la accidentalidad en Medellín a través de datos interactivos y predicciones precisas. Nuestra aplicación no solo te permite visualizar la accidentalidad pasada, sino que también predice futuros incidentes, brindándote herramientas poderosas para tomar decisiones informadas.</p>
          <img className='mx-auto my-0' src={Avatar1} alt="" width={280} height={300}/>
        </div>
        <div className='grid grid-cols-2 mt-5'>
          <img className='mx-auto my-0' src={Avatar2} alt="" width={280} height={300}/>
          <p className='text-2xl leading-loose'>La seguridad vial es un aspecto crucial para el bienestar de nuestra comunidad. <span className=' text-primary font-semibold'>Medellin en Vias</span> no solo informa sobre incidentes pasados, sino que también te capacita para tomar acciones proactivas, contribuyendo a la construcción de un entorno más seguro y prevenido.</p>
        </div>
      </div>
      <div className='mt-20 mb-20 mx-40 grid grid-cols-4'>
        <div className='items-center flex flex-col gap-5'>
          <img src={Mapa} alt="" width={150}/>
          <h3 className='text-center font-bold text-2xl'>Visualización Interactiva</h3>
          <p className='text-xl text-center mt-8'>Sumérgete en un mapa interactivo y obtén información detallada. Visualiza patrones para tomar decisiones informadas sobre tu seguridad y movilidad en la ciudad.</p>
        </div>
        <div className='items-center flex flex-col gap-5'>
          <img src={prediccion} alt="" width={150}/>
          <h3 className='text-center font-bold text-2xl'>Predicciones de Accidentalidad</h3>
          <p className='text-xl text-center'>Gracias a nuestro modelo de predicción avanzado, anticipamos posibles accidentes, permitiéndote tomar medidas preventivas y contribuir a la seguridad vial de la ciudad.</p>
        </div>
        <div className='items-center flex flex-col gap-5'>
          <img src={visualizacion} alt="" width={150}/>
          <h3 className='text-center font-bold text-2xl'>Filtrado Personalizado</h3>
          <p className='text-xl text-center mt-8'>Personaliza tu experiencia con herramientas de filtrado y visualización. Grafica y obtén perspectivas detalladas para una comprensión de la accidentalidad en Medellín.</p>
        </div>
        <div className='items-center flex flex-col gap-5'>
          <img src={video} alt="" width={150}/>
          <h3 className='text-center font-bold text-2xl'>Explora Medellin en vias en Acción</h3>
          <p className='text-xl text-center'>Sumérgete en la experiencia Medellin en vias a través de nuestro emocionante video promocional. Explora cómo nuestra aplicación aborda la seguridad vial en Medellín.</p>
        </div>
      </div>
    </Layout>
  )
}
