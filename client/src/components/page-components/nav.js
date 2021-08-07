import React from 'react';
import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faClipboardList, faHeart, faMotorcycle} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import SignoutButtton from './signoutbutton';

function Nav (){
    return(
        <>
            <div className="Nav">
                <div className="navIcons">
                    <Link to='/home' style={{ textDecoration: 'none' }}>
                        <div className="navIcon">
                            <FontAwesomeIcon className="icons" icon={faHome} aria-hidden="true" />
                        </div>
                    </Link>
                    <div className="navIcon">
                        <FontAwesomeIcon className="icons" icon={faClipboardList} aria-hidden="true"/>
                    </div>
                    <div className="navIcon">
                        <FontAwesomeIcon className="icons" icon={faHeart} aria-hidden="true" />
                    </div>
                    <div className="navIcon">
                        <FontAwesomeIcon className="icons" icon={faMotorcycle} aria-hidden="true" />
                    </div>

                    {/* need to shift signout btn this to somewhere else */}
                    <SignoutButtton />
                </div>
            </div>
        </>
    )
}

export default Nav;