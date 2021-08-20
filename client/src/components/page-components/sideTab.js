import {React} from 'react';
import "./sideTab.css";
import Orderslist from '../orders/orderslist';

function SideTab (){
    return(
        <div className="sideTab">
            <Orderslist/>
        </div>
    )
}

export default SideTab;