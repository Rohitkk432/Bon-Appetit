import {getcustomcat} from '../actions/index'

const customcatReducer = (state=[],action) => {
    switch(action.type){
        case 'GETCUSTOMCAT':
            return action.payload
        default:
            return state;
    }
};

const getcustomcats = ()=>async(dispatch,getState)=>{
    const customcats =  await fetch(`http://localhost:5000/customcategory`).then((res)=> res.json()).catch((err)=>console.log(err));
    dispatch(getcustomcat(customcats));
}


export {customcatReducer, getcustomcats};