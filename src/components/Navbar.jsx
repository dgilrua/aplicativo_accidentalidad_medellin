import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {

  const {pathname} = useLocation()

  return (
    <nav className='w-1/3  flex justify-between font-semibold mr-36 items-center'>
        <Link className={`${pathname === '/prediccion' ? 'bg-white rounded-md text-black' : ''} py-2 px-4 hover:text-gray-500`} to="/prediccion">Prediccion &#128187;</Link>
        <Link className={`${pathname === '/agrupamiento' ? 'bg-white rounded-md text-black' : ''} py-2 px-4 hover:text-gray-500`} to="/agrupamiento">Agrupamiento &#127758;</Link>
        <Link className={`${pathname === '/visualizacion' ? 'bg-white rounded-md text-black' : ''} py-2 px-4 hover:text-gray-500`} to="/visualizacion">Visualizacion &#128202;</Link>
        <Link className={`${pathname === '/video' ? 'bg-white rounded-md text-black' : ''} py-2 px-4 hover:text-gray-500`} to="/video">Video &#127916;</Link>
    </nav>
  )
}

export default Navbar