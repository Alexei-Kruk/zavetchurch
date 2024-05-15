import React, { useState } from "react";

import Logo from "../../utilities/Logo/Logo";
import MenuBurgerIcon from "./img/menu-burger-icon.svg";
import CloseMenuBurgerIcon from "./img/close-icon.svg";

import "./HeaderSmallMenu.css";

export const HeaderSmallMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const menuItems = [
        { text: "Главная", href: "#header" },
        { text: "О нас", href: "#aboutPage" },
        { text: "Проповеди", href: "#sermonsPage" },
        { text: "Блог", href: "#blogPage" },
        { text: "Мероприятия", href: "#eventsPage" },
        { text: "Контакты", href: "#contactsPage" },
    ];

    const NavItem = ({ text, href }) => {
        return (
            <li className="nav__item-small-menu">
                <a href={href} className="nav__link" onClick={toggleMenu}>
                    {text}
                </a>
            </li>
        );
    };

    return (
        <div className="container">
            <div className="header-small-menu" id="header-small-menu">
                <nav className="nav-small-menu">
                    <a href="#header" className="nav__link">
                        <Logo />
                    </a>

                    <img
                        className="btn-img"
                        onClick={toggleMenu}
                        src={MenuBurgerIcon}
                        alt=""
                    />

                    {menuOpen && (
                        <div className="menu-burger">
                            <div className="menu-burger__logo">
                                <Logo />
                            </div>

                            <img
                                className="btn-img__close"
                                onClick={toggleMenu}
                                src={CloseMenuBurgerIcon}
                                alt=""
                            />

                            <ul className="nav-small-menu-list">
                                {menuItems.map((item, index) => (
                                    <NavItem key={index} text={item.text} href={item.href} />
                                ))}
                            </ul>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
};
