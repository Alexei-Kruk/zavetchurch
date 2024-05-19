import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';

import './../styles/Swipers.css';

import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';


export const SwiperSermons = () => {
    const sermons = [
            'https://www.youtube.com/embed/F3BH6odTVrY?si=eczJ7p-N2lWtZ2ae',
            'https://www.youtube.com/embed/mMVtpA4DUkE?si=qq8VziUwSqDbhFuQ',
            'https://www.youtube.com/embed/Th4ye0hQBRw?si=lW6tUWqLSC9xHNkf',
            'https://www.youtube.com/embed/dhgl479jGFo?si=0y_a_Ez-9zpKBaND',
            'https://www.youtube.com/embed/zFFQrgjuf0M?si=DfFg1GqzK2U2_a43'
    ];

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
                pagination={{ clickable: true }}
                a11y={{ enabled: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                loop={true}
                speed={800}
                autoplay={false}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 80,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
            >
                {sermons.map((link, index) => {
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
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    ); 
}
