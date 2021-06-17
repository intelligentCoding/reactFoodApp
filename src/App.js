import React, {useState,Fragment} from "react"
import Cart from "./components/Cart/Cart";
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartProvider from "./store/CartProvider";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    console.log("3333333333333333333")
    setCartIsShown(true)
  }

  const hideCart =() => {
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown &&   <Cart onClose={hideCart}/>}
    
      <Header onShowCart={showCart} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
