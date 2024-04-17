import React from "react";
import './SermonsPage.css';
import UpArrow from "../../components/utilities/Arrows/UpArrow/UpArrow";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";

// import VideoPlayer from '../..components/VideoPlayer/VideoPlayer';

export const SermonsPage = () => {
    const videoId = 'Th4ye0hQBRw&ab_channel=ZavetChurch';

    return (
        <div id="sermonsPage">
            <a href="#aboutPage" className='link-style'>
                <UpArrow />
            </a>

            <div className='sermons-page-block'>
                <h1 className='sermons-page-title'>
                    Проповеди
                </h1>
                {/* <VideoPlayer videoId={videoId} /> */}
                    {/* <a href={https://www.youtube.com/watch?v=${videoId}} target="_blank" rel="noopener noreferrer">Ссылка на YouTube</a> */}
            </div>

            <a href="#blogPage" className='link-style'>
                <DownArrow />
            </a>
        </div>
    );
}
