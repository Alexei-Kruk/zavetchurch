import React from "react";
import './GeneralPage.css';

import { Header } from "../../components/Header/Header";
import { MainPage } from "../MainPage/MainPage";
import { AboutPage } from "../AboutPage/AboutPage";
import { EventsPage } from "../EventsPage/EventsPage";


export const GeneralPage = () => {
    return (
        <div className="general-page-container">
            <Header />
            <MainPage />
            <AboutPage />
            <EventsPage />
        </div>
    );
}
