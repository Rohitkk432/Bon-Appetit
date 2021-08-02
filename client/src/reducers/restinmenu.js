const restinmenuReducer = (state=1,action) => {
    switch(action.type){
        case 'CURRENTREST':
            return action.payload
        default:
            return state;
    }
};

export {restinmenuReducer};