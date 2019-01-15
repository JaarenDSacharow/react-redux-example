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
    return {
        type:actionTypes.STORE, 
        result: res
    }

}
export const store = (res) => {
    //this function is a thunk.
    //we get this function into which we
    //can pass `dispatch` into.
    //essentially this function recieves the dispatch
    //from the action, does something in between, and
    //then dispatches AGAIN to the synchronous
    //function directly above this one.
    //you would handle side effects here, like
    //reaching out to a server or storage.
    //here, it's just simulated by timeout.
    return (dispatch) => {
        setTimeout(
            ()=>{
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

