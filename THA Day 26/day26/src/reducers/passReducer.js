const passReducer = (state='', action) => {
    if (action.type === 'CHNG_PASSWORD' ){
        return action.payload;
    }
    return state;
}

export default passReducer;