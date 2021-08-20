import {getorder} from '../actions/index'

const orderReducer = (state=[],action) => {
    switch(action.type){
        case 'GETORDER':
            return action.payload
        default:
            return state;
    }
};

const getorders = ()=>async(dispatch,getState)=>{
    const orders =  await fetch(`http://localhost:5000/orders`).then((res)=> res.json()).catch((err)=>console.log(err));
    dispatch(getorder(orders));
}


export {orderReducer, getorders};