import React from "react";
import "./MainPage.css";
import DownArrow from "../../components/utilities/Arrows/DownArrow/DownArrow";


export const MainPage = () => {
    return (
        <div>
            <div className="title-block">
                <h3 className="title-welcome text-align-center">
                    Добро пожаловать на официальный сайт церкви
                </h3>
                <h1 className="title-name text-align-center">
                    Новый Завет
                </h1>
                <h3 className="title-tagline text-align-center">
                    Церковь в городе
                </h3>
            </div>
            
            <DownArrow />
        </div>
    );
}
