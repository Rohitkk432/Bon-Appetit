export const getrest = (rests) => {
    return{
        type: 'GETREST',
        payload: rests
    }
}

export const getdish = (dishes) => {
    return{
        type: 'GETDISHES',
        payload: dishes
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