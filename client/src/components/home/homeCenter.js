import {React,useEffect} from 'react';
import "./homeCenter.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faSearch } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {getrests} from "../../reducers/restget";
import {getdishes} from "../../reducers/dishesget";
import {useDispatch} from 'react-redux';

function HomeCenter (){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getrests());
        dispatch(getdishes());
    },[dispatch]);

    return(
        <>
            <div className="homeCenter">
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