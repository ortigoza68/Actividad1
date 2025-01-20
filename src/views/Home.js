import React from "react";
import BookList from "../components/BookList";
import books from "../data/books";
import '../styles/Home.css';
const Home = () => {

  return (
    <div className="home">
      <h1 className="home__header">MILIBROMX</h1>

      <BookList books={books} />
    </div>
  );
};

export default Home;