import React from "react";
import "./AboutMe.css";
import myPhoto from '../../images/my-photo.jpg'

const AboutMe = () => {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__conteiner">
                <div className="about-me__info">
                    <h2 className="about-me__name">Виталий</h2>
                    <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
                        есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
                        в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
                        фриланс-заказами и ушёл с постоянной работы.</p>
                    <a href="https://github.com/AleksNau" className="about-me__github" target="_blank"
                       rel="noreferrer">Github</a>
                </div>
                <img src={myPhoto} className="about-me__photo" alt="author"></img>
            </div>
        </section>
    );
};

export default AboutMe;