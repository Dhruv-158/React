const initialstate = {
    count:1,
}
const reducer = (state = initialstate, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {...state, count:state.count + 1};
        case 'DECREMENt':
            return {...state, count:state.count - 1};
        default:
            return state;
    }
}

export default reducer;