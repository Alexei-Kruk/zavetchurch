import "./ContactsPage.css";
import UpArrow from "../../assets/components/utilities/Arrows/UpArrow/UpArrow";

import telegramIcon from "./img/telegram-icon.svg";
import instagramIcon from "./img/instagram-icon.svg";
import tiktokIcon from "./img/tik-tok-icon.svg";
import facebookIcon from "./img/facebook-icon.svg";
import youtubeIcon from "./img/youtube-icon.svg";
import fullLogo from "./img/white-logo-full.png";


export const ContactsPage = () => {
    const contacts_data = [
        {
            id: 1,
            link: "https://telegram.me/@zavetchurch",
            img: telegramIcon,
            alt: "Telegram Icon",
            name: "Telegram",
        },
        {
            id: 2,
            link: "https://www.instagram.com/zavetchurch",
            img: instagramIcon,
            alt: "Instagram Icon",
            name: "Instagram",
        },
        {
            id: 3,
            link: "https://www.tiktok.com/@zavetchurch?lang=en",
            img: tiktokIcon,
            alt: "TikTok Icon",
            name: "TikTok",
        },
        {
            id: 4,
            link: "https://www.facebook.com/zavetchurch",
            img: facebookIcon,
            alt: "Facebook Icon",
            name: "Facebook",
        },
        {
            id: 5,
            link: "https://www.youtube.com/@ZavetChurch",
            img: youtubeIcon,
            alt: "Youtube Icon",
            name: "YouTube",
        },
    ];

    return (
        <div className="container contact__wrapper" id="contactsPage">
            <a href="#eventsPage" className="arrow__link">
                <UpArrow />
            </a>

            <div className="contacts-page-block">
                <div>
                    {contacts_data.map(({ id, link, img, alt, name }) => (
                        <a
                            key={id}
                            href={link}
                            className="link-contacts"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="contacts__img"
                                src={img}
                                alt={alt}
                            />
                            <span className="link-description">{name}</span>
                        </a>
                    ))}
                </div>

                <h1 className="follow-text">
                    Подписывайтесь на нас и следите за новостями
                </h1>

                <div className="full-logo">
                    <a href="#header-small-menu" className="nav__link">
                        <img
                            className="full-logo-img"
                            src={fullLogo}
                            alt="logo"
                        />
                    </a>
                </div>
            </div>

            <footer className='footer'>
                <span className="footer__link">
                    Разработка сайта: <a className='footer__link_dev' href='https://www.linkedin.com/in/alexei-kruk/' target='_blank' rel='noreferrer'>Алексей Крук</a>
                </span>
            </footer>
        </div>
    );
};
