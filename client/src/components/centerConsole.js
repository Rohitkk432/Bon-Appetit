import {React,useEffect} from 'react';
import "./centerConsole.css";
import HomeCenter from './home/homeCenter';
import Searching from './searching/searching';
import Restres from './restaurant/restres';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {getrests} from "../reducers/restget";
import {getdishes} from "../reducers/dishesget";
import {getcustomcats} from '../reducers/customcatget';
import {getcustomizations} from '../reducers/customizationget';
import {useDispatch} from 'react-redux';

function CenterConsole (){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getrests());
        dispatch(getdishes());
        dispatch(getcustomcats());
        dispatch(getcustomizations());
    },[dispatch]);
    return(
        <Router>
            <div>
                <div className="centerConsole">
                    <Route path='/' exact component={HomeCenter} />
                    <Route path='/searching' exact component={Searching} />
                    <Route path='/restres' exact component={Restres} />
                </div>
            </div>
        </Router>
    )
}

export default CenterConsole;