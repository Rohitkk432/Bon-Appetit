import {React} from 'react';
import "./homeCenter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faSearch } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function HomeCenter (){

    return(
        <>
            <div className="homeCenter">
                <Link to='/home/searching' className="search--bar" style={{ textDecoration: 'none' }}>
                    <div className="searchbox">
                        <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
                        <input 
                            type="text" 
                            placeholder="Search"
                            className="searchbar"
                        />
                    </div>
                </Link>
                <div className="homeContent"></div>
                <div className="foodCategories">
                    <div className="fcategory"></div>
                    <div className="fcategory"></div>
                    <div className="fcategory"></div>
                    <div className="fcategory"></div>
                    <div className="expandbtn">
                        <FontAwesomeIcon className="expand" icon={faChevronRight} aria-hidden="true"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCenter;