import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './redux/reducers'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'

import './index.css';


const store = createStore(
    reducers,
    compose(applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


