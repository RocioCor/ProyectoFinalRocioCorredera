import Item from "../item/item"
const ItemList = ({ products, titulo }) => {
    console.log(products)
    const map = Array.isArray(products)

    return (
        <div className='ListGroup'>
<h2>{titulo}</h2>
            {map ? products.map(prod => <Item key={prod.id} {...prod} />) : <Item {...products} />}

        </div>
    )
}
export default ItemList