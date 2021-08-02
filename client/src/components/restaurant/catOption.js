import React from 'react';
import './catOption.css';
import {useDispatch} from 'react-redux';
import {getactivecat} from '../../actions/index';

function CatOption(params) {
    const {category}=params
    const dispatch = useDispatch();
    return (
        <div
        onClick={()=>{
            dispatch(getactivecat(category))
        }} className="catOption">{category}</div>
    )
}

export default CatOption;

