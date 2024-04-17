import React, { useState } from "react";
import '../styles/EventPage.css';
import homegroup from './home-group-img.png';


export const HomegroupPage = () => {
    const [showModalHomegroupPage, setShowModalHomegroupPage] = useState(false);

    const toggleModalHomegroupPage = () => {
        setShowModalHomegroupPage(!showModalHomegroupPage);
    };

    return (
        <div className="events-page-block">
            <div className="event__item">
                <img
                    className="event__img"
                    src={homegroup}
                    alt='Изображение домашней группы'
                />
                <div className="event__text">
                    <h2 className="event__title">
                        Домашние группы
                    </h2>
                    <button
                        className="btn"
                        onClick={toggleModalHomegroupPage}
                    >
                        Узнать подробнее
                    </button>
                </div>
            </div>

            {showModalHomegroupPage && (
                <div className="background__glass-effect">
                    <div className="event-page__container">
                        <div className="block-title-and-description">
                            <h1 className="event-page__title">
                                Домашние группы
                            </h1>
                            <p className="event-page__description">
                                Каждый вторник в 19:00 у нас проходят малые группы в разных районах города.
                                Это время, где мы можем пообщаться в небольшой компании и обсудить важные друг для друга вопросы.
                                Время, когда мы можем погрузиться в Священное писание или другую интересную книгу и
                                вместе обсудить прочитанное.
                            </p>    
                        </div>

                        <div className="block-adress">
                            <h2 className="adress__title">
                                Где мы встречаемся
                            </h2>
                            
                            <p className="adress__item">
                                Кафе - "One More"
                                <br />
                                г. Минск, ул. Киселева, 11
                            </p>
                            <p className="adress__item">
                                Домашняя группа у Алексея
                                <br />
                                а.г. Сеница, ул. Западная, 9
                            </p>
                            <p className="adress__item">
                                Домашняя группа у Дмитрия
                                <br />
                                г. Минск, ул. И.Жиновича, 20
                            </p>
                            <p className="adress__item">
                                Женская домашняя группа
                                <br />
                                г. Минск, ул. Данилы Сердича, 24
                            </p>     

                            <button
                                className="close-btn"
                                onClick={toggleModalHomegroupPage}
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