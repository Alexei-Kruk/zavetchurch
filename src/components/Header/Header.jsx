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
        <nav className='header-container'>
            <div className="nav-block">
                <ul className='nav-block__item'>
                    <NavItem text="Главная" />
                    <NavItem text="О нас" />
                    <NavItem text="Проповеди" />
                </ul>
                
                <Logo />

                <ul className='nav-block__item'>
                    <NavItem text="Блог" />
                    <NavItem text="Мероприятия" />
                    <NavItem text="Контакты" />
                </ul>      
            </div>
        </nav>
    );
}