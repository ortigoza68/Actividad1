import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetails from "../components/BookDetails";
import CheckoutSummary from "../components/CheckoutSummary";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../views/Landing";
import Home from "../views/Home";
import { ToastContainer } from "react-toastify";
import Cart from "../views/Cart";
import useCart from "../hooks/useCart"; 

const AppRouter = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  } = useCart(); 

  return (
    <BrowserRouter>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutSummary cartItems={cart} clearCart={clearCart} />
          }
        />
      
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;