import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section footer__section--about">
                    <h3 className="footer__title">MILIBROMX</h3>
                    <p className="footer__description">
                        Tienda de libros.
                    </p>
                </div>
                <div className="footer__section footer__section--social">
                    <h4 className="footer__subtitle">SIGUENOS EN </h4>
                    <ul className="footer__social-list">
                    <li className="footer__social-item">Instagram</li>
                    <li className="footer__social-item">X</li>
                    <li className="footer__social-item">Facebook</li>

                    </ul>
                </div>
                <div className="footer__section footer__section--contact">
                    <h4 className="footer__subtitle">CONTACTO</h4>
                    <ul className="footer__list">
                    <li className="footer__item">Dirección: Av. uno, 123</li>
                        <li className="footer__item">Email: contacto@relatosdepapel.com</li>
                        <li className="footer__item">Teléfono: +52 272 214 21 24</li>

                    </ul>
                </div>


            </div>

            <div className="footer__bottom">
                <p className="footer__copyright">
                    &copy; 2025 milibromx. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;