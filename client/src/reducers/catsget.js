import {getcat} from '../actions/index';

const catsReducer = (state=[],action) => {
    switch(action.type){
        case 'GETCAT':
            return action.payload
        default:
            return state;
    }
};

const getcats = ()=>async(dispatch,getState)=>{
    const id = getState().restId;
    const rests =  await fetch(`http://localhost:5000/restaurant/cat/${id}`).then((res)=> res.json()).catch((err)=>console.log(err));
    dispatch(getcat(rests));
}

export {catsReducer, getcats};