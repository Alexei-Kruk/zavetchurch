import './EventsPage.css';

import UpArrow from "../../assets/components/utilities/Arrows/UpArrow/UpArrow";
import DownArrow from "../../assets/components/utilities/Arrows/DownArrow/DownArrow";
import { HomegroupPage } from "../../assets/components/ModalWindows/HomegroupPage/HomegroupPage";
import { SundayMeetingPage } from "../../assets/components/ModalWindows/SundayMeetingPage/SundayMeetingPage";
import { MenBreakfastPage } from "../../assets/components/ModalWindows/MenBreakfastPage/MenBreakfastPage";


export const EventsPage = () => {
    return (
        <div className='container' id="eventsPage">
            <a href="#blogPage" className='arrow__link'>
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
            
            <a href="#contactsPage" className='arrow__link'>
                <DownArrow />
            </a>
        </div>
    );
}
