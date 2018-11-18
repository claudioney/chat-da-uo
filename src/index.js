import React from 'react';
import { render } from 'react-dom';

import App from './App';
import Sala from './Sala';
import Sobre from './Sobre';

import { BrowserRouter, Switch, Route } from 'react-router-dom'


render(
  <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sobre" component={Sobre} />
            <Route path="/sala" component={Sala} />
        </Switch>
    </ BrowserRouter>,
  document.getElementById('root')
);


