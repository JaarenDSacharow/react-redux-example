import * as actionTypes from '../actions/actionTypes';

import {updateObject} from '../utility';

//spilt the reducers by responsiblity.
//this reducer is responsible only for results. (Storing)

const initialState = {
    results: []
}

//reducers split like this cannot access global state!
//thus you cannot use state.counter as the value as before, but only
//the value of a dispatched action!  See line 25.

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE:
        // You could transform data here, before you return.
        //it may be preferable to do so here, as the action
        //creators exist only to receive dispatches and pass it off
        //to the reducer
            return {
                ...state,
                results:state.results.concat({id: new Date(), value: action.result})  //immutable way to update a new array
            }
        case actionTypes.DELETE:
            
            const newResults = state.results.filter( (result) => {return result.id !== action.resultElId}) //immutable way to remove from an array, it returns a new array copied
            //using utility function instead of returning the object here
            return updateObject(state, { results: newResults } );

    }
    return state;
}

export default resultsReducer;
