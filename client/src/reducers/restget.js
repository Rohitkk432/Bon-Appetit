import {getrest} from '../actions/index'

const restReducer = (state=[],action) => {
    switch(action.type){
        case 'GETREST':
            return action.payload
        default:
            return state;
    }
};

const getrests = ()=>async(dispatch,getState)=>{
    const rests =  await fetch(`http://localhost:5000/restaurant`).then((res)=> res.json());
    dispatch(getrest(rests));
}


export {restReducer, getrests};