import '../../assets/styles/VideosPage.css';

import UpArrow from '../../assets/components/utilities/Arrows/UpArrow/UpArrow';
import DownArrow from '../../assets/components/utilities/Arrows/DownArrow/DownArrow';
import { SwiperBlog } from '../../assets/components/utilities/Swipers/SwiperBlog/SwiperBlog';
import SubscribeBtn from '../../assets/components/utilities/Buttons/SubscribeBtn/SubscribeBtn';

export const BlogPage = () => {
	return (
		<div className='container' id='blogPage'>
			<a href='#sermonsPage' className='arrow__link'>
				<UpArrow />
			</a>

			<div className='videos-page-block'>
				<h1 className='page-title'>Помилуй блог</h1>

				<div className='video-container'>
					<div className='swiper__block'>
						<SwiperBlog />
					</div>

					<a
						href='https://www.youtube.com/@PomiluiBlog'
						target='_blank'
						className='link__youtube'
						rel='noreferrer'
					>
						<SubscribeBtn />
					</a>
				</div>
			</div>

			<a href='#eventsPage' className='arrow__link'>
				<DownArrow />
			</a>
		</div>
	);
};
