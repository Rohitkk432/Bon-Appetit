const activecatReducer = (state='Ice Creams',action) => {
    switch(action.type){
        case 'CURRENTCAT':
            return action.payload
        default:
            return state;
    }
};

export {activecatReducer};