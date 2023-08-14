import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../Fiirebase/firebaseConfig"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {
        const productosRef = collection(db, "proucts")
        
        const q = categoryId ? query (productosRef, where("category", "==", categoryId)) : productosRef
        getDocs(q)
            .then((resp) => {
                
          setProducts (
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id}
                    })
                )
            })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
    )
}
export default ItemListContainer