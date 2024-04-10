import React from "react";
import "./MainPage.css";
import ArrowScroll from "../../components/utilities/Arrow/ArrowScroll";

export default function Main() {
    return (
        <div>
            <div className="title-block">
                <h3 className="title-welcome text-align-center">
                    Добро пожаловать на официальный сайт церкви
                </h3>
                <h1 className="title-name text-align-center">Новый Завет</h1>
                <h3 className="title-tagline text-align-center">От темноты до светла</h3>
            </div>
            
            <ArrowScroll />
        </div>
    );
}
