import Layout from '../components/Layout'

const Video = () => {
  return (
    <Layout>
      <h1 className=" text-center font-bold my-10 text-4xl text-slate-800">Video promocional</h1>
      <div className='container-css my-20 items-center flex justify-center'>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/FUcrz4wbnVM" title="Medellín En Vías. Video Publicitario" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </Layout>
  )
}

export default Video