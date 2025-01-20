import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ cart = [], cartCount = 0, removeFromCart }) => {
    const [isCartVisible, setCartVisible] = useState(false);

    const toggleCart = () => {
        setCartVisible(!isCartVisible);
    };

    return (
        <header className="header">
            <div className="header__container">

                <nav className="header__nav">
                    <ul className="header__menu">
                        <li className="header__menu-item">
                            <Link to="/" className="header__menu-link">Inicio</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/books" className="header__menu-link">Libros</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/about" className="header__menu-link">Nosotros</Link>
                        </li>
                        <li className="header__menu-item">
                            <Link to="/contact" className="header__menu-link">Contacto</Link>
                        </li>
                    </ul>
                </nav>


                <div className="header__cart" onClick={toggleCart}>
                    <Link to="/cart">
                        <span role="img" aria-label="carrito">
                        👜
                        </span>
                        {cartCount > 0 && (
                            <span className="header__cart-count">{cartCount}</span>
                        )}
                    </Link>
                </div>

                {isCartVisible && (
                    <div className="header__cart-dropdown">
                        <h4>Carrito</h4>
                        <ul>
                            {cart.length > 0 ? (
                                cart.map((book) => (
                                    <li key={book.id}>
                                        {book.title}
                                        <button onClick={() => removeFromCart(book.id)}>Eliminar</button>
                                    </li>
                                ))
                            ) : (
                                <p>Tu carrito está vacío</p>
                            )}
                        </ul>
                        <Link to="/checkout">Ir al Checkout</Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
