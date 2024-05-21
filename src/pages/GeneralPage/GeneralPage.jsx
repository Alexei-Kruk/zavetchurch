import React from "react";
import './GeneralPage.css';

import { Header } from "../../components/Header/Header";
import { MainPage } from "../MainPage/MainPage";
import { AboutPage } from "../AboutPage/AboutPage";
import { SermonsPage } from "../SermonsPage/SermonsPage";
import { BlogPage } from "../BlogPage/BlogPage";
import { EventsPage } from "../EventsPage/EventsPage";
import { ContactsPage } from "../ContactsPage/ContactsPage";
import { HeaderSmallMenu } from "../../components/Header/HeaderSmallMenu/HeaderSmallMenu";
import TestPage from "../TestPage/TestPage";


export const GeneralPage = () => {
    return (
        <div className="general-page-container">
            <Header />
            <HeaderSmallMenu />
            <MainPage />
            <hr />
            <AboutPage />
            <hr />
            <SermonsPage />
            <hr />
            <BlogPage />
            <hr />
            <EventsPage />
            <hr />
            <ContactsPage />
            <hr />
            <TestPage />
        </div>
    );
}
