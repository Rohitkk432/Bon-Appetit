import React from 'react'
import './resultbox.css'

function Resultbox(params) {
    const {name,location,pricing}=params;
    return (
        <div className="resultbox">
            <div className="res-name">{name}</div>
            <div className="res-location">{location}</div>
            <div className="res-pricing">{pricing}</div>
        </div>
    )
}

export default Resultbox
