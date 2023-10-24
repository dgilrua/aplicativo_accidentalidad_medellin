import Navbar from "./Navbar"
import Imagen from "../assets/logoNacional.png"

export const Header = () => {
  return (
    <header className=" flex justify-between p-8 bg-gradient-to-r from-primary to bg-secondary">
      <div>
        <img src={Imagen} alt="aca imagen" className="h-28 ml-32"/>
      </div>
      
      <Navbar/>
      
    </header>
  )
}
