import React from "react";
import './EventsPage.css';

import UpArrow from "../../components/utilities/Arrows/UpArrow/UpArrow";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";
import { HomegroupPage } from "../../components/ModalWindows/HomegroupPage/HomegroupPage";
import { SundayMeetingPage } from "../../components/ModalWindows/SundayMeetingPage/SundayMeetingPage";
import { MenBreakfastPage } from "../../components/ModalWindows/MenBreakfastPage/MenBreakfastPage";


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

            <div className="block-page-event">
                <HomegroupPage />
                <SundayMeetingPage />
                <MenBreakfastPage />    
            </div>
            
            <a href="#contactsPage" className='link-style'>
                <DownArrow />
            </a>
        </div>
    );
}
