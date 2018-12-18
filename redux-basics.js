const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer
//the reducer is the only thing that can update the state
//the reducer recieves two arguments; the current state and the action
const rootReducer = (state = initialState, action) => {

    switch(action.type)  {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
            
        case 'ADD_COUNTER':
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
return state;

}

//Store

const store = createStore(rootReducer);
console.log(store.getState());

//Subscription  (set up before the actions)

// this allows us to get state without having to manually call getState;
// that is we can immediately react to changes when state changes rather
// than having to check for the changed state

store.subscribe(()=>{
    console.log('[Subscription]: ', store.getState())
})


//Dispatching Action

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});


