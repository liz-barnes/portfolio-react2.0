import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../Components/About';
import Work from '../Components/Work';
import Resume from '../Components/Resume';
import Contact from '../Components/Contact';
import ProjectView from '../Components/ProjectView';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/about" />
      </Route>
      <Route exact path="/about" component={About} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/work/:id" component={ProjectView}/>
    </Switch>
  );
}
