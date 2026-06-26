import { useState } from 'react';
import Cart from './components/Cart.jsx';
import Catalog from './components/Catalog.jsx';
import CheckoutForm from './components/CheckoutForm.jsx';
import Confirmation from './components/Confirmation.jsx';
import Survey from './components/Survey.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { products } from './products.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, size) => {
    const existingItem = cart.find(item => item.id === product.id && item.selectedSize === size);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id && item.selectedSize === size
          ? {...item, quantity: item.quantity + 1}
          : item
      ));
    } else {
      setCart([...cart, {...product, selectedSize: size, quantity: 1 }]);
    }
  };

  const updateQuantity = (productId, size, amount) => {
    setCart(cart.map(item => {
      if (item.id === productId && item.selectedSize === size) {
        const newQuantity = item.quantity + amount;
        return {...item, quantity: newQuantity < 1 ? 1 : newQuantity };
      }
      return item;
    }));
  };

  const removeFromCart = (productId, size) => {
    setCart(cart.filter(item => !(item.id === productId && item.selectedSize === size)));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Catalog addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
        <Route path="/checkout" element={<CheckoutForm cart={cart} clearCart={clearCart} />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;