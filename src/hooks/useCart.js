import { useState } from 'react';

// Custom hook para manejar el carrito
const useCart = () => {
  const [cart, setCart] = useState([]);

  // Agregar un libro al carrito
  const addToCart = (book) => {
    setCart((prevCart) => {
      const bookExists = prevCart.find((item) => item.id === book.id);
      if (bookExists) {
        return prevCart.map((item) =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  };

  // Eliminar un libro del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Actualizar la cantidad de un libro en el carrito
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity, 10) } : item
      )
    );
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, updateQuantity, clearCart };
};

export default useCart;