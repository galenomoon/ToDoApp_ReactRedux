import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from 'react-redux';

import promise from 'redux-promise' //Middleware to finish incomplete promises 
import multi from "redux-multi"; //Middleware to return an array with so much actions
import thunk from "redux-thunk"; //Middleware to return an array with so much actions

import App from "./main/app";
import reducers from './main/reducers';

//EXTENSION GOOGLE CHROME - DEVTOOLS
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
//Middleware list of life... 
//  ...cycle of React with Redux  ⤵ 
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools) //Application State

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("app"));
//rendering <App/> in element with id:app (div in index.html)
