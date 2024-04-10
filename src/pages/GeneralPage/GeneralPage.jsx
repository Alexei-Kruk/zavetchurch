import React from "react";

import { Header } from "../../components/Header/Header";
import { MainPage } from "../MainPage/MainPage";
import { AboutPage } from "../AboutPage/AboutPage";

// import './GeneralPage.css';


export const GeneralPage = () => {
    return (
        <div className="general-page-container">
            <Header />
            <MainPage />
            <AboutPage />
        </div>
    );
   
}
