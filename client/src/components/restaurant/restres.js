import {React
    ,useEffect
    ,useState
} from 'react';
import "./restres.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import Subcat from './subcat';
import CatOption from './catOption';
import {useSelector
    // , useDispatch
} from 'react-redux';


function Restres (){
    const dishes = useSelector(state => state.dishes);
    const restId = useSelector(state => state.restId);
    // const cats = useSelector(state => state.cats);
    // const subcats = useSelector(state => state.subcats);
    const activeCategory = useSelector(state => state.activeCategory);
    // const dispatch = useDispatch();

    const [cat,setCat]=useState([]);
    const [subcat,setSubcat]=useState([]);


    useEffect(() => {
        //category filtering --->
        const categories=[];
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
        setCat(categories);

    },[dishes,restId]);

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

    },[dishes,activeCategory]);

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
                        {cat.map((data, idx) => (
                            <CatOption params={data} key={idx} />
                        ))}
                    </div>
                    <Scrollbars style={{ width: "70%", height: "95%" }}>
                        {subcat.map((data, idx) => (
                            <Subcat params={data} key={idx} />
                        ))}
                    </Scrollbars>
                </div>
            </div>
        </>
    )
}

export default Restres;