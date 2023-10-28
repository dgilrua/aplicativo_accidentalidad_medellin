import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {

  const {pathname} = useLocation()

  return (
    <nav className='w-full mr-0 sm:w-2/5 flex flex-col sm:flex-row sm:justify-between font-semibold sm:mr-36 items-center'>
        <Link className={`${pathname === '/' ? 'bg-slate-50 rounded-md text-black ease-out' : 'text-slate-50'} py-2 px-4 hover:text-black`} to="/">Inicio &#128188;</Link>
        <Link className={`${pathname === '/prediccion' ? 'bg-slate-50 rounded-md text-black ease-out' : 'text-slate-50'} py-2 px-4 hover:text-black`} to="/prediccion">Prediccion &#128187;</Link>
        <Link className={`${pathname === '/agrupamiento' ? 'bg-slate-50 rounded-md text-black' : 'text-slate-50'} py-2 px-4 hover:text-black`} to="/agrupamiento">Agrupamiento &#127758;</Link>
        <Link className={`${pathname === '/visualizacion' ? 'bg-slate-50 rounded-md text-black' : 'text-slate-50'} py-2 px-4 hover:text-black`} to="/visualizacion">Visualizacion &#128202;</Link>
        <Link className={`${pathname === '/video' ? 'bg-slate-50 rounded-md text-black' : 'text-slate-50'} py-2 px-4 hover:text-black`} to="/video">Video &#127916;</Link>
    </nav>
  )
}

export default Navbar