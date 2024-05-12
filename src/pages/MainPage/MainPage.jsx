import React from "react";
import "./MainPage.css";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";


export const MainPage = () => {
    return (
        <div id="mainPage" className="wrapper__intro">
            <div className="container">
                <div className="intro-block">
                    <h3 className="intro__suptitle">
                        Добро пожаловать на официальный сайт церкви
                    </h3>
                    <h1 className="intro__title">
                        Новый Завет
                    </h1>
                    <h3 className="intro__subtitle">
                        Церковь в городе
                    </h3>
                </div>
                
                <a href="#aboutPage" className='arrow__link'>
                    <DownArrow />
                </a>    
            </div>
        </div>
    );
}
