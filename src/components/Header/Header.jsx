import React from 'react';

import Logo from '../utilities/Logo/Logo';
import './Header.css';


export const Header = () => {
    const NavItem = ({ text }) => {
        return (
            <li className='nav__item'>{text}</li>
        );
    };
    
    return (
        <div className='header-container' id='header'>
            <nav className="nav-block">
                <ul className='nav-block__item'>
                    <a href='#header' className='link-style'>
                        <NavItem text="Главная" />    
                    </a>
                    <a href='#aboutPage' className='link-style'>
                        <NavItem text="О нас" />    
                    </a>
                    <a href='#sermonsPage' className='link-style'>
                        <NavItem text="Проповеди" />
                    </a>
                    
                </ul>
                
                <a href='#header' className='link-style'>
                    <Logo />
                </a>
                

                <ul className='nav-block__item'>
                    <a href='#blogPage' className='link-style'> 
                        <NavItem text="Помилуй блог" />
                    </a>
                    <a href='#eventsPage' className='link-style'>
                        <NavItem text="Мероприятия" />
                    </a>
                    <a href='#contactsPage' className='link-style'>
                        <NavItem text="Контакты" />
                    </a>
                </ul>      
            </nav>
        </div>
    );
}