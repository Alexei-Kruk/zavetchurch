import { Header } from './assets/components/Header/Header';
import { MainPage } from './pages/MainPage/MainPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { SermonsPage } from './pages/SermonsPage/SermonsPage';
import { BlogPage } from './pages/BlogPage/BlogPage';
import { EventsPage } from './pages/EventsPage/EventsPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
// import { HeaderSmallMenu } from '../../components/Header/HeaderSmallMenu/HeaderSmallMenu';

import './assets/styles/app.css';

export default function App() {
	return (
		<div className='app'>
			<Header />
			{/* <HeaderSmallMenu /> */}
			<MainPage />
			<hr />
			<AboutPage />
			<hr />
			<SermonsPage />
			<hr />
			<BlogPage />
			<hr />
			<EventsPage />
			<hr />
			<ContactsPage />
		</div>
	);
};
