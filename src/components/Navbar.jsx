import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <Link to="/prediccion">Prediccion</Link>
      <Link to="/agrupamiento">Agrupamiento</Link>
      <Link to="/visualizacion">Visualizacion</Link>
    </nav>
  )
}

export default Navbar