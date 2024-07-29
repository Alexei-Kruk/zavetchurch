import React, { useState } from 'react';
import '../styles/EventPage.css';
import homegroup from './home-group-img.png';

export const HomegroupPage = () => {
	const [showModalHomegroupPage, setShowModalHomegroupPage] = useState(false);

	const toggleModalHomegroupPage = () => {
		setShowModalHomegroupPage(!showModalHomegroupPage);
	};

	return (
		<div className='events-page-block'>
			<div className='event__item'>
				<img
					className='event__img'
					src={homegroup}
					alt='Изображение домашней группы'
				/>
				<div className='event__text'>
					<h2 className='event__title'>Домашние группы</h2>
					<button className='btn' onClick={toggleModalHomegroupPage}>
						Узнать подробнее
					</button>
				</div>
			</div>

			{showModalHomegroupPage && (
				<div className='background__glass-effect'>
					<div className='event-page__container'>
						<div className='block-title-and-description'>
							<h1 className='event-page__title'>
								Домашние группы
							</h1>
							<p className='event-page__description'>
								По вторникам мы собираемся по группам в разных
								районах города, где общаемся в небольших
								компаниях, обсуждаем насущные вопросы и читаем
								Священное Писание, чтобы найти для него
								практическое применение в жизни. Мы встречаемся
								в разных районах Минска каждый вторник в 19.00.
								Для тех, кому удобно собираться в центре города,
								есть группа, которая встречается недалеко от
								площади Победы в одной из популярных кофеен.
							</p>
						</div>

						<div className='block-adress'>
							<button
								className='close-btn'
								onClick={toggleModalHomegroupPage}
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
