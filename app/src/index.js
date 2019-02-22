import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {BrowserRouter as Router}  from 'react-router-dom';
import ReactRouter from './router/router';

ReactDOM.render(<Router>

    <ReactRouter/>
</Router>
    ,
    document.getElementById('root'));

