import React from "react";
import "./../../styles/VideosPage.css";

import UpArrow from "../../components/utilities/Arrows/UpArrow/UpArrow";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";
import { SwiperBlog } from "../../components/utilities/Swipers/SwiperBlog/SwiperBlog";
import SubscribeBtn from "../../components/utilities/Buttons/SubscribeBtn/SubscribeBtn";

export const BlogPage = () => {
    return (
        <div id="blogPage">
            <a href="#sermonsPage" className='arrow__link'>
                <UpArrow />
            </a>

            <div className="videos-page-block">
                <h1 className="page-title">Помилуй блог</h1>

                <div className="video-container">

                    <div className="swiper__block">
                        <SwiperBlog />    
                    </div>
                    
                    <a
                        href="https://www.youtube.com/@PomiluiBlog"
                        target="_blank"
                        className="link__youtube"
                        rel="noreferrer"
                    >
                        <SubscribeBtn />
                    </a>
                </div>
            </div>

            <a href="#eventsPage" className='arrow__link'>
                <DownArrow />
            </a>
        </div>
    );
}
