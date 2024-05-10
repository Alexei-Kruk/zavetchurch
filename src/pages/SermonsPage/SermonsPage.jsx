import React from "react";
import "./../../styles/VideosPage.css";

import UpArrow from "../../components/utilities/Arrows/UpArrow/UpArrow";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";
import SubscribeBtn from "../../components/utilities/Buttons/SubscribeBtn/SubscribeBtn";
import { SwiperSermons } from "../../components/utilities/Swipers/SwiperSermons/SwiperSermons";


export const SermonsPage = () => {
    return (
        <div className="container" id="sermonsPage">
            <a href="#aboutPage" className="nav__link">
                <UpArrow />
            </a>

            <div className="videos-page-block">
                <h1 className="page-title">Проповеди</h1>

                <div className="video-container">

                    <div className="swiper__block">
                        <SwiperSermons />    
                    </div>
                    
                    <a
                        href="https://www.youtube.com/@ZavetChurch"
                        target="_blank"
                        className="link__youtube"
                        rel="noreferrer"
                    >
                        <SubscribeBtn />
                    </a>
                </div>
            </div>

            <a href="#blogPage" className="nav__link">
                <DownArrow />
            </a>
        </div>
    );
};
