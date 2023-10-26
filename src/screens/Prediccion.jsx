import Form from "../components/Form"
import Layout from "../components/Layout"
import MostrarPrediccion from "../components/MostrarPrediccion"

const Prediccion = () => {
  return (
    <Layout>
      <div className="container-css grid grid-cols-2">
        <Form />
        <MostrarPrediccion />
      </div>
    </Layout>
  )
}

export default Prediccion