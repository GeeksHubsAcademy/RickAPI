import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Contact from './containers/Contact';
import Detalles from './containers/Detalles';
import PageNotFound from './containers/PageNotFound'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacto" component={Contact} />
        <Route path="/personaje/:id" component={Detalles} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
