import React from 'react';
import "./restres.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function Restres (){
    return(
        <>
            <div className="restres">
                <Link to='/searching' className="search--bar" style={{ textDecoration: 'none' }}>
                    <div className="searchbox">
                        <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
                        <input 
                            type="text" 
                            placeholder="Search"
                            className="searchbar"
                        />
                    </div>
                </Link>        
            </div>
        </>
    )
}

export default Restres;