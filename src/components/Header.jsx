import Navbar from "./Navbar"
import Imagen from "../assets/logoNacional.png"

export const Header = () => {
  return (
    <header className="flex flex-col p-8 bg-gradient-to-r from-primary to bg-secondary sm:justify-between sm:flex-row items-center">
      <div>
        <img src={Imagen} alt="aca imagen" className="sm:h-28 sm:ml-32 mb-10 sm:mb-0"/>
      </div>
      
      <Navbar/>
      
    </header>
  )
}
