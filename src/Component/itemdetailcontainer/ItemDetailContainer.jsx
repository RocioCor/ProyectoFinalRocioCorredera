import { useEffect, useState } from "react"
import ItemDetail from "../itemDetail/ItemDetail"
import {  useParams } from "react-router-dom"
import {doc, getDoc} from "firebase/firestore"
import { db } from "../../Fiirebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        
    const docRef = doc(db, "proucts", itemId);
   getDoc(docRef) 
   .then((resp) => {
   setProduct(
    { ...resp.data(), id: resp.id})
   }
    )
}, [itemId])

    return (
        <div className="ItemDetailContainer">
            {product && <ItemDetail item={product} />}
        </div>
    )
}
export default ItemDetailContainer