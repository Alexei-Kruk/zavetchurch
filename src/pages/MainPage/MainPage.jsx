import './MainPage.css';
import DownArrow from '../../assets/components/utilities/Arrows/DownArrow/DownArrow';

export const MainPage = () => {
	return (
		<div id='mainPage'>
			<div className='main-page'>
				<div className='main-page__block'>
					<h3 className='main-page__block_suptitle'>
						Добро пожаловать на официальный сайт церкви
					</h3>
					<h1 className='main-page__block_title'>Новый Завет</h1>
					<h3 className='main-page__block_subtitle'>
						Церковь в городе
					</h3>
				</div>

				<a href='#aboutPage' className='arrow__link'>
					<DownArrow />
				</a>
			</div>
		</div>
	);
};
