import { useContext } from "react"
import { CartContext } from "./CartContext"


const CartItem = ( {id, title, image, price, quantity } ) => {

    const { removeFromCart } = useContext(CartContext)
    
    return (
        <div className="itemCart">

            <div className="img">
                <img src={image} alt="imaen" ></img>
            </div>

            <div className="description-cantidad">
                <span className="title">{title}</span>
                <span className="quantity">{`cantidad: ${quantity}`}</span>
            </div>

            <div className="price">
                <span className="subtotal">Subtotal</span>
                <span className="price">${price * quantity}</span>
            </div>

            <button className="delete" onClick={ () => removeFromCart(id) }>
            <img src={image} alt="imaen" ></img>
            </button>
        </div>
    )
}

export default CartItem