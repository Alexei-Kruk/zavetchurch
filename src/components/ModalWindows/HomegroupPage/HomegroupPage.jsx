import React from "react";


export default function HomegroupPage() {
    return (
        <div className="homegroup-container">
            <div className="block-title-and-description">
                <h1 className="hg-title">
                    Домашние группы
                </h1>
                <p className="hg-description">
                    Каждый вторник в 19:00 у нас проходят малые группы в разных районах города.
                    Это время, где мы можем пообщаться в небольшой компании и обсудить важные друг для друга вопросы.
                    Время, когда мы можем погрузиться в Священное писание или другую интересную книгу и
                    вместе обсудить прочитанное.
                </p>    
            </div>

            <div className="block-adress">
                <h6 className="adress-title">
                    Где мы встречаемся
                </h6>

                <div className="adress-container">
                    <p className="adress__item">
                        Кафе - 'One More'
                        <br />
                        Адрес: г. Минск, ул. Киселева, 11
                    </p>

                    <p className="adress__item">
                        Домашняя группа у Алексея
                        <br />
                        Адрес: а.г. Сеница, ул. Западная, 9
                    </p>

                    <p className="adress__item">
                        Домашняя группа у Дмитрия
                        <br />
                        Адрес: г. Минск, ул. И.Жиновича, 20
                    </p>

                    <p className="adress__item">
                        Женская домашняя группа
                        <br />
                        Адрес: г. Минск, ул. Данилы Сердича, 24    
                    </p>      
                </div>   
            </div> 
        </div>    
    );
}
