import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import reducers from './reducers'

let middlewares = [thunk];

if (process.env.NODE_ENV !==  'production'){
    middlewares.push(logger)
}

export const store = createStore(combineReducers(reducers),composeWithDevTools(applyMiddleware(...middlewares)));

