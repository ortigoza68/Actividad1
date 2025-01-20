import React from "react";

import { Link } from "react-router-dom";
import "../styles/Book.css";

const Book = ({ id, title, image, author, code, price }) => {
    return (
        <div className="book">
            <Link to={`/book/${id}`} className="book__link">
                <img src={image} alt={title} className="book__image" />
                <h3 className="book__title">{title}</h3>
                <p className="book__author">Por {author}</p>


            </Link>
        </div>
    );
};

export default Book;