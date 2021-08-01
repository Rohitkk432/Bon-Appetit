import {restReducer} from './restget';


import {combineReducers} from 'redux';

const allReducers = combineReducers({
    rests : restReducer
})

export default allReducers;