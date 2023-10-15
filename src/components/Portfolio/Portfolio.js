import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a href="https://github.com/" className="portfolio__link" target="_blank"
                       rel="noreferrer"><span>Статичный сайт</span>
                        <span className="portfolio__link-image">&#x2197;</span></a>
                </li>
                <li className="portfolio__item">
                    <a href="https://github.com/" className="portfolio__link" target="_blank"
                       rel="noreferrer"><span>Адаптивный сайт</span>
                        <span className="portfolio__link-image">&#x2197;</span></a>
                </li>
                <li className="portfolio__item">
                    <a href="https://github.com/" className="portfolio__link" target="_blank"
                       rel="noreferrer"><span>Одностраничное приложение</span>
                        <span className="portfolio__link-image">&#x2197;</span></a>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;