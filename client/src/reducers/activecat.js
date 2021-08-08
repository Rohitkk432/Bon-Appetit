const activecatReducer = (state='',action) => {
    switch(action.type){
        case 'CURRENTCAT':
            return action.payload
        default:
            return state;
    }
};

export {activecatReducer};