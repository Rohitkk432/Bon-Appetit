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

export const getcustomization = (customization) => {
    return{
        type: 'GETCUSTOMIZATION',
        payload: customization
    }
}

export const getcustomcat = (customcat) => {
    return{
        type: 'GETCUSTOMCAT',
        payload: customcat
    }
}

export const getalluser = (users) => {
    return{
        type: 'GETALLUSERS',
        payload: users
    }
}

export const getorder = (orders) => {
    return{
        type: 'GETORDER',
        payload: orders
    }
}


export const getrestinmenu = (restid) => {
    return{
        type: 'CURRENTREST',
        payload: restid
    }
}

export const getcurrentuser = (currentuser) => {
    return{
        type: 'CURRENTUSER',
        payload: currentuser
    }
}

export const getactivecat = (category) => {
    return{
        type: 'CURRENTCAT',
        payload: category
    }
}