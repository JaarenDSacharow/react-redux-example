//we want to export the action types and use them as constants so that
//there is no chance of mispelling or misusing strings in the application.
//doing this lets us use autocomplete as well as the IDE telling us we
//spelled the action type incorrectly.


//these are action creators..They are just functions that return actions.
//we use them to return actions so that we can make use of asynchronous middleware,
//which we couldn't do if we just called action types and dispatched them directly
//from the component. 

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE = 'STORE';
export const DELETE = 'DELETE';


export const increment = () => {
    return {
        type:INCREMENT
    };
}

export const decrement = () => {
    return {
        type:DECREMENT
    };
}

export const add = (number) => {
    return {
        type:ADD, 
        value: number
    }
}

export const subtract = (number) => {
    return {
        type:SUBTRACT, 
        value: number
    }
}

//this is the synchronous function
//that the thunk calls. ONLY 
//synchronous actions may update
//the store.  Thunks never touch
// the reducer.
export const saveResult = (res) => {
    return {
        type:STORE, 
        result: res
    }

}
export const store = (res) => {
    //this function is a thunk.
    //we get this function into which we
    //can pass dispatch into as a result of thunk.
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
        type:DELETE, 
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



