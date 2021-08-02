import {getdish} from '../actions/index'

const dishesReducer = (state=[],action) => {
    switch(action.type){
        case 'GETDISHES':
            return action.payload
        default:
            return state;
    }
};

const getdishes = ()=>async(dispatch,getState)=>{
    const rests =  await fetch(`http://localhost:5000/dishes`).then((res)=> res.json()).catch((err)=>console.log(err));
    dispatch(getdish(rests));
}


export {dishesReducer, getdishes};