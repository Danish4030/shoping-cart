// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const existingItem = cart.find((i) => i.id === item.id);

    if (existingItem) {
      const updatedCart = cart.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const total = subtotal;

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, subtotal, totalItems, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
