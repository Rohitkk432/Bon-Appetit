import React from 'react'
import './resultbox.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {getrestinmenu} from '../../actions/index';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';

function Resultbox(params) {
    const {id,name,location,pricing}=params;
    const dispatch = useDispatch();
    return (
        <div className="resultbox">
            <div className="res-name">{name}</div>
            <div className="res-location">{location}</div>
            <div className="res-pricing">{pricing}</div>
            <Link to='/restres' style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon
                onClick={()=>{
                    dispatch(getrestinmenu(id));
                }}
                icon={faArrowRight} className="open-icon" aria-hidden="true" />
            </Link>
        </div>
    )
}

export default Resultbox
