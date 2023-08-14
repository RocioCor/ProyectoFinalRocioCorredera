import './App.css';
import NavBar from './Component/NavBar';
import ItemListContainer from './Component/ItemLIstContainer/ItemListContainer';
import ItemDetailContainer from './Component/itemdetailcontainer/ItemDetailContainer';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import { CartProvider } from './Component/Cart/CartContext';
import Cart from './Component/Cart/Cart';
import Contacto from './Component/contacto/Contacto';
import Checkout from './Component/CheckOut/CheckOut';



function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <CartProvider>
       <NavBar />
        <Routes>
          <Route path= '/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/contacto' element ={<Contacto/>}/>
          <Route path="/carrito" element={<Cart />}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
