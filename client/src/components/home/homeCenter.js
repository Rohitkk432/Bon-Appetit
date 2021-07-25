import React, { Component } from 'react';
import "./homeCenter.css";
import Searchbar from "../utils/searchbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

class HomeCenter extends Component{
    render(){
        return(
            <>
                <div className="homeCenter">
                    <Searchbar/>
                    <div className="homeContent"></div>
                    <div className="foodCategories">
                        <div className="fcategory"></div>
                        <div className="fcategory"></div>
                        <div className="fcategory"></div>
                        <div className="fcategory"></div>
                        <div className="expandbtn">
                            <FontAwesomeIcon className="expand" icon={faChevronRight} aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default HomeCenter;