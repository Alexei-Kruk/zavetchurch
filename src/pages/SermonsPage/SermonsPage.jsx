import React from "react";
import "./SermonsPage.css";
import UpArrow from "../../components/utilities/Arrows/UpArrow/UpArrow";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";
import SubscribeBtn from "../../components/Buttons/SubscribeBtn/SubscribeBtn";

export const SermonsPage = () => {
    return (
        <div id="sermonsPage">
            <a href="#aboutPage" className="link-style">
                <UpArrow />
            </a>

            <div className="sermons-page-block">
                <h1 className="sermons-page-title">Проповеди</h1>

                <div className="video-container">
                    <div className="video__block">
                        <div className="video__item">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/mMVtpA4DUkE?si=qq8VziUwSqDbhFuQ"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>

                            <p></p>
                        </div>
                        <div className="video__item">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/WF7de166EqE?si=VpBSQxPi3fMKKVEY"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>

                            <div className="video__description">
                                <p>"Ловец людей" - Сергей Лукьянов</p>    
                                <p>24.03.2024</p>    
                            </div>
                            
                        </div>
                        <div className="video__item">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/ZyTZ4moaMlQ?si=DnvS20sZghHOTp81"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>

                    <SubscribeBtn />
                </div>
            </div>

            <a href="#blogPage" className="link-style">
                <DownArrow />
            </a>
        </div>
    );
};
