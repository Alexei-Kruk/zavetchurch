import React from "react";
import './ContactsPage.css';
import UpArrow from "../../components/utilities/Arrows/UpArrow/UpArrow";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";

import telegramIcon from './img/telegram-icon.svg';
import instagramIcon from './img/instagram-icon.svg';
import tiktokIcon from './img/tik-tok-icon.svg';
import facebookIcon from './img/facebook-icon.svg';
import youtubeIcon from './img/youtube-icon.svg';
import fullLogo from './img/white-logo-full.png';


export const ContactsPage = () => {
    return (
        <div id="contactsPage">
            <a href="#eventsPage" className='link-style'>
                <UpArrow />
            </a>

            <div className="contacts-page-block">
                <div className="icons-block">
                    <img
                        className="contacts__img"
                        src={telegramIcon}
                        alt='telegram'
                    />
                    <img
                        className="contacts__img"
                        src={instagramIcon}
                        alt='instagram'
                    />
                    <img
                        className="contacts__img"
                        src={tiktokIcon}
                        alt='tiktok'
                    />
                    <img
                        className="contacts__img"
                        src={facebookIcon}
                        alt='facebook'
                    />
                    <img
                        className="contacts__img"
                        src={youtubeIcon}
                        alt='youtube'
                    />
                </div>

                <h1 className="follow-text">
                    Подписывайтесь на нас и следите за новостями
                </h1>

                <div className="contacts-data">
                    <p className="contacts-data__item">
                        г.Минск, ул.Клумова, 20
                    </p>
                    <p className="contacts-data__item">
                        Phone: +375 29 57 444 58
                    </p>
                    <p className="contacts-data__item">
                        Email: alexxxkruk@gmail.com
                    </p>
                </div>

                <div className="full-logo">
                    <a href='#mainPage' className='link-style'>
                        <img
                            className="full-logo-img"
                            src={fullLogo}
                            alt='logo'
                        />
                    </a> 
                </div>
            </div>
        </div>
    );
}
