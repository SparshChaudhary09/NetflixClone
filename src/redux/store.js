import {createStore, applyMiddleware} from "redux";

import RootReducer from "./root.reducer";

import logger from "redux-logger";

const middlewares = [];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;