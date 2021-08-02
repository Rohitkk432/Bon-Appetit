export const getrest = (rests) => {
    return{
        type: 'GETREST',
        payload: rests
    }
}

export const getcat = (cats) => {
    return{
        type: 'GETCAT',
        payload: cats
    }
}

export const getrestinmenu = (restid) => {
    return{
        type: 'CURRENTREST',
        payload: restid
    }
}

export const getactivecat = (category) => {
    return{
        type: 'CURRENTCAT',
        payload: category
    }
}

export const getsubcat = (subcats) => {
    return{
        type: 'GETSUBCAT',
        payload: subcats
    }
}