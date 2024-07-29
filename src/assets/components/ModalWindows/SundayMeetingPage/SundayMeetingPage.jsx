import React, { useState } from "react";
import '../styles/EventPage.css';
import sermons from './sermons-img.jpg';


export const SundayMeetingPage = () => {
    const [showModalSundayMeetingPage, setShowModalSundayMeetingPage] = useState(false);

    const openModalSundayMeetingPage = () => {
        setShowModalSundayMeetingPage(true);
    };

    const closeModalSundayMeetingPage = () => {
        setShowModalSundayMeetingPage(false);
    };

    return (
        <div className="events-page-block">
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
                    <button
                        className="btn"
                        onClick={openModalSundayMeetingPage}
                    >
                        Узнать подробнее
                    </button>
                </div>
            </div>

            {showModalSundayMeetingPage && (
                <div className="background__glass-effect">
                    <div className="event-page__container">
                        <div className="block-title-and-description">
                            <h1 className="event-page__title">
                                Воскресные собрания
                            </h1>
                            <p className="event-page__description">
                                Воскресная литургия это особое мероприятие, когда все члены нашей дружной общины встречаются для того, чтобы услышать Слово, вместе помолиться и поклониться Небесному Богу. После собрания вас ждет уютное общение за чашкой кофе.
                            </p>    
                        </div>

                        <div className="block-adress">
                            <button
                                className="close-btn"
                                onClick={closeModalSundayMeetingPage}
                            >
                                Закрыть
                            </button>
                        </div> 
                    </div> 
                </div>
            )}
        </div>    
    );
}
