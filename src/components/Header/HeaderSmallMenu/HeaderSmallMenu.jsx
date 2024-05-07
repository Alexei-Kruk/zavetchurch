import React from 'react';

import Logo from '../../utilities/Logo/Logo';
import './HeaderSmallMenu.css';
import DownArrow from '../../utilities/Arrows/DownArrow/DownArrow';


export const HeaderSmallMenu = () => {
    const NavItem = ({ text }) => {
        return (
            <li className='nav__item-small-menu'>{text}</li>
        );
    };
    
    return (
        <div className='container'>
            <div className="header-small-menu" id='header'>
                <nav className="nav-small-menu">
                    <a href='#header' className='nav__link'>
                        <Logo />
                    </a>

                    <DownArrow />
                    
                    <ul className='nav-small-menu-list'>
                        <a href='#header' className='nav__link'>
                            <NavItem text="Главная" />    
                        </a>
                        <a href='#aboutPage' className='nav__link'>
                            <NavItem text="О нас" />    
                        </a>
                        <a href='#sermonsPage' className='nav__link'>
                            <NavItem text="Проповеди" />
                        </a>
                        <a href='#blogPage' className='nav__link'> 
                            <NavItem text="Блог" />
                        </a>
                        <a href='#eventsPage' className='nav__link'>
                            <NavItem text="Мероприятия" />
                        </a>
                        <a href='#contactsPage' className='nav__link'>
                            <NavItem text="Контакты" />
                        </a>
                    </ul>      
                </nav>    
            </div>
        </div>
    );
}