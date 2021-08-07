import {getalluser} from '../actions/index'

const allusersReducer = (state=[],action) => {
    switch(action.type){
        case 'GETALLUSERS':
            return action.payload
        default:
            return state;
    }
};

const getallusers = ()=>async(dispatch,getState)=>{
    const users =  await fetch(`http://localhost:5000/users`).then((res)=> res.json()).catch((err)=>console.log(err));
    dispatch(getalluser(users));
}


export {allusersReducer, getallusers};