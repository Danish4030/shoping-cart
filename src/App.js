// App.js
import React from 'react';
import { CartProvider } from './CartContext';
import ShoppingCart from './ShoppingCart';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Shopping Cart</h1>
        <ShoppingCart />
      </div>
    </CartProvider>
  );
}

export default App;
