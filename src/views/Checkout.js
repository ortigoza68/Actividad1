import { useNavigate } from "react-router-dom";
import Summary from "../components/Summary";

const Checkout = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();

  const handleConfirmOrder = () => {
    alert("¡Pedido realizado con éxito!");
    clearCart(); 
    navigate("/books"); 
  };

  return (
    <div className="checkout">
      <h2>Resumen de Compra</h2>
      {cartItems.length === 0 ? (
        <p>No tienes productos en tu carrito.</p>
      ) : (
        <>
          <Summary cartItems={cartItems} />
          <button className="checkout__confirm-button" onClick={handleConfirmOrder}>
            Confirmar Pedido
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;