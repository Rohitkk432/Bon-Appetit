import {getsubcat} from '../actions/index';

const subcatsReducer = (state=[],action) => {
    switch(action.type){
        case 'GETSUBCAT':
            return action.payload
        default:
            return state;
    }
};

const getsubcats = ()=>async(dispatch,getState)=>{
    const activeCategory = getState().activeCategory;
    const subcats =  await fetch(`http://localhost:5000/restaurant/subcat/${activeCategory}`).then((res)=> res.json()).catch((err)=>console.log(err));
    dispatch(getsubcat(subcats));
}

export {subcatsReducer, getsubcats};