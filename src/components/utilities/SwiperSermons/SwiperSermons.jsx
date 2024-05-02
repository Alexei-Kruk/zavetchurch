import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import './SwiperSermons.css';

import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';


export const SwiperSermons = () => {
    const sermons = {
        id: [1, 2, 3, 4, 5],
        description: [
            'Любовь vs. «мир сей» - Даниил Пинкевич',
            'Односторонний договор - Руслан Сивачев',
            'Тест на доверие - Дмитрий Денисюк',
            'Загадка воскресения - Сергей Лукьянов',
            'Надежда на руинах - Сергей Лукьянов'
        ],
        data: [
            '28.04.2024',
            '21.04.2024',
            '14.04.2024',
            '31.03.2024',
            '17.03.2024'
        ],
        link: [
            'https://www.youtube.com/embed/F3BH6odTVrY?si=eczJ7p-N2lWtZ2ae',
            'https://www.youtube.com/embed/mMVtpA4DUkE?si=qq8VziUwSqDbhFuQ',
            'https://www.youtube.com/embed/Th4ye0hQBRw?si=lW6tUWqLSC9xHNkf',
            'https://www.youtube.com/embed/dhgl479jGFo?si=0y_a_Ez-9zpKBaND',
            'https://www.youtube.com/embed/zFFQrgjuf0M?si=DfFg1GqzK2U2_a43'
        ]
    };

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {sermons['id'].map((index) => {
                return (
                    <SwiperSlide className="video-block" key={index}>
                        <iframe
                            className="video__item"
                            width="560"
                            height="315"
                            src={sermons['link'][index - 1]}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>

                        <div className="video__description">
                            <p className="video__descriprion--text">
                                {sermons['description'][index - 1]}
                            </p>
                            <p className="video__descriprion--text">
                                {sermons['data'][index - 1]}
                            </p>
                        </div>
                    </SwiperSlide>
                );
            })}         
        </Swiper>
    ); 
}
