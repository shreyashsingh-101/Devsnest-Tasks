const placeReducer=(state="",action)=>{

    if(action.type==="place"){
        return action.payload;    
    }
    return state;

    
}
export default placeReducer;