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
        <div className='container'>
            <div className="header" id='header'>
                <nav className="nav">
                    <ul className='nav-list'>
                        <a href='#header' className='nav__link'>
                            <NavItem text="Главная" />    
                        </a>
                        <a href='#aboutPage' className='nav__link'>
                            <NavItem text="О нас" />    
                        </a>
                        <a href='#sermonsPage' className='nav__link'>
                            <NavItem text="Проповеди" />
                        </a>
                        
                    </ul>
                    
                    <a href='#header' className='nav__link'>
                        <Logo />
                    </a>
                    

                    <ul className='nav-list'>
                        <a href='#blogPage' className='nav__link'> 
                            <NavItem text="Помилуй блог" />
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