import React, { useState } from "react";
import Book from "./Book";
import SearchBar from "./SearchBar";  
import "../styles/BookList.css";

const BookList = ({ books })=> {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-list-container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 

      <div className="book-list">
        {filteredBooks.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            code={book.code}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;