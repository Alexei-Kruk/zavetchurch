import React from "react";
import "./SermonsPage.css";

import UpArrow from "../../components/utilities/Arrows/UpArrow/UpArrow";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";
import SubscribeBtn from "../../components/utilities/Buttons/SubscribeBtn/SubscribeBtn";
import { SwiperSermons } from "../../components/utilities/SwiperSermons/SwiperSermons";


export const SermonsPage = () => {
    return (
        <div id="sermonsPage">
            <a href="#aboutPage" className="link-style">
                <UpArrow />
            </a>

            <div className="sermons-page-block">
                <h1 className="sermons-page-title">Проповеди</h1>

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

            <a href="#blogPage" className="link-style">
                <DownArrow />
            </a>
        </div>
    );
};
