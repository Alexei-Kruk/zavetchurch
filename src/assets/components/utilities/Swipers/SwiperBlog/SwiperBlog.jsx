import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
	EffectCoverflow,
} from 'swiper/modules'

import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css'

import './../styles/Swipers.css'

import arrowLeft from '../img/arrow-left.svg'
import arrowRight from '../img/arrow-right.svg'

export const SwiperBlog = () => {
	const videos = [
		'https://www.youtube.com/embed/IYVFGSJTy5M?si=auxKyqCKnpQ4MkmK',
		'https://www.youtube.com/embed/72UfFkMMmJk?si=z6RM0JA56WwZUfHB',
		'https://www.youtube.com/embed/fQzaWDScfk0?si=k5cFA_uBoRl8-Z3q',
		'https://www.youtube.com/embed/-Cl8WDn07_I?si=U9Aj4yXaXPNDze1B',
		'https://www.youtube.com/embed/mXzIwisdUZY?si=Uy2uxFELX25sRfT2',
	]

	return (
		<div>
			<Swiper
				modules={[
					Navigation,
					Pagination,
					Scrollbar,
					A11y,
					Autoplay,
					EffectCoverflow,
				]}
				pagination={{ clickable: true }}
				a11y={{ enabled: true }}
				navigation={{
					nextEl: '.my-swiper-button-next-b',
					prevEl: '.my-swiper-button-prev-b',
					clickable: true,
				}}
				loop={true}
				speed={800}
				autoplay={false}
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={1.2}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 400,
					modifier: 1,
					slideShadows: false,
				}}
			>
				{videos.map((link, index) => {
					return (
						<SwiperSlide className='video-block' key={index}>
							<iframe
								className='video__item'
								width={560}
								height={315}
								src={link}
								title='YouTube video player'
								allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
								referrerPolicy='strict-origin-when-cross-origin'
								allowFullScreen
							></iframe>
						</SwiperSlide>
					)
				})}
			</Swiper>

			<div className='swiper-button-prev my-swiper-button-prev-b'>
				<img src={arrowLeft} alt='<' />
			</div>
			<div className='swiper-button-next my-swiper-button-next-b'>
				<img src={arrowRight} alt='>' />
			</div>
			<div className='swiper-pagination'></div>
		</div>
	)
}
