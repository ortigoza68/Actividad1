import React from "react";
import { useParams, Link } from "react-router-dom";
import books from "../data/books";
import '../styles/BookDetails.css';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const BookDetails = ({ addToCart }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <p>Libro no encontrado.</p>;
  }

  const handleAddToCart = () => {
    addToCart(book);
    toast.success(`${book.title} ha sido agregado al carrito.`);
  };

  return (
    <div className="book-details">
      <img src={book.image} alt={book.title} className="book-details__image" />
      <h1 className="book-details__title">{book.title}</h1>
      <p className="book-details__author">Por {book.author}</p>

      <p className="book-details__price">Precio: ${book.price}</p>
      <button onClick={handleAddToCart} className="book-details__add-to-cart">
        Agregar al carrito
      </button>
      <Link to="/books" className="book-details__back">
        Volver a la lista
      </Link>
    </div>
  );
};

export default BookDetails;