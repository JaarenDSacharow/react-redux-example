//we want to export the action types and use them as constants so that
//there is no chance of mispelling or misusing strings in the application.
//doing this lets us use autocomplete as well as the IDE telling us we
//spelled the action type incorrectly.

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE = 'STORE';
export const DELETE = 'DELETE';
