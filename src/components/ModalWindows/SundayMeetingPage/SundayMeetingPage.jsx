import React, { useState } from "react";
import './SundayMeetingPage.css';
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
                <div className="sunday-meeting-background">
                    <div className="sunday-meeting-container">
                        <div className="block-title-and-description">
                            <h1 className="sm-title">
                                Воскресные собрания
                            </h1>
                            <p className="sm-description">
                                Каждое воскресенье мы встречаемся на литургию и прославляем вместе нашего Бога.
                                Слушаем Его Слово, вникаем в себя и в учение, а также проводим время в общении и в молитве.
                            </p>    
                        </div>

                        <div className="block-adress">
                            <h2 className="adress-title">
                                Где мы встречаемся
                            </h2>

                            <div className="adress-container">
                                <p className="adress__item">
                                    г. Минск, ул. Клумова, 20
                                    <br />
                                    Начало в 18:00
                                </p>     
                            </div>   
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
