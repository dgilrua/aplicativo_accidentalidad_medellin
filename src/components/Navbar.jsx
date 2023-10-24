import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {

  const {pathname} = useLocation()

  return (
    <nav className='w-1/3  flex justify-between font-semibold mr-36 items-center'>
        <Link className={`${pathname === '/prediccion' ? 'bg-slate-50 rounded-md text-black ease-out' : 'text-slate-50'} py-2 px-4 hover:text-black`} to="/prediccion">Prediccion &#128187;</Link>
        <Link className={`${pathname === '/agrupamiento' ? 'bg-slate-50 rounded-md text-black' : 'text-slate-50'} py-2 px-4 hover:text-black`} to="/agrupamiento">Agrupamiento &#127758;</Link>
        <Link className={`${pathname === '/visualizacion' ? 'bg-slate-50 rounded-md text-black' : 'text-slate-50'} py-2 px-4 hover:text-black`} to="/visualizacion">Visualizacion &#128202;</Link>
        <Link className={`${pathname === '/video' ? 'bg-slate-50 rounded-md text-black' : 'text-slate-50'} py-2 px-4 hover:text-black`} to="/video">Video &#127916;</Link>
    </nav>
  )
}

export default Navbar