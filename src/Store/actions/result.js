import * as actionTypes from './actionTypes';

//these are action creators..They are just functions that return actions.
//we use them to return actions so that we can make use of asynchronous middleware,
//which we couldn't do if we just called action types and dispatched them directly
//from the component. 



//this is the synchronous function
//that the thunk calls. ONLY 
//synchronous actions may update
//the store.  Thunks never touch
// the reducer.
export const saveResult = (res) => {
    //you could  put  data trnasforming logic
    //here or in the reducer if you wish,
    // but it may be preferable to do so in the
    //reducer.  Just be consistent.
    return {
        type:actionTypes.STORE, 
        result: res
    }

}
export const storeResult = (res) => {
    //this function is a thunk. We get this function into which we
    //can pass `dispatch` into. essentially this function recieves the dispatch
    //from the action, does something in between, and then dispatches AGAIN to the synchronous
    //function directly above this one. you would handle side effects here, like
    //reaching out to a server or storage. here, it's just simulated by timeout.

    //additionally, you can pass `getState` to this thunk, and then have access to 
    //the state (remember to prefix with the reducer alias)
    //ideally you should pass whatever the action creator needs from the container component,
    //but if you cannot, you can access any aprt of the state this way.
    return (dispatch, getState) => {
        setTimeout(
            ()=>{
                const OldCount = getState().ctr.counter;
                console.log(OldCount);
                dispatch(saveResult(res))
            },2000)
    }
}

export const removeNumber = (id) => {
    return {
        type:actionTypes.DELETE, 
        resultElId: id
    }

}

//another thunk
export const remove = (id) => {
    return(dispatch) =>{
        setTimeout(
            ()=>{
                dispatch(removeNumber(id))
            },2000)
    }

}

