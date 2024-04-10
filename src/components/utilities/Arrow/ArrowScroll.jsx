import React from "react";
import './ArrowScroll.css';
import downArrow from './downarrow.svg';


export default function ArrowScroll() {
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
