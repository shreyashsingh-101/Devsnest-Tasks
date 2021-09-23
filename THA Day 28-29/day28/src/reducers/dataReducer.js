const dataReducer= (state = {},action)=>{
    if(action.type==="data"){
        return action.payload;
    }
    return state;

}
export default dataReducer;