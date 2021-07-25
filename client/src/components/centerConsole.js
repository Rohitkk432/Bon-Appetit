import React, { Component } from 'react';
import "./centerConsole.css";
import HomeCenter from './home/homeCenter';

class CenterConsole extends Component{
    render(){
        return(
            <>
                <div className="centerConsole">
                    <HomeCenter/>
                </div>
            </>
        )
    }
}

export default CenterConsole;