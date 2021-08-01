import React from 'react';
import "./centerConsole.css";
import HomeCenter from './home/homeCenter';
import Searching from './searching/searching';
import Restres from './restaurant/restres';
import {BrowserRouter as Router 
    // , Switch 
    , Route} from 'react-router-dom';

function CenterConsole (){
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