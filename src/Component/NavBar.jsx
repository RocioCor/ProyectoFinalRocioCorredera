import "./style/NavBar.css"
import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to={'/'}>
                <h3>Ecommerce</h3>
            </Link>
            <div className="Links">
                <NavLink to={'/category/Phones'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Celulares </NavLink>
                <NavLink to={'/category/Funda'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Fundas</NavLink>
                <NavLink to={'/contacto'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >Contacto</NavLink>
           
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar