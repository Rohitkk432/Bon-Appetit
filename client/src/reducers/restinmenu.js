const restinmenuReducer = (state=0,action) => {
    switch(action.type){
        case 'CURRENTREST':
            return action.payload
        default:
            return state;
    }
};

export {restinmenuReducer};