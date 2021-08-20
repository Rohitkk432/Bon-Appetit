import {React,useEffect,useState,useCallback} from 'react';
import "./restres.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import Subcat from './subcat';
import CatOption from './catOption';
import {useSelector, useDispatch} from 'react-redux';
import {getactivecat} from '../../actions/index';

import axios from 'axios';

function Restres (){
    // const dishes = useSelector(state => state.dishes);
    const [restId] =useState(useSelector(state => state.restId));
    // const rests = useSelector(state => state.rests);
    const [activeCategory] = useState(useSelector(state => state.activeCategory));
    const dispatch = useDispatch();

    const [rests,setRests]=useState([]);
    const [dishes,setDishes]=useState([]);

    const [cat,setCat]=useState([]);
    const [subcat,setSubcat]=useState([]);
    const [rest,setRest]=useState([]);
    const [rand,setRand]=useState(4);

    //functions---------------------------------------------------
    const CategoryFilter= useCallback((data,restid)=>{
        const categories=[];
        data.filter((_data)=>{
            if (_data.restaurantid === restid){
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
        });
        setCat(categories);

        //setting active cat so previous active cat will not be displayed when opening restaurant

        if(categories[0]){
            dispatch(getactivecat(categories[0]));
        }
    },[dispatch]);

    function RestFilter(data,restid){
        const _rest=[];
        data.filter((_data)=>{
            if (_data.id === restid){
                _rest.push(_data);
                return 0;
            }
            else{
                return 0;
            }
        })
        setRest(_rest);
    }

    const SubcatFilter= useCallback((data,activecategory)=>{
        const subcategories=[];
        data.filter((_data)=>{
            if (_data.category === activecategory){
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
    },[])

    //-----------------------------------------------------------------

    useEffect(()=>{

        async function fetchData(){
            
            if (rests.length===0 && dishes.length===0){
                let restid;

                await axios.get(`http://localhost:5000/restaurant`)
                .then((res)=> res.data)
                .then((res)=>{
                    setRests(res);
                    if(restId){
                        RestFilter(res,restId);
                    }
                    else{
                        restid=parseInt(localStorage.getItem("restId"));
                        RestFilter(res,parseInt(localStorage.getItem("restId")));
                    }
                })
                .catch((err)=>console.log(err));

                await axios.get(`http://localhost:5000/dishes`)
                .then((res)=> res.data)
                .then((res)=>{
                    setDishes(res);
                    if(restId){
                        CategoryFilter(res,restId);
                    }
                    else{
                        CategoryFilter(res,restid);
                        SubcatFilter(dishes,localStorage.getItem("activeCategory"));
                    }
                })
                .catch((err)=>console.log(err));
            }
            else if(activeCategory!==""){
                console.log("entered else");
                SubcatFilter(dishes,activeCategory);
            }

        }

        fetchData();

    },[CategoryFilter,restId,activeCategory,SubcatFilter,dishes,rests])

    

    // useEffect(() => {

    //     console.log(dishes);
    //     console.log(rests);

    //     CategoryFilter(dishes,restId);

    //     RestFilter(rests,restId);

    // },[dishes,rests,restId,dispatch,CategoryFilter]);

    // useEffect(() => {
    //     //subcategory filtering --->
    //     SubcatFilter(dishes,activeCategory)
    //     setRand(rand=>rand+rand);

    // },[dishes,activeCategory,SubcatFilter]);

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
                            <Subcat params={data} key={idx+rand} dishes={dishes}/>
                        ))}
                    </Scrollbars>
                </div>
            </div>
        </>
    )
}

export default Restres;