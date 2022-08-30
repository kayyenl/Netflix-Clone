import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './global-styles'
import 'normalize.css'

const root = createRoot(document.getElementById('root'));

root.render(
    <>
        <GlobalStyles />
        <App />
    </>
);

