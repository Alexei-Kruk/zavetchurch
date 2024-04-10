import React from "react";

import Header from "./components/Header/Header";
import Main from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";

export default function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <AboutPage />
        </div>
    );
}

