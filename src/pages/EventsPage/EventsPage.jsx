import React from "react";

import './EventsPage.css';

import UpArrow from "../../components/utilities/Arrows/UpArrow/UpArrow";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";

import hometeam from './img/home-team-img.png';
import sermons from './img/sermons-img.jpg'
import breakfast from './img/breakfast-img.png';
import { LearnMoreBtn } from "../../components/utilities/Buttons/LearnMoreBTN/LearnMoreBtn";


export const EventsPage = () => {
    return (
        <div className="events-page-container">
            <UpArrow />

            <div className="event-name-page__item">
                <h1 className="event-name-page">
                    Мероприятия
                </h1>
            </div>

            <div className="events-page-block">
                <div className="event__item">
                    <img
                        className="event__img"
                        src={hometeam}
                        alt='Изображение домашней группы'
                    />
                    <div className="event__text">
                        <h2 className="event__title">
                            Домашние группы
                        </h2>
                        <LearnMoreBtn />
                    </div>
                </div>

                <div className="event__item">
                    <img
                        className="event__img"
                        src={sermons}
                        alt='Изображение собрания'
                    />
                    <div className="event__text">
                        <h2 className="event__title">
                            Воскресные собрания
                        </h2>
                        <LearnMoreBtn />
                    </div>
                </div>

                <div className="event__item">
                    <img
                        className="event__img"
                        src={breakfast}
                        alt='Изображение мужских завтраков'
                    />
                    <div className="event__text">
                        <h2 className="event__title">
                            Мужские завтраки
                        </h2>
                        <LearnMoreBtn />
                    </div>
                </div>
            </div>

            <DownArrow />
        </div>
    );
}
