import React, { useState } from 'react';
import '../styles/EventPage.css';
import breakfast from './breakfast-img.png';

export const MenBreakfastPage = () => {
	const [showModalMenBreakfastPage, setShowModalMenBreakfastPage] =
		useState(false);

	const toggleModalMenBreakfastPage = () => {
		setShowModalMenBreakfastPage(!showModalMenBreakfastPage);
	};

	return (
		<div>
			<div className='event__item'>
				<img
					className='event__img'
					src={breakfast}
					alt='Изображение мужских завтраков'
				/>
				<div className='event__text'>
					<h2 className='event__title'>Мужские завтраки</h2>
					<button
						className='btn'
						onClick={toggleModalMenBreakfastPage}
					>
						Узнать подробнее
					</button>
				</div>
			</div>

			{showModalMenBreakfastPage && (
				<div className='background__glass-effect'>
					<div className='event-page__container'>
						<div className='block-title-and-description'>
							<h1 className='event-page__title'>
								Мужские завтраки
							</h1>
							<p className='event-page__description'>
								По средам в 8.30 наши парни встречаются на
								мужской завтрак, чтобы обсудить интересные
								книги, актуальные темы и помолиться друг за
								друга. Это наша давняя традиция с 2015 года,
								благодаря которой мы много говорим о богословии
								и практике христианской жизни.
							</p>
						</div>

						<div className='block-adress'>
							<button
								className='close-btn'
								onClick={toggleModalMenBreakfastPage}
							>
								Закрыть
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
