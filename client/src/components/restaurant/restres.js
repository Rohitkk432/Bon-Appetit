import {React,useEffect} from 'react';
import "./restres.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import {getcats} from '../../reducers/catsget';
import {getsubcats} from '../../reducers/subcatsget';
import Subcat from './subcat';
import CatOption from './catOption';
import {useSelector, useDispatch} from 'react-redux';


function Restres (){
    const cats = useSelector(state => state.cats);
    const subcats = useSelector(state => state.subcats);
    const activeCategory = useSelector(state => state.activeCategory);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getcats());
        dispatch(getsubcats());
    },[dispatch,activeCategory]);

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
                <div className="restinfo"></div>
                <div className="restmenu">
                    <div className="restcat">
                        {cats.map((data, idx) => (
                            <CatOption {...data} key={idx} />
                        ))}
                    </div>
                    <Scrollbars style={{ width: "70%", height: "95%" }}>
                        {subcats.map((data, idx) => (
                            <Subcat {...data} key={idx} />
                        ))}
                    </Scrollbars>
                </div>
            </div>
        </>
    )
}

export default Restres;