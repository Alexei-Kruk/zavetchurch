import React from "react";
import './BlogPage.css';
import UpArrow from "../../components/utilities/Arrows/UpArrow/UpArrow";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";

export const BlogPage = () => {
    return (
        <div id="blogPage">
            <a href="#sermonsPage" className='link-style'>
                <UpArrow />
            </a>

            <div className='blog-page-block'>
                <h1 className='blog-page-title'>
                    Помилуй Блог
                </h1>
            </div>

            <a href="#eventsPage" className='link-style'>
                <DownArrow />
            </a>
        </div>
    );
}
