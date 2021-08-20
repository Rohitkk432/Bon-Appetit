import {React,useEffect,useState} from 'react';
import './orderbox.css'
import {useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function Orderbox(params) {
    const {dishid,finalprice}=params;
    const dishes=useSelector(state=>state.dishes);
    const [dishname,setDishname]=useState("");
    useEffect(()=>{
        dishes.filter((_data)=>{
            if(_data.id===dishid){
                setDishname(_data.name);
                return 0;
            }
            else{
                return 0;
            }
        })
    })

    return (
        <div className="orderbox">
            <div className="orderdishname">{dishname}</div>
            <div className="orderdishfinalprice">{finalprice}</div>
            <FontAwesomeIcon className='minus-icon' icon={faMinus} aria-hidden="true" />
        </div>
    )
}

export default Orderbox;