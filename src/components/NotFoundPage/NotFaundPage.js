import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFaundPage.css";

const NotFaundPage = () => {
    return (
        <section className="not-found-page">
            <h2 className="not-found-page__title">404</h2>
            <p className="not-found-page__text">Страница не найдена</p>
            <Link to="/" className="not-found-page__button">
                Назад
            </Link>
        </section>
    );
};

export default NotFaundPage;