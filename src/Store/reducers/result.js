import * as actionTypes from '../actions/actionTypes';

//spilt the reducers by responsiblity.
//this reducer is responsible only for results. (Storing)

const initialState = {
    results: []
}

//reducers split like this cannot access global state!
//thus you cannot use state.counter as the value as before, but only
//the value of a dispatched action!  See line 19.

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE:
            return {
                ...state,
                results:state.results.concat({id: new Date(), value: action.result})  //immutable way to update a new array
            }
        case actionTypes.DELETE:
            
            const newResults = state.results.filter( (result) => {return result.id !== action.resultElId})
            return {
                ...state,
                results: newResults  //immutable way to remove from an array
            }

    }
    return state;
}

export default resultsReducer;
