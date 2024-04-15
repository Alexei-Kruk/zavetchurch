import React, { useState } from "react";
import './LearnMoreBtn.css';

import HomegroupPage from "../../../ModalWindows/HomegroupPage/HomegroupPage";


export const LearnMoreBtn = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    
    return (
        <div className="btn-container">
            <button
                className="btn"
                onClick={openModal}
            >
                Узнать подробнее
            </button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <HomegroupPage />
                    </div>
                </div>
            )}

        </div>
    );
}
