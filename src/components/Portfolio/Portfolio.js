import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a href="https://github.com/" className="portfolio__link">Статичный сайт</a>
                    <span className="portfolio__link-image">&#x2197;</span>
                </li>
                <li className="portfolio__item">
                    <a href="https://github.com/" className="portfolio__link">Адаптивный сайт</a>
                    <span className="portfolio__link-image">&#x2197;</span>
                </li>
                <li className="portfolio__item">
                    <a href="https://github.com/" className="portfolio__link">Одностраничное приложение</a>
                    <span className="portfolio__link-image">&#x2197;</span>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;