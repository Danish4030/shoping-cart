// ShoppingCart.js
import React from 'react';
import { useCart } from './CartContext';
import './ShoppingCart.css'; // Import CSS file for styling

const ShoppingCart = () => {
  const { cart, addItem, removeItem, updateQuantity, subtotal, totalItems, total } = useCart();

  // Example list of available items
  const availableItems = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ];

  return (
    <div className="shopping-cart">
      <h2>Available Items</h2>
      <ul>
        {availableItems.map((item) => (
          <li key={item.id}>
            <span className="item-name">{item.name}</span> - <span className="item-price">${item.price}</span>{' '}
            <button className="add-button" onClick={() => addItem(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Your Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span className="item-name">{item.name}</span> - <span className="item-price">${item.price}</span> x
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              className="quantity-input"
            />{' '}
            <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <p className="subtotal">Subtotal: ${subtotal}</p>
      <p className="total-items">Total Items: {totalItems}</p>
      <p className="total">Total: ${total}</p>
    </div>
  );
};

export default ShoppingCart;
