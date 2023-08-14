import { useContext } from "react"
import cartimg from "./cartimage/cartimg.jpg"
import { CartContext } from "../Cart/CartContext"
import { Link } from "react-router-dom"
const CartWidget = () => {
    const {cantidadEnCarrito} = useContext(CartContext)
    return (
        
        <Link to='/cart' className="CartWidget">
            <img className="Cartimg" src={cartimg} alt="cart-widget" />
           <span>{cantidadEnCarrito()}</span> 
        </Link>
    )
}
export default CartWidget