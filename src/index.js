import React from 'react';
import ReactDOM from 'react-dom';

//REDUX
// import combineReducers to be able to split up and then merge your reducers.
//import compose to allow us to use redux devtools
//import applyMiddleWare to use middleware of your choice, like thunk or saga.
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

//Higher Order component that actually leverages the context API, which you wrap your app in
import { Provider } from 'react-redux';

//reducers, split by repsonsibility
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/result';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import thunk from 'redux-thunk';

//NOTE:  When you spilt reducers, these
// keys now represent slices of the state.
// you can no longer access global state
//on its own, but must use state.ctr.{property}, for example.
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})

//here is what we need to import redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

//react-redux creates a Provider HOC that wraps our APP component
// it then receives a prop called STORE into which we pass the 
// store variable that is created by calling createStore(reducer)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
