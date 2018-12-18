import React from 'react';
import ReactDOM from 'react-dom';

//redux

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Store/reducer';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(reducer);

//react-redux creates a Provider HOC that wraps our APP component
// it then receives a prop called STORE into which we pass the 
// store variable that is created by calling createStore(reducer)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
