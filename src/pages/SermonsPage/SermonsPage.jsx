import '../../assets/styles/VideosPage.css';

import UpArrow from '../../assets/components/utilities/Arrows/UpArrow/UpArrow';
import DownArrow from '../../assets/components/utilities/Arrows/DownArrow/DownArrow';
import SubscribeBtn from '../../assets/components/utilities/Buttons/SubscribeBtn/SubscribeBtn';
import { SwiperSermons } from '../../assets/components/utilities/Swipers/SwiperSermons/SwiperSermons';

export const SermonsPage = () => {
	return (
		<div className='container' id='sermonsPage'>
			<a href='#aboutPage' className='arrow__link'>
				<UpArrow />
			</a>

			<div className='videos-page-block'>
				<h1 className='page-title'>Проповеди</h1>

				<div className='video-container'>
					<div className='swiper__block'>
						<SwiperSermons />
					</div>

					<a
						href='https://www.youtube.com/@ZavetChurch'
						target='_blank'
						className='link__youtube'
						rel='noreferrer'
					>
						<SubscribeBtn />
					</a>
				</div>
			</div>

			<a href='#blogPage' className='arrow__link'>
				<DownArrow />
			</a>
		</div>
	);
};
