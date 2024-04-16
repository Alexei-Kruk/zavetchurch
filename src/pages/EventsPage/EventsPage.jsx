import React from "react";

import './EventsPage.css';

import UpArrow from "../../components/utilities/Arrows/UpArrow/UpArrow";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";
import { HomegroupPage } from "../../components/ModalWindows/HomegroupPage/HomegroupPage";
import { SundayMeetingPage } from "../../components/ModalWindows/SundayMeetingPage/SundayMeetingPage";

import breakfast from './img/breakfast-img.png';


export const EventsPage = () => {
    return (
        <div id="eventsPage">
            <a href="#blogPage" className='link-style'>
                <UpArrow />
            </a>

            <div className="event-name-page__item">
                <h1 className="event-name-page">
                    Мероприятия
                </h1>
            </div>

            <HomegroupPage />

            <SundayMeetingPage />

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
                    </div>
                </div>

            <a href="#contactsPage" className='link-style'>
                <DownArrow />
            </a>
        </div>
    );
}
