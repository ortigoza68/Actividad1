import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CheckoutSummary.css";

const CheckoutSummary = ({ cartItems, clearCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleConfirmOrder = () => {
    setOrderPlaced(true);
    clearCart(); 
  };

  const handleGoToBookList = () => {
    navigate("/books"); 
  };

  return (
    <div className="checkout-summary">
      {orderPlaced ? (
        <div className="order-confirmation">
          <div className="order-confirmation__message">
            <h2>¡Muchas Gracias!</h2>
            <p>Tu pedido ha sido realizado con éxito!</p>
          </div>
          <button
            className="checkout-summary__back-button"
            onClick={handleGoToBookList}
          >
            Volver al inicio
          </button>
        </div>
      ) : (
        <>
          <h2>Resumen de Compra</h2>
          {cartItems.length === 0 ? (
            <p>No tienes productos en tu carrito.</p>
          ) : (
            <>
              <ul className="checkout-summary__list">
                {cartItems.map((item) => (
                  <li key={item.id} className="checkout-summary__item">
                    <div className="checkout-summary__details">
                      <img src={item.image} alt={item.title} className="checkout-summary__image" />
                      <div>
                        <h4 className="checkout-summary__title">{item.title}</h4>
                        <p>Cantidad: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="checkout-summary__price">
                      ${item.price.toFixed(2)} x {item.quantity} = $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
              <h3 className="checkout-summary__total">Total: ${total.toFixed(2)}</h3>
              <button
                className="checkout-summary__confirm-button"
                onClick={handleConfirmOrder}
              >
                Confirmar Pedido
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CheckoutSummary;
