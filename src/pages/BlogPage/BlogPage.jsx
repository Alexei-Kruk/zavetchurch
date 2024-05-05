import React from "react";
import './BlogPage.css';
import UpArrow from "../../components/utilities/Arrows/UpArrow/UpArrow";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";
import { SwiperBlog } from "../../components/utilities/Swipers/SwiperBlog/SwiperBlog";
import SubscribeBtn from "../../components/utilities/Buttons/SubscribeBtn/SubscribeBtn";

export const BlogPage = () => {
    return (
        <div id="blogPage">
            <a href="#sermonsPage" className='link-style'>
                <UpArrow />
            </a>

            <div className="sermons-page-block">
                <h1 className="sermons-page-title">Помилуй блог</h1>

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

            <a href="#eventsPage" className='link-style'>
                <DownArrow />
            </a>
        </div>
    );
}
