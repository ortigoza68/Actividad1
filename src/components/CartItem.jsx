import React from "react";
import "../styles/CartItem.css";

const CartItem = ({ book, removeFromCart, updateQuantity }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    updateQuantity(book.id, newQuantity);
  };

  return (
    <div className="cart__item">
      <img src={book.image} alt={book.title} />
      <h4>{book.title}</h4>
      <p>${book.price.toFixed(2)}</p>
      <div className="cart__item-quantity">
        <label htmlFor={`quantity-${book.id}`}>Cantidad:</label>
        <input
          id={`quantity-${book.id}`}
          type="number"
          min="1"
          value={book.quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button onClick={() => removeFromCart(book.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;