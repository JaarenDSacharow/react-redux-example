import * as actionTypes from '../actions/actionTypes';

//updateObject is just a utility function which generically accepts state and new data passed from 
// the action creator and replaces the standard return statement for the reducer, if you choose to do it this way.
//I'll use it twice and leave the return statement on the other two for comparison.
import {updateObject} from '../utility';

//spilt the reducers by responsiblity.
//this reducer is responsible only for counting.

const initialState = {
    counter: 0,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return updateObject(state, {counter: state.counter + 1});
        case actionTypes.DECREMENT:
            return  updateObject(state, {counter: state.counter - 1});
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
      

    }
    return state;
}

export default counterReducer;
