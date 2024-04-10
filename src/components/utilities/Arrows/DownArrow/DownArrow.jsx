import React from "react";
import './DownArrow.css';
import downArrow from '../img/downarrow.svg';


export default function DownArrow() {
    return (
        <div>
            <img
                className='down-arrow'
                src={downArrow}
                alt='arrow'
            />
        </div>
    );
}
