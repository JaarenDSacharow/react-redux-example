import * as actionTypes from '../actionTypes';

//these are action creators..They are just functions that return actions.
//we use them to return actions so that we can make use of asynchronous middleware,
//which we couldn't do if we just called action types and dispatched them directly
//from the component. 

export const increment = () => {
    return {
        type:actionTypes.INCREMENT
    };
}

export const decrement = () => {
    return {
        type:actionTypes.DECREMENT
    };
}

export const add = (number) => {
    return {
        type:actionTypes.ADD, 
        value: number
    }
}

export const subtract = (number) => {
    return {
        type:actionTypes.SUBTRACT, 
        value: number
    }
}