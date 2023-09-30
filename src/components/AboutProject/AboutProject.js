import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
    return (
        <section className="about-project">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__conteiner">
                <div className="about-project__description">
                    <p className="about-project__subtitle">Дипломный проект включал 5 этапов</p>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__description">
                    <p className="about-project__subtitle">На выполнение диплома ушло 5 недель</p>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__timeline">
                <p className="about-project__weeks">1 неделя</p>
                <p className="about-project__weeks">4 недели</p>
                <p className="about-project__stack">Back-end</p>
                <p className="about-project__stack">Front-end</p>
            </div>
        </section>
    );
};

export default AboutProject;