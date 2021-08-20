import {React,useEffect} from 'react';
import "./centerConsole.css";
import HomeCenter from '../home/homeCenter';
import Searching from '../searching/searching';
import Restres from '../restaurant/restres';
import {Route} from 'react-router-dom';
import {getrests} from "../../reducers/restget";
import {getdishes} from "../../reducers/dishesget";
import {getcustomcats} from '../../reducers/customcatget';
import {getcustomizations} from '../../reducers/customizationget';
import {getorders} from '../../reducers/ordersget';
import {useDispatch,useSelector} from 'react-redux';
import {getactivecat,getrestinmenu} from '../../actions/index';

function CenterConsole (){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getrests());
        dispatch(getdishes());
        dispatch(getcustomcats());
        dispatch(getcustomizations());
        dispatch(getorders());
    },[dispatch]);

    const activeCategory = useSelector(state=>state.activeCategory);
    const restId=useSelector(state=>state.restId);

    useEffect(()=>{
        
        if(restId===0 && activeCategory===""){
            dispatch(getactivecat(localStorage.getItem("activeCategory")));
            dispatch(getrestinmenu(localStorage.getItem("restId")));
        }
        else{
            localStorage.setItem("activeCategory",activeCategory);
            localStorage.setItem("restId",restId);
        }

    },[dispatch,restId,activeCategory])
    
    return(
        <div>
            <div className="centerConsole">
                <Route path='/home' exact component={HomeCenter} />
                <Route path='/home/searching' exact component={Searching} />
                <Route path='/home/restres' exact component={Restres} />
            </div>
        </div>
    )
}

export default CenterConsole;