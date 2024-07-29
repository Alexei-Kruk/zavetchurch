import Logo from '../utilities/Logo/Logo';
import './Header.css';

export const Header = () => {
	const NavItem = ({ text }) => {
		return <li className='nav__item'>{text}</li>;
	};

	return (
		<header id='header'>
			<nav className='nav'>
				<ul className='nav__list'>
					<a href='#header' className='nav__list_link'>
						<NavItem text='Главная' />
					</a>
					<a href='#aboutPage' className='nav__list_link'>
						<NavItem text='О нас' />
					</a>
					<a href='#sermonsPage' className='nav__list_link'>
						<NavItem text='Проповеди' />
					</a>
				</ul>

				<a href='#header' className='nav__list_link'>
					<Logo />
				</a>

				<ul className='nav__list'>
					<a href='#blogPage' className='nav__list_link'>
						<NavItem text='Блог' />
					</a>
					<a href='#eventsPage' className='nav__list_link'>
						<NavItem text='Мероприятия' />
					</a>
					<a href='#contactsPage' className='nav__list_link'>
						<NavItem text='Контакты' />
					</a>
				</ul>
			</nav>
		</header>
	);
};
