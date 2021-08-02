import React from 'react';
import './subcat.css';

import Dishres from './dishres';

function Subcat(params) {
    const {subcategory}=params;
    console.log(subcategory);
    return (
        <div className="subcat">
            <div className="subcatname">{subcategory}</div>
            <Dishres/>
            <Dishres/>
            <Dishres/>
            <Dishres/>
            <Dishres/>
            <Dishres/>
        </div>
    )
};

export default Subcat;
