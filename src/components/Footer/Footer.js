import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__conteiner">
                <p className="footer__date">© 2020</p>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a
                        href="https://github.com/"
                        className="footer__link"
                        target="_blank"
                        rel="noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__item">
                        <a
                        href="https://practicum.yandex.ru/"
                        className="footer__link"
                        target="_blank"
                        rel="noreferrer">Github</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;