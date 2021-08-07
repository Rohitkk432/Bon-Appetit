const currentuserReducer = (state=[],action) => {
    switch(action.type){
        case 'CURRENTUSER':
            return action.payload
        default:
            return state;
    }
};

export {currentuserReducer};