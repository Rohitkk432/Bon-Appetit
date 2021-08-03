import React from 'react';
import './subcat.css';
import {useSelector} from 'react-redux';

import Dishres from './dishres';

function Subcat(params) {
    const subcategory=params.params;
    const dishes = useSelector(state=>state.dishes);

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
            <div className="subcatname">
                {subcategory}
            </div>
            {filterdishes.map((data, idx) => (
                <Dishres {...data} key={idx} />
            ))}
        </div>
    )
};

export default Subcat;
