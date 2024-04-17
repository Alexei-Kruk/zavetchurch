import React, { useState } from "react";
import '../styles/EventPage.css';
import breakfast from './breakfast-img.png';


export const MenBreakfastPage = () => {
    const [showModalMenBreakfastPage, setShowModalMenBreakfastPage] = useState(false);

    const toggleModalMenBreakfastPage = () => {
        setShowModalMenBreakfastPage(!showModalMenBreakfastPage);
    };

    return (
        <div>
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
                    <button
                        className="btn"
                        onClick={toggleModalMenBreakfastPage}
                    >
                        Узнать подробнее
                    </button>
                </div>
            </div>

            {showModalMenBreakfastPage && (
                <div className="background__glass-effect">
                    <div className="event-page__container">
                        <div className="block-title-and-description">
                            <h1 className="event-page__title">
                                Мужские завтраки
                            </h1>
                            <p className="event-page__description">
                                Каждую среду в 8.30 мы встречаемся и пьем кофе в мужской компании.
                                Обсуждаем насущные темы, молимся друг за друга, ободряем и поддерживаем.
                                Мужской завтрак - это время, после которого каждый получает заряд бодрости на весь день.
                            </p>    
                        </div>

                        <div className="block-adress">
                            <h2 className="adress__title">
                                Где мы встречаемся
                            </h2>
                            
                            <p className="adress__item">
                                Кафе периодически меняются, потому для уточнения информации свяжитесь
                                с Тимофеем по телефону или в мессенджере.
                                <br />
                                +375-29-57-444-58
                            </p>

                            <button
                                className="close-btn"
                                onClick={toggleModalMenBreakfastPage}
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