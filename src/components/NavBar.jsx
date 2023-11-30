
import {NavLink} from "react-router-dom";
export const NavBar = () => {
  return (
    <>
    <ul className="hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
       
       
        <NavLink className=" btn font-semibold first-line:btn-outline-primary" to="/Inicio">Inicio</NavLink>
        <NavLink className="btn font-semibold first-line:btn-outline-primary" to="/Formulario">Formulario</NavLink>
        
     
       
    </ul>  
    
    </>
  )
}
