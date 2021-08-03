import {getcustomization} from '../actions/index'

const customizationReducer = (state=[],action) => {
    switch(action.type){
        case 'GETCUSTOMIZATION':
            return action.payload
        default:
            return state;
    }
};

const getcustomizations = ()=>async(dispatch,getState)=>{
    const customizations =  await fetch(`http://localhost:5000/customization`).then((res)=> res.json()).catch((err)=>console.log(err));
    dispatch(getcustomization(customizations));
}


export {customizationReducer, getcustomizations};