import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'scss/index.scss';
import 'css/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from 'reduxStore/store'

const root = createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>

);