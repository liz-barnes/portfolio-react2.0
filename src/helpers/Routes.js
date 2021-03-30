import React from 'react';

import { Route, Switch } from 'react-router-dom';
import About from '../Components/About';
import Work from '../Components/Work';
import Resume from '../Components/Resume';
import Contact from '../Components/Contact';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
}
