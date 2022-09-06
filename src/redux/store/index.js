import { configureStore } from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import productReducer from 'reduxStore/reducers/productReducer.js';

const logger = createLogger();

export const store = configureStore({
    reducer:{
        productReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)

})

