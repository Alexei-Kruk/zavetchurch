import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import './../styles/Swipers.css';

import 'swiper/swiper-bundle.css';
import 'swiper/less/navigation';
import 'swiper/less/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';


export const SwiperSermons = () => {
    const sermons = {
        id: [1, 2, 3, 4, 5],
        links: [
            'https://www.youtube.com/embed/F3BH6odTVrY?si=eczJ7p-N2lWtZ2ae',
            'https://www.youtube.com/embed/mMVtpA4DUkE?si=qq8VziUwSqDbhFuQ',
            'https://www.youtube.com/embed/Th4ye0hQBRw?si=lW6tUWqLSC9xHNkf',
            'https://www.youtube.com/embed/dhgl479jGFo?si=0y_a_Ez-9zpKBaND',
            'https://www.youtube.com/embed/zFFQrgjuf0M?si=DfFg1GqzK2U2_a43'
        ]
    };

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={400}
            slidesPerView={1}
            autoplay={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop
            speed={800}
            a11y={{ enabled: true }}
        >
            {sermons['id'].map((index) => {
                return (
                    <SwiperSlide className="video-block" key={index}>
                        <iframe
                            className="video__item"
                            width={560}
                            height={315}
                            src={sermons['links'][index - 1]}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                        
                        {/* <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div> */}
                    </SwiperSlide>
                );
            })}         
        </Swiper>
    ); 
}
