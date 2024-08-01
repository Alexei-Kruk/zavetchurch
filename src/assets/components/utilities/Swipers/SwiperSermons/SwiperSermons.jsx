import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css';

import '../styles/Swipers.css';

import arrowLeft from '../img/arrow-left.svg';
import arrowRight from '../img/arrow-right.svg';

export const SwiperSermons = () => {
  const [videos, setVideos] = useState([]);
  const apiKey = 'AIzaSyDgtpA3oFKmj_O4QaaeMg3N9CfIcYzSYB8'
  const channelId = 'UCmgOzUhlDitK9Epvr6YH5jA';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
        );
        const playlistData = await playlistResponse.json();

        const uploadsPlaylistId =
          playlistData.items[0].contentDetails.relatedPlaylists.uploads;

        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${uploadsPlaylistId}&key=${apiKey}`
        );
        const videosData = await videosResponse.json();

        const videoLinks = videosData.items.map(item => {
          return `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`;
        });

        setVideos(videoLinks);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [apiKey, channelId]);

  return (
    <>
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
          nextEl: '.my-swiper-button-next-s',
          prevEl: '.my-swiper-button-prev-s',
          clickable: true,
        }}
        loop={true}
        speed={800}
        autoplay={false}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.4}
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
          );
        })}
      </Swiper>

      <div className='swiper-button-prev my-swiper-button-prev-s'>
        <img src={arrowLeft} alt='<' />
      </div>
      <div className='swiper-button-next my-swiper-button-next-s'>
        <img src={arrowRight} alt='>' />
      </div>
      <div className='swiper-pagination'></div>
    </>
  );
};
