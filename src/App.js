import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Queer from "./queer";
import Homepage from "./homepage";


function App() {
    return (
        <Router>
            <div>
                <Homepage/>
                <Route exact path="/queer" component={Queer} />
            </div>
        </Router>

    );
}
export default App;
