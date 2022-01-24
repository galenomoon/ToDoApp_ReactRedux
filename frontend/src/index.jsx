import React from "react";
import ReactDOM from "react-dom"; //dom page
import App from "./main/app";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducers from './main/reducers';

//EXTENSION GOOGLE CHROME - DEVTOOLS
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
&& window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducers, devTools) //Application State

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("app"));
//rendering <App/> in element with id:app (div in index.html)
