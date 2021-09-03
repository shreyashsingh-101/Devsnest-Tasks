const userReducer = (state='', action) => {
    if (action.type === 'CHNG_USERNAME' ){
        return state=action.payload;
    }
    return state;
}

export default userReducer;