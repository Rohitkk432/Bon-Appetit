import {React,useState} from 'react';
import './subcat.css';
// import {useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Dishres from './dishres';

function Subcat(params) {
    const subcategory=params.params;
    const dishes = params.dishes;
    // const dishes = useSelector(state=>state.dishes);
    const [subcatexp,setSubcatexp]=useState(true);

    const filterdishes=[];

    dishes.filter((_data)=>{
        if (_data.subcategory === subcategory){
            filterdishes.push(_data);
            return 0;
        }
        else{
            return 0;
        }
    });

    return (
        <div className="subcat">
            <div className="subcatheading">
                <div className="subcatname">{subcategory}</div>
                <FontAwesomeIcon
                onClick={()=>{
                    setSubcatexp(!subcatexp)
                }}
                className='subcat-expand'icon={(subcatexp)?faAngleUp:faAngleDown} aria-hidden="true" />
            </div>
            <div className={(subcatexp)?"disheslist":"disheslist collapse"}>
                {filterdishes.map((data, idx) => (
                    <Dishres {...data} key={idx} />
                ))}
            </div>
            
        </div>
    )
};
export default Subcat;
