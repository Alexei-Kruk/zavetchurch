import React from "react";
import './UpArrow.css';
import upArrow from '../img/uparrow.svg'


export default function UpArrow() {
    return (
        <div>
            <img
                className='up-arrow'
                src={upArrow}
                alt='arrow'
            />
        </div>
    );
}
