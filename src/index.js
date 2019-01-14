import React from 'react';
import ReactDOM from 'react-dom';

//redux
// import combineReducers to be able to split up and then merge your reducers.
import { createStore, combineReducers } from 'redux';
//HO component that actually leverages the context API, which you wrap your app in
import { Provider } from 'react-redux';

//reducers
import counterReducer from './Store/reducers/counter';
import resultsReducer from './Store/reducers/result';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//NOTE:  When you spilt reducers, these
// keys now represent slices of the state.
// you can no longer access global state
//on its own, but must use state.ctr.{property}, for example.
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})
const store = createStore(rootReducer);

//react-redux creates a Provider HOC that wraps our APP component
// it then receives a prop called STORE into which we pass the 
// store variable that is created by calling createStore(reducer)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
