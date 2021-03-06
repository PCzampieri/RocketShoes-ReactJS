import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './screens/Home';
import Cart from './screens/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
}
