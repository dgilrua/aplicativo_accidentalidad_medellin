import Layout from '../components/Layout'

export const Inicio = () => {
  return (
    <Layout>
      <div className='container-css'>
        <h1 className=" text-center font-bold my-10 text-4xl text-slate-800">¡Bienvenido a nuestro portal <span className=' text-primary'>Medellin en Vias!</span></h1>
        <div className='grid grid-cols-2'>
          <p className='text-2xl leading-loose'>Explora y comprende la realidad de la accidentalidad en Medellín a través de datos interactivos y predicciones precisas. Nuestra plataforma te proporciona una visión completa de la seguridad vial en la ciudad.</p>
          <p></p>
        </div>
      </div>
    </Layout>
  )
}
