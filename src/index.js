import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './/Store/configStore'
import App from "./App";
import Queer from "./queer";
import Homepage from "./homepage";

const store = configureStore();

ReactDOM.render(<Provider store = {store} >
        <Homepage />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
