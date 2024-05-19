import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import './../styles/Swipers.css';

import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/less/pagination';
import 'swiper/css';


export const SwiperBlog = () => {
    const videos = [
        'https://www.youtube.com/embed/IYVFGSJTy5M?si=auxKyqCKnpQ4MkmK',
        'https://www.youtube.com/embed/72UfFkMMmJk?si=z6RM0JA56WwZUfHB',
        'https://www.youtube.com/embed/fQzaWDScfk0?si=k5cFA_uBoRl8-Z3q',
        'https://www.youtube.com/embed/-Cl8WDn07_I?si=U9Aj4yXaXPNDze1B',
        'https://www.youtube.com/embed/mXzIwisdUZY?si=Uy2uxFELX25sRfT2'
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={400}
            slidesPerView={1}
            autoplay={false}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop
            speed={800}
            a11y={{ enabled: true }}
        >
            {videos.map((link, index) => {
                return (
                    <SwiperSlide className="video-block" key={index}>
                        <iframe
                            className="video__item"
                            width={560}
                            height={315}
                            src={link}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </SwiperSlide>
                );
            })}  
        </Swiper>
    ); 
}
