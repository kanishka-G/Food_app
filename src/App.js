import Header from './components/Layout/Header';
import {useState} from 'react';
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const[cartIsShown, setCartIsShown] = useState(false);
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart = {showCartHandler}/>
     <main>
      <Meals/>
     </main>
    </CartProvider>
  );
}

export default App;
