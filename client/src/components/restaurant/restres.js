import {React,useEffect,useState} from 'react';
import "./restres.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import Subcat from './subcat';
import CatOption from './catOption';
import {useSelector, useDispatch} from 'react-redux';
import {getactivecat} from '../../actions/index';

function Restres (){
    const dishes = useSelector(state => state.dishes);
    const restId = useSelector(state => state.restId);
    const rests = useSelector(state => state.rests);
    const activeCategory = useSelector(state => state.activeCategory);
    const dispatch = useDispatch();

    const [cat,setCat]=useState([]);
    const [subcat,setSubcat]=useState([]);
    const [rest,setRest]=useState([]);
    const [rand,setRand]=useState(4);

    useEffect(() => {
        //category filtering --->
        const categories=[];
        const _rest=[];
        dishes.filter((_data)=>{
            if (_data.restaurantid === restId){
                if (!categories.includes(_data.category)){
                    categories.push(_data.category);
                    return 0;
                }
                else{
                    return 0;
                }
            }
            else{
                return 0;
            }
        })
        rests.filter((_data)=>{
            if (_data.id === restId){
                _rest.push(_data);
                return 0;
            }
            else{
                return 0;
            }
        })
        setCat(categories);
        setRest(_rest);

        //setting active cat so previous active cat will not be displayed when opening restaurant
        if(categories[0]){
            dispatch(getactivecat(categories[0]));
        }
    },[dishes,rests,restId,dispatch]);

    useEffect(() => {
        //subcategory filtering --->
        const subcategories=[];
        dishes.filter((_data)=>{
            if (_data.category === activeCategory){
                if (!subcategories.includes(_data.subcategory)){
                    subcategories.push(_data.subcategory);
                    return 0;
                }
                else{
                    return 0;
                }
            }
            else{
                return 0;
            }
        })
        setSubcat(subcategories);
        setRand(rand=>rand+rand);

    },[dishes,activeCategory]);

    return(
        <>
            <div className="restres">
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
                <div className="restinfo">
                    <div className="restname">{rest[0]?.name}</div>
                    <div className="restcuisine">{rest[0]?.cuisine}</div>
                    <div className="reststats">
                        <div className="restpricing">{rest[0]?.pricing}</div>
                        <div className="restrating">
                            <div className="rating">{rest[0]?.rating}</div>
                            <FontAwesomeIcon icon={faStar} aria-hidden="true" />
                        </div>
                    </div>
                    
                </div>
                <div className="restmenu">
                    <div className="restcat">
                        {cat.map((data, idx) => (
                            <CatOption params={data} key={idx} />
                        ))}
                    </div>
                    <Scrollbars style={{ width: "70%", height: "95%" }}>
                        {subcat.map((data, idx) => (
                            <Subcat params={data} key={idx+rand}/>
                        ))}
                    </Scrollbars>
                </div>
            </div>
        </>
    )
}

export default Restres;